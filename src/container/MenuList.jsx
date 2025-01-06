import Image from "next/image";
export default function MenuList() {
  const salads = [
    {
      heading: "Starters",
      items: [
        {
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, parmigiano",
          price: "$15.00",
          imgSrc: "/assets/food/m1.jpg",
        },
        {
          name: "Waldorf Salad",
          description: "Lettuce, celery, apple, grape, walnut, waldorf sauce",
          price: "$10.00",
          imgSrc: "/assets/food/m2.jpg",
        },
        {
          name: "Grilled Salmon Salad",
          description: "Grilled salmon, mixed greens, capers, orange slices",
          price: "$25.00",
          imgSrc: "/assets/food/m3.jpg",
        },
        {
          name: "Chicken Cobb Salad",
          description: "Iceberg lettuce, cherry tomatoes, blue cheese, avocado",
          price: "$30.50",
          imgSrc: "/assets/food/m4.jpg",
        },
      ],
    },
    {
      heading: "Main Courses",
      items: [
        {
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, parmigiano",
          price: "$15.00",
          imgSrc: "/assets/food/m1.jpg",
        },
        {
          name: "Waldorf Salad",
          description: "Lettuce, celery, apple, grape, walnut, waldorf sauce",
          price: "$10.00",
          imgSrc: "/assets/food/m2.jpg",
        },
        {
          name: "Grilled Salmon Salad",
          description: "Grilled salmon, mixed greens, capers, orange slices",
          price: "$25.00",
          imgSrc: "/assets/food/m3.jpg",
        },
        {
          name: "Chicken Cobb Salad",
          description: "Iceberg lettuce, cherry tomatoes, blue cheese, avocado",
          price: "$30.50",
          imgSrc: "/assets/food/m4.jpg",
        },
      ],
    },
    {
      heading: "Salads",
      items: [
        {
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, parmigiano",
          price: "$15.00",
          imgSrc: "/assets/about/wine2.jpg",
        },
        {
          name: "Waldorf Salad",
          description: "Lettuce, celery, apple, grape, walnut, waldorf sauce",
          price: "$10.00",
          imgSrc: "/assets/about/wine1.jpg",
        },
        {
          name: "Grilled Salmon Salad",
          description: "Grilled salmon, mixed greens, capers, orange slices",
          price: "$25.00",
          imgSrc: "/assets/about/wine2.jpg",
        },
        {
          name: "Chicken Cobb Salad",
          description: "Iceberg lettuce, cherry tomatoes, blue cheese, avocado",
          price: "$30.50",
          imgSrc: "/assets/about/wine1.jpg",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-primary/20 text-black py-10 lg:p-8">
      <div className="w-full lg:w-[80%] mx-auto">
        <section className="mb-16 px-3">
          <div className="grid grid-cols-1 space-y-20">
            {salads.map((salad, saladIndex) => (
              <div key={saladIndex}>
                <h3 className="text-4xl font-libre font-light py-5 text-center">
                  {salad.heading}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {salad.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="md:p-6 flex items-center space-x-4"
                    >
                      {/* Image div */}
                      <div className="relative rounded-full overflow-hidden group">
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                      </div>
                      {/* Content div */}
                      <div className="flex flex-col gap-1 w-full font-libre font-light">
                        <div className="flex flex-row justify-between items-center">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <div className="flex-1 space-x-3 border-dashed border-b-2 border-primary mx-2"></div>
                          <p className="text-lg font-semibold text-primary">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-gray-600 text-sm font-poppins">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
