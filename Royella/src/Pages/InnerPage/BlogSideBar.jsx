import { FaSearch } from "react-icons/fa";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogSideBar = () => {

  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then((response) => { 
        if (response.data.categories && response.data.tags) {
          setCategories(response.data.categories);
          setTags(response.data.tags);
        }})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortBlogs = (blogs) => {
    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedBlogs.slice(0, 3);
  }

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then((response) => { 
        if (response.data.blogs) {
          setBlogs(sortBlogs(response.data.blogs));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* blog search bar*/}
      <div className="bg-whiteSmoke dark:bg-normalBlack items-center w-full p-4 sm:p-8 2xl:p-10 focus:shadow-xl rounded-md">
        <form
          className="flex items-center space-x-2 md:space-x-5 relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <input
            placeholder="Search Here"
            type="text"
            className=" px-5 py-[5px] w-full h-12 md:h-14 text-base
                  border-none outline-none rounded-md text-gray dark:text-lightGray focus:border-none placeholder:text-[#515151] focus:ring-0 focus:outline-none dark:bg-lightBlack"
          />
          <Link
            to="#"
            className="absolute top-5 right-4 text-lightGray dark:text-gray"
          >
            <FaSearch className="w-4 h-4 " />
          </Link>
        </form>
      </div>

      {/*Popular Post */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 mt-5 2xl:mt-[30px] rounded-md ">
        <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-2xl leading-6 md:leading-7 lg:leading-[30px] text-lightBlack dark:text-white relative before:w-[50px] before:h-[1px] before:bg-lightBlack dark:before:bg-white before:absolute before:left-0 before:top-9 font-Garamond font-semibold">
          Popular Post
        </h2>
        <div className="pt-10">
          {blogs ? blogs.map((blog,index) => (
            <Link
            to={`/blog_details/${blog.id}`}
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
          >
            <img
              src={`http://127.0.0.1:8000${blog.image}`}
              className=" mr-3 2xl:mr-5 w-[70px] h-[70px] object-cover"
              alt=""
            />
            <div className="text-left">
              <h4 className="text-base 2xl:text-lg leading-6 text-[#101010] dark:text-white font-medium font-Garamond hover:underline underline-offset-4">
                {blog.title}
              </h4>
              <p className="text-sm md:text-[13px] 2xl:text-sm leading-[26px] font-Lora text-gray dark:text-lightGray font-normal">
                {blog.date}
              </p>
            </div>
          </Link>
          )) : <p>Loading...</p>}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 mt-5 2xl:mt-[30px] rounded-md ">
        <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-2xl leading-6 md:leading-7 lg:leading-[30px] text-lightBlack dark:text-white relative before:w-[50px] before:h-[1px] before:bg-lightBlack dark:before:bg-white before:absolute before:left-0 before:top-9 font-Garamond font-semibold">
          Categories
        </h2>
        <div className="pt-10">
          <ul className=" " data-aos="fade-up" data-aos-duration="1000">
            {categories ? categories.map((category,index) => (
              <li key={index} className="pt-3 flex items-center group transition-all duration-300 border-b-[1px] cursor-pointer border-lightGray dark:border-gray pb-3 ">
              <BiChevronsRight
                size={16}
                className="text-lightBlack dark:text-white group-hover:text-khaki mr-2"
              />
              <span className="text-sm xl:text-base 2xl:text-lg leading-[26px] text-lightBlack group-hover:text-khaki font-medium font-Garamond dark:text-white">
                {category.name}
              </span>
            </li>
            )) : <p>Loading...</p>}
          </ul>
        </div>
      </div>
      {/* Tags */}
      <div className="bg-whiteSmoke dark:bg-normalBlack w-full p-4 sm:p-8 2xl:p-10 mt-5 2xl:mt-[30px] rounded-md ">
        <h2 className="text-lg sm:text-xl md:text-[22px] lg:text-2xl leading-6 md:leading-7 lg:leading-[30px] text-lightBlack dark:text-white relative before:w-[50px] before:h-[1px] before:bg-lightBlack dark:before:bg-white before:absolute before:left-0 before:top-9 font-Garamond font-semibold">
          Tag
        </h2>
        <div className="pt-10 " data-aos="fade-up" data-aos-duration="1000">
          <div className="grid items-center grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-3 sm:gap-5  ">
            {tags ? tags.map((tag,index)=>(
              <div key={index} className="px-2 sm:px-4 py-2 bg-white dark:bg-lightBlack hover:bg-khaki transition-all duration-300 group">
              <h1 className="text-sm sm:text-base leading-6 lg:leading-[30px] font-Garamond text-[#101010] dark:text-white font-medium  group-hover:text-white">
                {tag.name}
              </h1>
            </div>
            )): <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
