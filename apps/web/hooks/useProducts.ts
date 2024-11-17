"use client";

import { Product } from "@ui-marketplace/shared/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { mockProducts } from "../mock/products";

export function useProducts() {
	const searchParams = useSearchParams();

	return useQuery({
		queryKey: ["products", searchParams.toString()],
		queryFn: () => {
			// Filter products based on search params
			let filteredProducts = [...mockProducts];
			console.log("mockProducts>>>>>>", mockProducts);

			const category = searchParams.get("category");
			const priceRange = searchParams.get("priceRange");

			if (category && category !== "All") {
				filteredProducts = filteredProducts.filter(
					(product) => product.category === category
				);
			}

			if (priceRange) {
				switch (priceRange) {
					case "Under $10":
						filteredProducts = filteredProducts.filter(
							(product) => product.price < 10
						);
						break;
					case "$10 - $50":
						filteredProducts = filteredProducts.filter(
							(product) => product.price >= 10 && product.price <= 50
						);
						break;
					case "$50 - $100":
						filteredProducts = filteredProducts.filter(
							(product) => product.price >= 50 && product.price <= 100
						);
						break;
					case "Over $100":
						filteredProducts = filteredProducts.filter(
							(product) => product.price > 100
						);
						break;
				}
			}

			return Promise.resolve(filteredProducts);
		},
	});
}
