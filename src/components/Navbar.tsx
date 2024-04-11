
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  
    return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive} >
            <Link href='/chai'>
                <div className="font-bold text-lg">
                Microsoft
                </div>
            </Link>
            <Link href={'#'}>
            <div className="font-bold text-lg">
                JP morgan
                </div>
            </Link>
            <Link href={'#'}>
            <div className="font-bold text-lg">
                Intuit
                </div>
            </Link>

        </Menu>
    </div>
  )
}

export default Navbar