

const Category = () => {
    const data = [
        {
          category: "Electronics",
          image: "https://i.ibb.co/Vv993R5/category-One.jpg",
        },
        {
          category: "Accessories",
          image: "https://i.ibb.co/17RsMp8/category-Two.jpg",
        },
        {
          category: "Computers",
          image: "https://i.ibb.co/Z6hcv6B/category-Five.jpg",
        },
        {
          category: "Fitness",
          image: "https://i.ibb.co/2Pp2rB3/category-Four.jpg",
        },
        {
          category: "Home Appliances",
          image: "https://i.ibb.co/rZfqxV8/category-Six.jpg",
        },
        {
          category: "Personal Care",
          image: "https://i.ibb.co/FsPHg1Z/category-Siven.jpg",
        },
        {
          category: "Outdoor",
          image: "https://i.ibb.co/n8PRWt8/category-Tree.jpg",
        },
      ];
    
    return (
        <div className='w-9/12 my-28 mx-auto grid lg:grid-cols-7  md:grid-cols-4 grid-cols-1 gap-5 text-center'>
            {data.map((datas, index) => (
                <div key={index} className="group relative overflow-hidden">
                    <img 
                        src={datas.image} 
                        alt={datas.category} 
                        className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-red-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-md font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        {datas.category}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;
