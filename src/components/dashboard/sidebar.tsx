"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div>
         {/* Mobile Menu Button */}
      <div className="lg:hidden p-4">
      <Button
        className="bg-[#100C73] text-white"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

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
    </div>
    </div>
    );
};

export default Sidebar;