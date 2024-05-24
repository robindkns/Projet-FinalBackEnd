import { BsArrowRight } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import BlogSideBar from "./BlogSideBar";
import { useEffect,useState } from "react";
import axios from "axios";
import Pagination from "../../Components/Pagination/Pagination";

const Blog = () => {

  const [blogs, setBlogs] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/")
      .then((response) => { 
        if (response.data.blogs && response.data.categories) {
          setCategories(response.data.categories);
          setBlogs(response.data.blogs);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 6;
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    if (blogs) {
      let lastIndex = currentPage * blogPerPage;
      let firstIndex = lastIndex - blogPerPage;
    
      setCurrentBlog(blogs.slice(firstIndex, lastIndex)); 
    }
  }, [blogs,currentPage]);


  return (
    <div>
      <BreadCrumb title="Blog" />
      <div className="dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
          <div className="col-span-6 md:col-span-4">
            <div className="grid items-center gap-5 2xl:gap-y-[30px] grid-cols-1 lg:grid-cols-2">
              {/* Blog One */}
              {currentBlog ? currentBlog.map((blog,index) => (
                <div key={index}
                className="overflow-hidden 3xl:w-[410px] group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="relative">
                  <img
                    src={`http://127.0.0.1:8000${blog.image}`}
                    className="w-full h-full object-cover img-blog"
                    alt=""
                  />
                </div>
                <div className="font-Garamond border border-[#ddd] dark:border-gray border-t-0">
                  <div className="py-6 px-[30px] ">
                    <div className="flex items-center space-x-6 ">
                      <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]">
                        {blog.date}
                      </p>
                      <p className="text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]"> 
                        {categories[categories.findIndex(category => category.id === blog.category)].name}
                      </p>
                    </div>
                    <Link
                      to={`/blog_details/${blog.id}`}
                    >
                      <h2 className="text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2">
                        {blog.title}
                      </h2>
                    </Link>
                  </div>
                  <div className="  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5">
                    <Link
                      to={`/blog_details/${blog.id}`}
                      className="px-[30px] flex items-center justify-between "
                    >
                      <div className="">
                        <span className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Read More
                          </span>
                        </span>
                      </div>
                      <span className="">
                        <BsArrowRight
                          className="text-gray dark:text-lightGray group-hover:text-khaki"
                          size={"24px"}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              )) : <p>Loading...</p>}

            </div>
            {blogs ? <Pagination total={blogs.length} blogPerPage={blogPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}  /> : <p>Loading...</p>}
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            {/* imported Blog Sidebar */}
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
