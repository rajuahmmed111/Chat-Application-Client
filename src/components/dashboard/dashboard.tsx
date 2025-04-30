"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, MoreHorizontal, Eye, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const videos = [
    { id: 1, title: "How to Master Forex Trading" },
    { id: 2, title: "How to Master Forex Trading" },
    { id: 3, title: "How to Master Forex Trading" },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative z-20 top-0 left-0 lg:translate-x-0 h-full w-64 bg-white border-r transition-transform duration-300 ease-in-out`}
      >
        <nav className="p-6 space-y-2">
          <Link
            href="/videos"
            className="block px-4 py-2 bg-[#100C73] text-white font-medium"
          >
            All Videos
          </Link>
          <Link
            href="/videos/new"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Add New Video
          </Link>
          <Link
            href="/playlists"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Add Playlist
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-[#F1F4F8]">

        <div className="flex justify-end my-4">
        <Button
          className="lg:hidden bg-[#100C73] text-white fixed right-9"
          onClick={toggleSidebar}
        >
           {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        </div>
        <main className="px-5 lg:px-[90px] xl:px-[200px] mt-10">
          <div className="bg-white lg:p-14 p-5">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                All Videos
              </h1>

              {/* Sidebar Toggle Button for Mobile */}
              <div className="flex items-center space-x-2">
                <Button className="bg-[#100C73] hover:bg-[#2d2a5c]">
                  Add New Video
                </Button>
              </div>
            </div>

            <div className="bg-white border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="lg:w-24 text-[#100C73]">No.</TableHead>
                    <TableHead className="text-[#100C73]">Title</TableHead>
                    <TableHead className="lg:w-24 text-right text-[#100C73]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {videos.map((video) => (
                    <TableRow key={video.id}>
                      <TableCell>{video.id}</TableCell>
                      <TableCell>{video.title}</TableCell>
                      <TableCell>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                              <DropdownMenuItem>Archive</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
   