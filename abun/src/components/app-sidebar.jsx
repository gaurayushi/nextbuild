import { useState } from "react";
import {
  ChevronDown,
  LayoutDashboard,
  BookText,
  Settings,
  Globe,
  User,
  MessageSquare,
  Link2,
  Layers,
  HelpCircle,
} from "lucide-react";

export default function AppSidebar() {
  const [openArticles, setOpenArticles] = useState(true);

  return (
    <aside className="w-full md:w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm px-4 pt-6 pb-4 text-sm text-gray-800 font-medium">

      <h1 className="text-2xl font-black text-black mb-6">abun</h1>
      <div className="mb-6">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
          <select className="w-full pl-10 pr-6 py-2 text-sm rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>amazon.com</option>
            <option>flipkart.com</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="mb-4 border-l-2 border-blue-500 pl-2">
        <button
          onClick={() => setOpenArticles(!openArticles)}
          className="flex w-full justify-between items-center px-1 py-2 hover:bg-gray-100 rounded font-medium"
        >
          <span className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors">
            <BookText className="text-blue-600" size={16} />
            Articles
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 text-gray-600 ${
              openArticles ? "rotate-180" : ""
            }`}
          />
        </button>

        {openArticles && (
          <ul className="ml-6 mt-2 space-y-1 text-[13px] font-normal text-gray-700">
            <SidebarSubItem label="Create Article" />
            <SidebarSubItem label="Generated Articles" active />
            <SidebarSubItem label="Keyword Projects" />
            <SidebarSubItem label="AI Keyword to Article" />
            <SidebarSubItem label="Steal Competitor Keyword" />
            <SidebarSubItem label="Import Keyword from GSC" />
            <SidebarSubItem label="Manual Keyword to Article" />
            <SidebarSubItem label="Bulk Keyword to Article" />
            <SidebarSubItem label="Longtail Keyword to Article" />
            <SidebarSubItem label="Article Settings" />
          </ul>
        )}
      </div>

      <div className="space-y-1 text-[14px]">
        <SidebarItem icon={LayoutDashboard} label="Auto Blog" />
        <SidebarItem icon={Link2} label="Internal Links" />
        <SidebarItem icon={Link2} label="Free Backlinks" />
        <SidebarItem icon={Globe} label="Integrations" />
        <SidebarItem icon={Settings} label="Subscription" />
        <SidebarItem icon={Layers} label="Affiliate Program" />
        <SidebarItem icon={HelpCircle} label="Help Center" />
        <SidebarItem icon={MessageSquare} label="Updates" />
        <SidebarItem icon={MessageSquare} label="Live Chat Support" />
        <SidebarItem icon={User} label="Profile" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 group cursor-pointer">
      <Icon size={16} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
      <span className="group-hover:text-blue-600 transition-colors">{label}</span>
    </div>
  );
}

function SidebarSubItem({ label, active }) {
  return (
    <li
      className={`cursor-pointer hover:text-blue-600 ${
        active ? "text-blue-600 font-semibold" : "text-gray-700"
      }`}
    >
      {label}
    </li>
  );
}
