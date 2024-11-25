import { Suspense } from "react";
import { MarketplaceHeader } from "../components/MarketplaceHeader";
import { ProductGrid } from "../components/ProductGrid";
import { SearchFilters } from "../components/SearchFilters";
import { Button } from "@ui-marketplace/shared/ui";

export default function HomePage() {
	return (
		<div className='min-h-screen bg-gray-50'>
			<MarketplaceHeader />
			<main className='container mx-auto px-4 py-8'>
				<div className='flex items-center justify-between mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Premium UI Assets
					</h1>
					<Button>Upload Asset</Button>
				</div>
				<div className='grid grid-cols-12 gap-8'>
					<aside className='col-span-3'>
						<Suspense
							fallback={
								<div className='h-[600px] bg-gray-100 rounded-lg animate-pulse' />
							}
						>
							<SearchFilters />
						</Suspense>
					</aside>
					<div className='col-span-9'>
						<Suspense
							fallback={
								<div className='grid grid-cols-3 gap-6'>
									{[...Array(6)].map((_, i) => (
										<div
											key={i}
											className='h-[360px] bg-gray-100 rounded-lg animate-pulse'
										/>
									))}
								</div>
							}
						>
							<ProductGrid />
						</Suspense>
					</div>
				</div>
			</main>
		</div>
	);
}
