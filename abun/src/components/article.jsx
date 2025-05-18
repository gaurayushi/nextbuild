import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";

const data = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    created: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    created: "---",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    created: "---",
  },
  {
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    created: "---",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Generated");
  const tabs = ["Generated", "Published", "Scheduled", "Archived"];

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.keyword.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold mb-6">Articles</h1>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center mb-6 bg-muted p-1 rounded-md">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={`rounded px-4 py-2 text-sm font-medium transition 
                data-[state=active]:bg-blue-600 data-[state=active]:text-white 
                hover:bg-blue-600 hover:text-white`}
            >
              {tab} Articles
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Search */}
      <div className="flex justify-center mb-4">
        <Input
          placeholder="Search for Title & Keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Table */}
      <Card className="w-full rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {["Article Title", "Keyword [Traffic]", "Words", "Created On", "Action", "Publish"].map(
                (head) => (
                  <TableHead key={head} className="text-black font-semibold whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {head}
                      {["Action", "Publish"].includes(head) ? null : (
                        <div className="flex flex-col text-gray-500">
                          <ChevronUpIcon className="w-3 h-3" />
                          <ChevronDownIcon className="w-3 h-3 -mt-1" />
                        </div>
                      )}
                    </div>
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="whitespace-nowrap max-w-[250px] truncate">
                  {item.title}
                </TableCell>
                <TableCell className="whitespace-nowrap max-w-[200px] truncate">
                  {item.keyword}
                </TableCell>
                <TableCell className="whitespace-nowrap">{item.words}</TableCell>
                <TableCell className="whitespace-nowrap">{item.created}</TableCell>
                <TableCell className="whitespace-nowrap">
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:text-white hover:bg-green-600"
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174881.png"
                    alt="wp"
                    className="w-5 h-5 mx-auto"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-sm text-gray-600 gap-2">
        <span>Total {filteredData.length} Article Titles</span>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>entries per page</span>
        </div>
      </div>
    </div>
  );
}
