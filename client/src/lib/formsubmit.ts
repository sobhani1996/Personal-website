import { CONTACT } from "@/content/offer";

// GitHub Pages can't process forms, so they go to FormSubmit, which emails
// them to CONTACT.email. FormSubmit sits behind a Cloudflare check that
// fetch() requests can't pass, so forms are posted the classic way instead:
// the browser goes to FormSubmit (passing the check if one appears), and
// FormSubmit emails the answers and redirects back to `nextPath`.
const ACTION = `https://formsubmit.co/${CONTACT.email}`;

// FormSubmit's server turns spaces and dots in field names into underscores,
// so readable labels use non-breaking spaces and drop dots.
const NBSP = String.fromCharCode(160);
const fieldName = (label: string) =>
  label.startsWith("_") ? label : label.replace(/ /g, NBSP).replace(/\./g, "");

export function postToFormSubmit(
  fields: Record<string, string>,
  nextPath: string
) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = ACTION;
  form.acceptCharset = "UTF-8";
  form.hidden = true;

  const all: Record<string, string> = {
    ...fields,
    _template: "table",
    _captcha: "false",
    _next: new URL(nextPath, window.location.origin).href,
  };
  for (const [name, value] of Object.entries(all)) {
    // A textarea keeps line breaks, which a hidden input would drop.
    const input = document.createElement("textarea");
    input.name = fieldName(name);
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}
