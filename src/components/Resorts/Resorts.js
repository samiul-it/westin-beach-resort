import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const hotels = [
  {
    name: "Marmaid Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
  {
    name: "SEA Heights Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
  {
    name: "Hill Town Hotels",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://www.seapearlcoxsbazar.com/images/rt001.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
  {
    name: "Marmaid Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/98/94/9894650_v1.jpeg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
  {
    name: "Marmaid Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://www.bdbooking.com/upload/property/hotel/030420190158392195c7ce8bf85d6a.jpg",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
  {
    name: "Marmaid Beach Resort",
    location: "Coxs Bazar",
    rent: 300,
    img1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1",
    img2: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    img3: "https://www.theresortmumbai.com/images/eefc8c13ce39d3a3f6b6222569e3c6d7.jpg",
    rating: "4",
  },
];

const Resorts = () => {
  return (
    <div className="grid lg:grid-cols-4  lg:gap-3 mb-5  place-items-center">
      {hotels.map((hotel, index) => (
        <div className="card w-80 bg-base-100 shadow-xl rounded-none shadow-fuchsia-500/50 hover:shadow-rose-700/50 sm:m-0 lg:m-10 transition duration-220 ease-in-out hover:scale-105 ">
          <figure>
            <Carousel>
              <div>
                <img src={hotel?.img1} />
              </div>
              <div>
                <img src={hotel?.img2} />
              </div>
              <div>
                <img src={hotel?.img3} />
              </div>
            </Carousel>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">
              {hotel?.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{hotel?.location}</p>
            <h2 className="card-title text-2xl text-cyan-500">
              {" "}
              <span className="text-orange-500">$</span> {hotel?.rent}
            </h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Beach</div>
              <div className="badge badge-outline">Buffet</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resorts;
