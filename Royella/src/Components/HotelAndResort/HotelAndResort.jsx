import "./hotel.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HotelAndResort = () => {

  const getMaxRooms = (AllRooms) => {
    let maxRooms = 0;
    AllRooms.forEach(element => {
      maxRooms += element.quantity;
    });
    return maxRooms
  }

  const getRating = (AllRooms) => {
    let rating = 0;
    AllRooms.forEach(element => {
      rating += element.rating;
    });
    rating = rating / AllRooms.length
    return rating
  }

  const [maxRooms, setMaxRooms] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  const [rooms, setRooms] = useState(null);
  const [hotel,setHotel] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hotel/")
      .then((response) => { 
        if (response.data.hotels) {
          setHotel(response.data.hotels);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/rooms/")
      .then((response) => {
        if (response.data.rooms) {
          setRooms(response.data.rooms);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    if (rooms && rooms.length > 0) {
      setMaxRooms(getMaxRooms(rooms));
      setAvgRating(getRating(rooms));
    }
  }, [hotel]);

  //TEMPLATE DATA

  const [, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width:320px)": {
        slides: { perView: 1, spacing: "20" },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {},
  });
  return (
    <>
    {hotel !== null ? <section className="dark:bg-mediumBlack py-20 2xl:py-[120px]">
    <div
      className="Container  sm:overflow-hidden lg:overflow-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="md:flex items-center justify-between">
        <div
          className="flex-1 keen-slider w-screen  md:w-[60%] 2xl:w-[580px] md:pr-5 lg:pr-6 xl:pr-8 2xl:pr-9 3xl:pr-10  md:mt-0"
          ref={sliderRef}
        >
          {/* slider 1 */}
          <div className="keen-slider__slide number-slide1 ">
            <div className="">
              <img
                src={`http://127.0.0.1:8000${hotel.image}`}
                className="h-[85%] lg:h-[90%]"
                alt="Hotel-slider-image"
              />
            </div>
          </div>
          <div className="keen-slider__slide number-slide1 ">
            <div className="">
              <img
                src="/images/home-1/Hotel.png"
                className="h-[85%] md:h-[100%] lg:h-[90%]"
                alt="Hotel-slider-image"
              />
            </div>
          </div>
        </div>

        {/* text */}
        <div className="flex-1 font-Garamond  mt-5 md:mt-0 md:pl-8 p-5  lg:pl-10 2xl:pl-14">
          <h5 className="text-base text-khaki leading-[26px] font-medium">
            LUXURY HOTEL AND RESORT
          </h5>
          <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
            {hotel.title}
          </h1>
          <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
            {hotel.description}
          </p>
          <div className="flex items-center mt-4 md:mt-3 lg:mt-4">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                {maxRooms} +
              </h1>
              <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[94px] lg:w-full">
                Luxury Rooms
              </p>
            </div>
            <div className="ml-10 xl:ml-[60px] 2xl:ml-20 3xl:ml-[100px]">
              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  3xl:text-[70px] leading-[42px] text-khaki font-medium ">
                {avgRating} 
              </h1>
              <p className="text-sm sm:text-base md:text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora pt-5 xl:pt-7 md:w-[134px] lg:w-full">
                Customer Ratings
              </p>
            </div>
          </div>
          <div className="py-5 lg:py-7 xl:py-[30px]">
            <div className="relative overflow-x-hidden ">
              <hr className="w-full h-[2px] bg-[#ddd] text-[#ddd]" />
              <span className="w-[60px] h-[2px] bg-khaki rounded-full absolute -top-[0px] animation-move1"></span>
            </div>
          </div>
          <Link to={"/about"}>
            <button className="btn-primary ">More About</button>
          </Link>
        </div>
      </div>
    </div>
  </section> : <p>Loading...</p>}
  </>
  );
};

export default HotelAndResort;
