import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

export default function HoverCardToggle({ title, category, content, forceExpand = null, code = "", link = ""}) {
  const [expanded, setExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggle = () => setExpanded(prev => !prev);

  useEffect(() => {
    if (typeof forceExpand === "boolean") {
      setExpanded(forceExpand);
    }
  }, [forceExpand]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative card">
      <div className="bg-card-ol backdrop-blur-lg border border-border rounded-xl shadow-md p-4 transition-all duration-300 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h2 className="text-lg font-semibold min-w-0 break-words text-fg">{title}</h2>
          {/*
            The below code is responsible for showing a tag with the "language"
            on each element card. This is not really needed at this point, which
            is why it's been commented out.
            If we change this later, it might be put back in.

          <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-[rgba(var(--brand-rgb),0.45)] text-fg font-medium shadow-sm border border-[rgba(var(--brand-rgb),0.50)]">
            {category}
          </span> */}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center justify-center gap-1 px-4 py-1 rounded-full bg-btn-main text-white text-sm font-medium shadow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow transform filter hover:brightness-110 hover:[text-shadow:0_1px_2px_rgba(0,0,0,0.4)] transition-transform transition-colors transition-shadow duration-300 ease-out mb-3 self-start hover:bg-btn-hover"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" /> Hide
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> Show
            </>
          )}
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{
            gridTemplateRows: expanded ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 pt-2 relative z-10">
              <p className="text-sm text-[rgba(var(--fg-rgb),0.90)]">
                {content}
              </p>
              {code && (
                <pre className="relative z-50 bg-black/50 text-sm p-3 rounded-md overflow-x-auto text-fg shadow-inner">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-[rgba(var(--muted-rgb),0.80)] hover:bg-[rgba(var(--muted-rgb),0.90)] transition text-[rgba(var(--fg-rgb),0.80)]"
                    aria-label="Copy Code"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <code>{code}</code>
                </pre>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1.5 text-sm font-medium text-fg rounded-full backdrop-blur-sm border border-[rgba(var(--brand-rgb),0.45)] bg-[rgba(var(--brand-rgb),0.90)] hover:bg-white hover:text-black transition-colors transition-transform transition-shadow transform hover:-translate-y-0.5 hover:shadow-lg duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[rgba(var(--brand-rgb),0.60)] focus:ring-offset-0"
                >
                  Learn more on W3Schools
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
