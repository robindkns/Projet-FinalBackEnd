import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const Offers = () => {

  const [rooms, setRooms] = useState(null);
  const [roomsRandom, setRoomsRandom] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/rooms/")
      .then((response) => { 
        if (response.data.rooms) {
          setRooms(response.data.rooms);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let randomRoomsEffect = [];
    if (rooms && rooms.length > 0) {
      while (randomRoomsEffect.length < 4) {
        let random = Math.floor(Math.random() * rooms.length);
        if (!randomRoomsEffect.includes(rooms[random])) {
          randomRoomsEffect.push(rooms[random]);   
        }
      }
      setRoomsRandom(randomRoomsEffect);
    }
  }, [rooms]);

  // TEMPLATE DATA
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width:1200px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
  });
  return (
    <section className="bg-[#f8f6f3] dark:bg-lightBlack">
      <div className="Container py-20 lg:py-[120px] ">
        <div
          className="flex items-center justify-between relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] lg:w-[450px] xl:w-[500px] font-Garamond">
            <h5 className="mb-3 text-base text-khaki leading-[26px] font-medium">
              OFFERS
            </h5>
            <h1 className="text-xl sm:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              ROYELLA’S LIMITED PERIOD BEST OFFERS
            </h1>
          </div>
          <div className="flex items-center lg:space-x-5  space-x-3">
            <button
              className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group"
              disabled
              title="Button disabled use swapping"
            >
              <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
            </button>
            <button
              className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
              hover:border-none group"
              disabled
              title="Button disabled use swapping"
            >
              <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
            </button>
          </div>
        </div>

        <hr className="text-[#e8e8e8] dark:text-[#383838] my-[40px]" />
        {/* offers carusal */}
        <div className="relative">
          <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
            {roomsRandom ? roomsRandom.map((room, index) => (
              <>
              <div key={index} className="keen-slider__slide number-slide1 ">
              <div
                className="overflow-x-hidden group "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="relative">
                  <img
                    src={`http://127.0.0.1:8000${room.image}`}
                    className="w-full h-full object-cover img-random-offers"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-t-0 border-white dark:border-[#3f4040]">
                  <div className="px-6 3xl:px-7 py-2 flex items-center justify-center text-white absolute top-[10px] left-[10px] border-[1px] border-white   group-hover:bg-khaki transition-all duration-300">
                    <span className="text-[22px] leading-[26px] font-Garamond ">
                      {room.discount}% off
                    </span>
                  </div>

                  <div className="bg-white dark:bg-lightBlack">
                    <div className="py-[30px] text-center">
                      <Link to="/room">
                        <h2
                          className="text-[24px] leading-[26px] font-semibold text-lightBlack dark:text-white hover:underline hover:text-khaki dark:hover:text-khaki transition-[0.4s] hover:underline-offset-2
                        "
                        >
                          {room.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div></>
            )) : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
