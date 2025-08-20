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
			<div className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg border border-white/20 rounded-xl shadow-md p-4 transition-all duration-300 flex flex-col">
				<div className="flex justify-between items-start gap-4 mb-3">
					<h2 className="text-lg font-semibold min-w-0 break-words">{title}</h2>
					<span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-purple-300 dark:bg-purple-600 text-white font-medium shadow-sm">
						{category}
					</span>
				</div>

				<button
					type="button"
					onClick={() => setExpanded((prev) => !prev)}
					className="inline-flex items-center justify-center gap-1 px-4 py-1 rounded-full bg-purple-200 dark:bg-purple-500 text-purple-800 dark:text-white text-sm font-medium hover:bg-purple-300 dark:hover:bg-purple-400 transition mb-3 self-start"
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
						<div className="space-y-3 pt-2">
							<p className="text-sm text-gray-700 dark:text-gray-300">
								{content}
							</p>
							{code && (
								<pre className="relative bg-black/20 text-sm p-3 rounded-md overflow-x-auto text-gray-100">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700/50 hover:bg-gray-600/70 transition text-gray-300"
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
									className="inline-block mt-2 px-3 py-1.5 text-sm font-medium text-white rounded-full transition bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 hover:bg-blue-500/40 hover:border-blue-300/50"
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
