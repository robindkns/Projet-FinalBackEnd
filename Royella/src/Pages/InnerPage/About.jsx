import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import {
  BsArrowRight,
  BsChevronLeft,
  BsChevronRight,
  BsPlay,
  BsTwitter,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import axios from "axios";


const About = () => {

  const [hotel,setHotel] = useState(null);
  const [manager,setManager] = useState(null);
  const [employees,setEmployees] = useState(null);
  const [randomEmployeeOne,setRandomEmployeeOne] = useState(null);
  const [randomEmployeeTwo,setRandomEmployeeTwo] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  const [testiRandom, setTestiRandom] = useState([]);

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
  }, [hotel]);

  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/employees/")
      .then((response) => { 
        if (response.data.employees && response.data.employees.length > 0) {
          let tabEmployees = response.data.employees;
          let indexOne = 0
          for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * tabEmployees.length);
            if (randomIndex !== 0) { //Permet de garder l'employé index 0 comme employé figé et de choisir un employé random sans le compter dedans
              if (i === 0) {
                setRandomEmployeeOne(tabEmployees[randomIndex]);
                indexOne = randomIndex
              } else if (i === 1) {
                if (randomIndex !== indexOne) {
                  setRandomEmployeeTwo(tabEmployees[randomIndex]);
                } else {
                  i--;
                }
              }
            } else {
              i--;
            }
          }
          setEmployees(response.data.employees);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/testimonial/")
      .then((response) => { 
        if (response.data.testimonial) {
          setTestimonial(response.data.testimonial);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let randomTestiEffect = [];
    if (testimonial && testimonial.length > 0) {
      while (randomTestiEffect.length < 3) {
        let random = Math.floor(Math.random() * testimonial.length);
        if (!randomTestiEffect.includes(testimonial[random])) {
          randomTestiEffect.push(testimonial[random]);   
        }
      }
      setTestiRandom(randomTestiEffect);
    }
  }, [testimonial]);

  const sortBlogs = (blogs) => {
    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedBlogs.slice(0, 3);
  }

  const [blogs, setBlogs] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then((response) => { 
        if (response.data.blogs && response.data.categories) {
          setCategories(response.data.categories);
          setBlogs(sortBlogs(response.data.blogs));
          console.log(blogs);  
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // TEMPLATE DATA
  const [setCurrentSlide] = useState(0);
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
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
    <section className="">
      <BreadCrumb title="About Us" home={""} />

      {hotel && manager ? <>
        <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src={`http://127.0.0.1:8000${hotel.image}`}
                alt=""
                className="w-full h-full"
              />
            </div>

            <div
              className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                LUXURY HOTEL AND RESORT
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                {hotel.title}
              </h1>
              <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                {hotel.description}
              </p>
              <div className="bg-whiteSmoke dark:bg-lightBlack px-[30px] py-5 div-location">
                <p className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora p-location ">
                  {hotel.location}
                </p>
              </div>
              <button className="btn-primary mt-[30px]">MORE ABOUT</button>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-lightBlack -z-[1] py-20 2xl:py-[120px]">
        <div className="Container ">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div
              className="flex-1 h-[100%] w-full relative "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="flex-1 h-[100%] w-full relative ">
                <img
                  src={`http://127.0.0.1:8000${hotel.image}`}
                  className="h-full w-full md:h-[80%] lg:h-full object-cover"
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
            <div
              className="bg-[#f8f6f3] dark:bg-normalBlack space-y-5 flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
              data-aos="zoom-in-up"
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
            </div>
          </div>
        </div>
      </div>
      </> : <p>Loading ...</p>}
      

      {/* Expert Members */}
      {employees ? <div className="dark:bg-normalBlack py-20 2xl:py-[120px]">
        <div className="Container">
          {/* section header */}
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5 Container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/inner-logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
              MEET THE EXPER MEMBERS
            </h1>
            <p className="font-Lora leading-7 lg:leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>

          {/* Section Content */}
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
            {/* Member one */}
            <div
              className="member group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={`http://127.0.0.1:8000${randomEmployeeOne.image}`} className="w-full" alt="" />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    {randomEmployeeOne.name}
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    {randomEmployeeOne.poste}
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                  duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    {randomEmployeeOne.email}
                  </p>
                </div>
              </div>
            </div>
            {/* Member two */}
            <div
              className="member group"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <img src={`http://127.0.0.1:8000${employees[0].image}`} className="w-full" alt="" />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    {employees[0].name}
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    {employees[0].poste}
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                  duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    {employees[0].email}
                  </p>
                </div>
              </div>
            </div>
            {/* Member three */}
            <div
              className="member group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={`http://127.0.0.1:8000${randomEmployeeTwo.image}`} className="w-full" alt="" />
              <div className="relative">
                <div className="px-4  lg:px-[30px] pt-5 ">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-[28px] leading-7 md:leading-8 lg:leading-10 text-lightBlack dark:text-white font-semibold font-Garamond text-center hover:opacity-0">
                    {randomEmployeeTwo.name}
                  </h3>
                  <p className="text-sm md:text-base leading-[26px] text-Gray dark:text-lightGray font-normal font-Lora text-center group-hover:text-white dark:hover:text-white hover:opacity-0">
                    {randomEmployeeTwo.poste}
                  </p>
                </div>
                <div
                  className="p-[30px] bg-khaki grid items-center justify-center absolute bottom-[-150px] sm:bottom-[-170px] md:bottom-[-150px] group-hover:bottom-[-38px] lg:group-hover:bottom-[-30px] transition-all
                  duration-500 left-0 right-0"
                >
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <FaFacebookF className="" />
                    <BsTwitter className="" />
                    <FaLinkedinIn className="" />
                    <FaPinterestP className="" />
                  </div>
                  <p className="text-white font-medium leading-10 text-xl lg:text-[22px] font-Garamond">
                    {randomEmployeeTwo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : <p>Loading...</p>}

      {/* Clients Feedback */}
      <section className="bg-[#f8f6f3] dark:bg-lightBlack py-20 lg:py-[120px]">
        <div className="Container  ">
          {/* Section heading */}
          <div
            className="flex items-start justify-between relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="space-y-3 md:w-[450px] xl:w-[550px] font-Garamond">
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                LUXURY FEEDBACK
              </h5>
              <h1 className="text-[22px] sm:text-3xl 2xl:text-[38px] leading-6 md:leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold uppercase">
                resote clients feedback about services
              </h1>
            </div>
            <div className="hidden sm:flex items-center lg:space-x-5  space-x-3 ">
              <button className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki hover:border-none group">
                <BsChevronLeft className="w-5 h-5 text-[#cccbc8] group-hover:text-white " />
              </button>
              <button
                className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]  flex items-center justify-center border-[1px] border-[#cccbc8] text-[#cccbc8] hover:bg-khaki
                hover:border-none group"
              >
                <BsChevronRight className="w-5 h-5 text-[#cccbc8]  group-hover:text-white" />
              </button>
            </div>
          </div>
          <hr className="w-full h-[2px] text-[#e8e8e8] dark:text-[#383838]  mt-10 " />

          {/* Clients Feedback  */}
          <div
            className="relative"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="mt-[60px] keen-slider " ref={sliderRef}>
              {testiRandom ? testiRandom.map((testi,index) => (
                <>
                <div key={index} className={`keen-slider__slide number-slide${index} group `}> 
                <div className="bg-white dark:bg-normalBlack group-hover:bg-khaki dark:hover:bg-khaki transition-all ease-in-out duration-500 p-[30px] relative before:absolute before:w-6 before:h-6 before:bg-white before:group-hover:bg-khaki  dark:before:bg-normalBlack before:rotate-45 before:left-[37px] before:-bottom-[13px] ">
                  <span className="flex items-center space-x-[5px] md:space-x-2 xl:space-x-3">
                    {Array.from({ length: testi.rating }, (_, i) => (
                      <li className="li-testi" key={i}>
                        <FaStar
                        className="text-khaki group-hover:text-white"
                        size={18}
                        />
                      </li>
                  ))}
                  </span>
                  <p className="font-Lora text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray group-hover:text-white  font-normal mt-7 ">
                    {testi.testi}
                  </p>
                </div>
                <div className="flex items-center mt-10 lg:mt-[51px]">
                  <img className="testi-img" src={`http://127.0.0.1:8000${testi.image}`} alt="" />
                  <div className="ml-5 md:ml-6 ">
                    <h4 className="text-lg sm:text-xl md:text-2xl leading-[28px] text-[#041341] dark:text-white font-medium font-Garamond ">
                      {testi.name}
                    </h4>
                    <p className="text-sm sm:text-base leading-7 font-Lora font-normal text-gray dark:text-lightGray ">
                      {testi.city}, {testi.country}
                    </p>
                  </div>
                </div>
              </div></>
              )) : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog */}

      <div className=" dark:bg-normalBlack">
        <section className="Container py-20 lg:py-[120px]">
          {/* Section Header */}
          <div
            className=" text-center mx-auto  px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4  ">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white  font-Garamond font-semibold uppercase mb-[8px]">
              LATEST POST FROM BLOG
            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p>
          </div>
          {/* all blogs are here */}
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
              {blogs ? blogs.map((blog,index) => (
                <div key={index} className="keen-slider__slide number-slide1 ">
                {/* card one */}
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src={`http://127.0.0.1:8000${blog.image}`}
                      className="w-full h-full object-cover img-blog"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="py-6 px-[30px] lg:px-5 xl:px-[25px] ">
                      <div className="flex items-center space-x-6">
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                          {blog.date}
                        </p>
                        <p className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        {categories[categories.findIndex(category => category.id === blog.category)].name}  
                        </p>
                      </div>
                      <Link to={`/blog_details/${blog.id}`}>
                        <button className="text-xl sm:text-[22px] xl:text-2xl text-left 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                          {blog.title}
                        </button>
                      </Link>
                    </div>
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <Link
                        to={`/blog_details/${blog.id}`}
                        className="px-[30px] flex items-center justify-between "
                      >
                        <button className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Read More
                          </span>
                        </button>
                        <div>
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              )) : <p>Loading...</p>}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
