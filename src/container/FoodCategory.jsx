import Image from "next/image";
import { PiBowlFoodThin } from "react-icons/pi";

const FoodCategory = () => {
  const categories = [
    {
      name: "Cheeseburger",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/Cheeseburger.svg",
    },
    {
      name: "Pizza Slice",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/Cheeseburger.svg",
    },
    {
      name: "Coffee-Cup",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/Cheeseburger.svg",
    },
    {
      name: "Chicken-Leg",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/ChickenLeg.svg",
    },
    {
      name: "Fish",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/WeddingCake.svg",
    },
    {
      name: "Wedding Cake",
      description:
        "Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan aliquam sit sapien.",
      icon: "assets/food/WeddingCake.svg",
    },
  ];
  return (
    <div className="py-16 bg-secondary">
      <div className="text-center font-libre w-full flex flex-col items-center gap-5 py-5">
        <p className="text-primary tracking-widest">Our Services</p>
        <h2 className="text-4xl font-semibold text-black">Food Category</h2>
        <div className="w-full flex items-center gap-4 justify-center lg:w-[30%]">
          <div className="w-[30%] border border-primary"></div>
          <PiBowlFoodThin size={30} className="text-primary" />
          <div className="w-[30%] border border-primary"></div>
        </div>
      </div>
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] py-5 mx-auto px-4 font-libre">
        {/* Mapping through categories array */}
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md p-8 text-center group">
            <Image
              src={category.icon}
              alt={category.name}
              height={60}
              width={60}
              className=" mx-auto transform transition-transform duration-500 ease-in-out text-primary hover:rotate-[360deg] hover:text-black active:rotate-[360deg]  active:text-black gap-5 "
            />
            <h3 className="text-2xl font-light text-black py-2">
              {category.name}
            </h3>
            <p className="text-xs  text-gray-800 font-poppins leading-6">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FoodCategory;
