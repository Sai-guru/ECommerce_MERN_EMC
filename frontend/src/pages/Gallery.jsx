import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import account from '../assets/account.jpg';
import banner1 from '../assets/banner-1.webp';
import banner2 from '../assets/banner-2.webp';
import banner3 from '../assets/banner-3.webp';

const images = [account, banner1, banner2, banner3];

const Gallery = () => {
	const [current, setCurrent] = useState(0);

	const goPrev = () => {
		if (current > 0) setCurrent(current - 1);
	};

	const goNext = () => {
		if (current < images.length - 1) setCurrent(current + 1);
	};

	return (
		<div className='relative w-full max-w-3xl mx-auto mt-8'>
			{/* Image Display */}
			<img
				src={images[current]}
				alt={`Image ${current + 1}`}
				className='w-full h-96 object-cover rounded-xl shadow-lg'
			/>

			{/* Chevron Left */}
			<button
				onClick={goPrev}
				className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80'
				disabled={current === 0}
			>
				<ChevronLeft size={28} />
			</button>

			{/* Chevron Right */}
			<button
				onClick={goNext}
				className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80'
				disabled={current === images.length - 1}
			>
				<ChevronRight size={28} />
			</button>
		</div>
	);
};

export default Gallery;