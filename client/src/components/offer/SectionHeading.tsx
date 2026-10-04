import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={`mb-12 space-y-4 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs font-bold uppercase tracking-wider text-secondary">
          {eyebrow}
        </div>
      )}
      <Tag className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight leading-tight">
        {title}
      </Tag>
      {intro && (
        <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
