// GitHub Pages can't process forms, so submissions go to Web3Forms (free
// plan), which emails them to mori@mrsobhani.uk. The access key is public by
// design: it only lets this site send messages to that inbox.
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "b2838e80-7cb5-43c8-8de1-526cda8899e9";

/**
 * Emails the fields as "label: value" lines, skipping empty ones.
 * Throws an Error with a message that can be shown to the visitor.
 */
export async function sendForm(
  subject: string,
  fields: Record<string, string>,
  replyTo?: string
) {
  const filled = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v?.trim())
  );
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject,
        from_name: "mrsobhani.uk",
        ...(replyTo ? { replyto: replyTo } : {}),
        ...filled,
      }),
    });
  } catch {
    throw new Error(
      "The message couldn't be sent. Please check your internet connection and try again."
    );
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok || String(json.success) !== "true") {
    throw new Error(json.message || "The message couldn't be sent.");
  }
}
