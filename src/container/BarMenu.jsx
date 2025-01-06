import Image from "next/image";

// src/wineData.js
const wineData = [
  {
    id: 1,
    name: "Riscos Malbec",
    description: "Full, Redcurrant, Spice, Chile",
    price: "$25.00",
    image: "/assets/about/wine1.jpg",
  },
  {
    id: 1,
    name: "Riscos Malbec",
    description: "Full, Redcurrant, Spice, Chile",
    price: "$25.00",
    image: "/assets/about/wine1.jpg",
  },
  {
    id: 2,
    name: "Dom Perignon",
    description: "Stylish, Premium, Iconic, Champagne",
    price: "$30.00",
    image: "/assets/about/wine2.jpg",
  },
  {
    id: 3,
    name: "Amarone Classico",
    description: "Intense, Rich, Spice, Italy",
    price: "$20.00",
    image: "/assets/about/wine1.jpg",
  },
  {
    id: 4,
    name: "Valle Berta Gavi",
    description: "Clean, Soft, Honeysuckle, Italy",
    price: "$45.00",
    image: "/assets/about/wine2.jpg",
  },
];

export default function BannerSection() {
  return (
    <section className="w-full min-h-screen flex md:min-h-fit lg:min-h-screen py-10 md:py-14 lg:py-10   gap-20">
      <div className="w-full md:w-1/2 relative overflow-hidden hidden lg:block">
        <div className="relative w-full h-full transform transition-transform duration-700 ease-in-out hover:scale-110">
          <Image
            src="/assets/about/banner3.jpg"
            alt="bar"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 font-libre flex flex-col gap-5 px-5 lg:px-0">
        <p className="text-sm text-primary tracking-wider">Candóre Wine Bar</p>
        <h1 className="text-4xl font-light">Wine Bar Menu</h1>

        <div className="w-full px-2">
          {wineData.map((wine) => (
            <div
              key={wine.id}
              className="flex items-center justify-between py-4 border-b border-gray-300 "
            >
              <div className="flex items-center gap-4 ">
                <div className="w-14 h-14 rounded-full overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-110 ">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {wine.name}
                  </h2>
                  <p className="text-sm text-gray-500 italic">
                    {wine.description}
                  </p>
                </div>
              </div>
              <div className="text-lg font-medium text-primary ">
                {wine.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
