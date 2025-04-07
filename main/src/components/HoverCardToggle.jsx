import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HoverCardToggle({ title, category, children, forceExpand = null, code = "", link}) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(prev => !prev);

  useEffect(() => {
    if (typeof forceExpand === "boolean") {
      setExpanded(forceExpand);
    }
  }, [forceExpand]);

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current) return;
    wrapperRef.current.style.height = expanded
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [expanded]);

  return (
    <div className="relative card">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 transition-all duration-300 border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-500">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-purple-200 dark:bg-purple-500 text-purple-800 dark:text-white text-sm font-medium hover:bg-purple-300 dark:hover:bg-purple-400 transition mb-3"
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
        <div ref={wrapperRef} className="overflow-hidden transition-all duration-300">
        <div ref={contentRef} className="space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">{children}</p>
          {code && (
          <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-3 rounded-md overflow-x-auto text-gray-800 dark:text-gray-100">
          <code>{code}</code>
          </pre>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-2 items-center px-3 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Learn more on W3Schools
            </a>
          )}
        </div>

        </div>
        <span className="absolute top-2 right-3 text-xs px-2 py-1 rounded-full bg-purple-300 dark:bg-purple-600 text-white font-medium shadow-sm">
          {category}
        </span>
      </div>
    </div>
  );
}
