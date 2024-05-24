import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState,useEffect } from "react";
import axios from "axios";
// import { BiChevronDown } from "react-icons/bi";

// import required modules

const Rooms = () => {

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
      while (randomRoomsEffect.length < 3) {
        let random = Math.floor(Math.random() * rooms.length);
        if (!randomRoomsEffect.includes(rooms[random])) {
          randomRoomsEffect.push(rooms[random]);   
        }
      }
      setRoomsRandom(randomRoomsEffect);
    }
  }, [rooms]);

  // TEMPLATE DATA

  // const [open, setOpen] = useState(false);
  // const [guestOpen, setGuestOpen] = useState(false);
  // const [room, setRoom] = useState(1);
  // const [adult, setAdult] = useState(1);
  // const [children, setChildren] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <>
    {
      rooms ?
      <div className="bg-whiteSmoke dark:bg-lightBlack">
      {/* Rooms section heading */}
      <div className=" py-20 2xl:py-[120px] w-full bg-[url('/images/home-1/section-shape2.png')] bg-no-repeat bg-top bg-opacity-[0.07]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-[20px]">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-1/section-shape1.png"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mb-[6]  font-Garamond font-semibold uppercase">
              Royella’s Rooms & Suites 
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mt-[15px] lg:mt-0">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* Rooms Slider Container */}

          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
              {/* slide - 1 */}
              {roomsRandom ? roomsRandom.map((item,index) => (
                <>
                <div key={index} className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up-left" data-aos-duration="1000">
                  <div className="overflow-x-hidden 3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src={`http://127.0.0.1:8000${item.image}`}
                          className="object-cover group-hover:scale-110 transition-all duration-300 img-random"
                          alt={item.title}
                        />
                      </div>
                      <div className="">
                        <Link to={`/room_details/${item.id}`}>
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white  group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <BsArrowRight className="w-4 h-4 ml-2  text-white" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm  items-center justify-center text-white  absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                        <span className="">${item.price}</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>

                      <div className=" border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <Link to="/room">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              {item.title}
                            </h2>
                          </Link>
                          <p className="text-sm font-normal text-gray  dark:text-lightGray font-Lora">
                            {item.size} SQ.FT/Rooms
                          </p>
                        </div>
                        <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img
                                  src="/images/home-1/room-bottom-icon.png"
                                  alt=""
                                />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  {item.beds} King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              {Array.from({ length: item.rating }, (_, i) => (
                                <li key={i}>
                                  <FaStar />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </>
              )) : <p>Loading...</p>}
              
            </div>

            {/* slider breckpoints */}
            <div className="mx-auto ">
              {loaded && instanceRef.current && (
                <div className="dots flex items-center justify-center">
                  {[
                    ...Array(
                      instanceRef.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          "dot" + (currentSlide === idx ? " active" : "")
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> : <p>Loading...</p>
    }</>
  );
};

export default Rooms;
