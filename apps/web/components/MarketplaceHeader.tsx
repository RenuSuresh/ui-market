"use client";

import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../packages/shared/ui/src";

export function MarketplaceHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            DesignHub
          </Link>
          
          <div className="flex-1 px-12">
            <input
              type="search"
              placeholder="Search UI assets..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}