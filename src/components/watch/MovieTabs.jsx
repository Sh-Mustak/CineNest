import { motion } from "framer-motion";

export default function MovieTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="relative flex border-b border-white/[0.07] overflow-x-auto noscroll mb-5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-4 sm:px-6 py-3 text-[11px] sm:text-[12px]
          font-bold tracking-[.1em] uppercase whitespace-nowrap
          transition-colors duration-200
          ${
            activeTab === tab.id
              ? "text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          {tab.label}

          {/* Sliding Indicator */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
