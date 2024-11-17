"use client";

// import { Product } from "@ui-marketplace/shared/types";
import { Download, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	product: any;
}

export function ProductCard(props: ProductCardProps) {
	const { product } = props;
	return (
		<Link href={`/products/${product.id}`}>
			<div className='group bg-white rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg'>
				<div className='relative aspect-[4/3] bg-gray-100'>
					<Image
						src={product.images[0]}
						alt={product.title}
						fill
						className='object-cover'
					/>
					<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity'>
						<div className='absolute bottom-4 left-4 flex items-center space-x-2 text-white'>
							<Download className='h-4 w-4' />
							<span className='text-sm'>{product.downloads}</span>
						</div>
						<button className='absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors'>
							<Heart className='h-4 w-4 text-white' />
						</button>
					</div>
				</div>
				<div className='p-4'>
					<div className='flex items-center justify-between mb-2'>
						<h3 className='font-medium text-gray-900 group-hover:text-blue-600 transition-colors'>
							{product.title}
						</h3>
						<div className='flex items-center space-x-1'>
							<Star className='h-4 w-4 text-yellow-400 fill-yellow-400' />
							<span className='text-sm text-gray-600'>{product.rating}</span>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<div className='relative h-6 w-6 rounded-full overflow-hidden'>
								<Image
									src={product.author.avatar}
									alt={product.author.name}
									fill
									className='object-cover'
								/>
							</div>
							<span className='text-sm text-gray-600'>
								{product.author.name}
							</span>
						</div>
						<span className='font-medium text-gray-900'>${product.price}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
