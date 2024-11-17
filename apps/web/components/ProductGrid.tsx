"use client";

import { Product } from "@ui-marketplace/shared/types";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { mockProducts } from "../mock/products";

export function ProductGrid() {
	const { products, isLoading, error } = useProducts();
	if (isLoading) {
		return (
			<div className='grid grid-cols-3 gap-6'>
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className='h-[360px] bg-gray-100 rounded-lg animate-pulse'
					/>
				))}
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center py-12'>
				<p className='text-red-500'>Failed to load products</p>
			</div>
		);
	}

	return (
		<div className='grid grid-cols-3 gap-6'>
			{mockProducts?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
