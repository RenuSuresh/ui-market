"use client";

import { useState } from "react";
import { Button } from "@ui-marketplace/shared/ui";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  "All",
  "UI Kits",
  "Templates",
  "Icons",
  "Illustrations",
  "Fonts",
];

const priceRanges = [
  { label: "All", min: undefined, max: undefined },
  { label: "Under $10", min: 0, max: 10 },
  { label: "$10 - $50", min: 10, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: undefined },
];

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    searchParams.get("priceRange") || "All"
  );

  const updateFilters = (category: string, priceRange: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (category !== "All") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (priceRange !== "All") {
      params.set("priceRange", priceRange);
    } else {
      params.delete("priceRange");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                updateFilters(category, selectedPriceRange);
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => {
                setSelectedPriceRange(range.label);
                updateFilters(selectedCategory, range.label);
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedPriceRange === range.label
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory("All");
          setSelectedPriceRange("All");
          router.push("/");
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
}