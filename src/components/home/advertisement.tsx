"use client";

import { Button } from "../ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Advertisement() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-[#100C73] font-medium sm:text-base">
          Choosing me as your{" "}
          <span className="text-primary">TRADING COACH</span> will save your
          Money & Energy
        </p>

        {/* register and close button */}
        <div className="flex items-center gap-2">
          <Link href="/registration">
            <Button
              className="bg-[#E4B322] text-xs font-semibold hover:bg-[#E4B322]/90 sm:text-sm"
              size="sm"
            >
              Register Now →
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 border border-black rounded-full"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close banner</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
