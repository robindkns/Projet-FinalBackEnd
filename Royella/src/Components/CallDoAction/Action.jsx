import { BsPlay } from "react-icons/bs";
import { useState,useEffect } from "react";
import axios from "axios";
import FsLightbox from "fslightbox-react";
const Action = () => {

  const [hotel,setHotel] = useState(null);
  const [manager,setManager] = useState(null);

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
    axios.get("http://127.0.0.1:8000/api/manager/")
      .then((response) => { 
        if (response.data.manager) {
          setManager(response.data.manager);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  //TEMPLATE DATA
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {hotel ? <div className="dark:bg-mediumBlack dark:z-[-1]">
      <section className="Container mt-[-90px] dark:z-[1]">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            className="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="text-base text-khaki leading-[26px] font-semibold">
              MANAGER
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              {hotel.title}
            </h1>
            <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              {hotel.description}
            </p>
            {manager ? <>
            <p className="text-sm sm:text-base font-Lora italic leading-[26px] underline  text-gray dark:text-lightGray font-normal ">
              {manager.quote}
            </p>
            <div className="flex items-center space-x-6 pt-5">
              <img
                src={`http://127.0.0.1:8000${manager.image}`}
                className="w-[65px] h-[65px] object-cover"
                alt=""
              />

              <div className="">
                <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                  {manager.name}
                </h4>
                <p className="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                  <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                  {manager.poste}
                </p>
              </div>
            </div>
            </> : <p>Loading...</p>}
          </div>
          <div
            className="flex-1 h-[100%] w-full relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={`http://127.0.0.1:8000${hotel.image}`}
              className="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] "
              alt=""
            />

            <div
              className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
              onClick={() => setToggler(!toggler)}
            >
              <BsPlay className="w-8 h-8" />
            </div>
            <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={[hotel.video]}
          />
        </div>
      </section>
    </div> : <p>Loading...</p>}
    </>
  );
};

export default Action;
