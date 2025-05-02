import heroImg from '../assets/stylish-woman-mobile-phone-near-600nw-2433406041.webp'

const HeroBanner = () => {
  return (
    <div className="w-[90%] mx-auto mt-8">
      <div
        className="h-[600px] bg-cover bg-center rounded-xl relative overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center pl-12 text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-yellow-200">
            Unleash the New You
          </h1>
          <p className="text-xl">
            Elevate your style with our newest arrivals
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;