import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SlLocationPin } from "react-icons/sl";

const hotels = [
  {
    name: "Quinson OVAL Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "SEA Heights Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "Hill Town Hotels",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://www.seapearlcoxsbazar.com/images/rt001.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "ROOM",
  },
  {
    name: "Marmaid Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/98/94/9894650_v1.jpeg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "Sea Shore Hotels",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://www.bdbooking.com/upload/property/hotel/030420190158392195c7ce8bf85d6a.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "King of Heritage",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "luxury",
  },
  {
    name: "Grand Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "Menila Villas  and  Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "Villa",
  },
  {
    name: "Hillton PLUS",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "room",
  },
  {
    name: "Windy ROOMS",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "room",
  },
  {
    name: "Eastern View Hotels",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "luxury",
  },
  {
    name: "STAR HEIGHTS",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
    category: "tiny",
  },
];

const Resorts = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // Function to handle filter input change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchItem = (e) => {
    setSearch(e.target.value);
  };

  const showFilteredResorts = (categoryName) => {
    setFilter(categoryName);
  };

  const filteredElements = hotels?.filter((element) =>
    element?.category.toLowerCase().includes(filter.toLowerCase())
  );

  const seachedElements = filteredElements?.filter((element) =>
    element?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Resorts"
        className="flex items-center justify-center mx-auto input input-bordered input-secondary rounded-none w-full max-w-xs"
        value={search}
        onChange={handleSearchItem}
      />
      <div className="grid grid-cols-4 gap-4 content-center mt-10">
        <button
          onClick={() => showFilteredResorts("villa")}
          className="btn btn-active  bg-rose-500 rounded-none"
        >
          Villa
        </button>
        <button
          onClick={() => showFilteredResorts("room")}
          className="btn btn-active btn-accent  rounded-none"
        >
          Rooms
        </button>
        <button
          onClick={() => showFilteredResorts("luxury")}
          className="btn btn-active btn-accent  rounded-none"
        >
          Luxury
        </button>
        <button
          onClick={() => showFilteredResorts("tiny")}
          className="btn btn-active btn-accent rounded-none"
        >
          Tiny Homes
        </button>
      </div>
      {/* Filter input */}

      {/* Display filtered elements */}
      <div>
        {seachedElements.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className="grid lg:grid-cols-4  lg:gap-3 mb-5  place-items-center">
            {seachedElements.map((element, index) => (
              <div
                key={index}
                className="card w-80 bg-base-100 shadow-xl rounded-none shadow-fuchsia-500/50 hover:shadow-rose-700/50 sm:m-0 lg:m-10 transition duration-220 ease-in-out hover:scale-105  hover:text-cyan-200"
              >
                <figure>
                  <Carousel>
                    <div>
                      <img src={element?.img1} />
                    </div>
                    <div>
                      <img src={element?.img2} />
                    </div>
                    <div>
                      <img src={element?.img3} />
                    </div>
                  </Carousel>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl ">
                    {element?.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <h2 className="card-title">
                    <span className="text-orange-500">
                      <SlLocationPin></SlLocationPin>
                    </span>
                    {element?.location}
                  </h2>
                  <h2 className="card-title text-2xl text-cyan-500">
                    {" "}
                    <span className="text-orange-500">$</span> {element?.rent}
                  </h2>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Beach</div>
                    <div className="badge badge-outline">Buffet</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resorts;
