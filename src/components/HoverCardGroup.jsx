import { useState, useMemo } from "react";
import HoverCardToggle from "./HoverCardToggle.jsx";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HoverCardGroup({ cards }) {
	const [globalExpanded, setGlobalExpanded] = useState(false);

	// Group the data by category and then subcategory
	const groupedData = useMemo(() => {
		return cards.reduce((acc, card) => {
			const { subcategory } = card;
			if (!acc[subcategory]) {
				acc[subcategory] = [];
			}
			acc[subcategory].push(card);
			return acc;
		}, {});
	}, [cards]);

	return (
		<div className="space-y-12">
			<div className="flex justify-center mb-8">
				<button
					onClick={() => setGlobalExpanded((prev) => !prev)}
					className="px-6 py-2 text-base bg-btn-main text-fg rounded-full inline-flex items-center gap-2 hover:bg-brand transition-transform transform hover:scale-105"
				>
					{globalExpanded ? (
						<ChevronUp className="w-5 h-5" />
					) : (
						<ChevronDown className="w-5 h-5" />
					)}
					{globalExpanded ? "Collapse All" : "Expand All"}
				</button>
			</div>

			<div className="space-y-15">
				{Object.entries(groupedData).map(([subcategory, cardItems]) => (
					<section key={subcategory}>
						<h3 className="text-2xl font-semibold text-[rgba(var(--fg-rgb),0.90)] mb-4 border-b-2 border-border pb-2">
							{subcategory}
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{cardItems.map((card, idx) => (
								<HoverCardToggle
									key={idx}
									{...card}
									forceExpand={globalExpanded}
								/>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}