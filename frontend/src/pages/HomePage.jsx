// import { useEffect } from "react";
import HeroBanner from './HeroBanner';
import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";
import Gallery from "./Gallery";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = ({ emailOfLogger }) => {
	// const { fetchFeaturedProducts, featuredProducts, isLoading } = useProductStore();

	// useEffect(() => {
	// 	fetchFeaturedProducts();
	// }, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div>
				<h1 className='text-4xl font-bold text-center text-emerald-400 mb-4'>Welcome all</h1>
				<HeroBanner />
			</div>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-3xl sm:text-3xl font-bold text-red-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>
				{emailOfLogger ? (
					<p className="text-center text-xl text-gray-300 mb-8">
						Logged in as: <strong>{emailOfLogger}</strong>
					</p>
				) : (
					<p className="text-center text-xl text-gray-300 mb-8">
						You are not logged in.
					</p>
				)}

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				<div>
					<h2 className='text-3xl font-bold text-center text-emerald-400 mb-4'>Our Gallery</h2>
					<Gallery />
				</div>

				
			</div>
		</div>
	);
};
export default HomePage;