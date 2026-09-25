"use client";

type TabType = "today" | "saved";

type PlanSelectionTabProps = {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
};

const PlansSelectionTab = ({ activeTab, setActiveTab }: PlanSelectionTabProps) => {
    return (
        <div className='bg-[#090b0f] flex items-center gap-8 py-1 px-2 rounded-xl border border-gray-700'>
            <button
                onClick={() => setActiveTab("today")}
                className={`px-8 py-1.5 rounded-xl ${activeTab === "today" ? "bg-[#10131a] border border-gray-700" : " "}`}
            >
                Today&apos;s Plan
            </button>
            <button
                onClick={() => setActiveTab("saved")}
                className={`px-8 py-1.5 rounded-xl ${activeTab === "saved" ? "bg-[#10131a] border border-gray-700" : " "}`}
            >
                Saved
            </button>
        </div>
    )
}

export default PlansSelectionTab