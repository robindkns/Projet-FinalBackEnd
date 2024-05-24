import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination(props){

    const handleNext = () => {
        if (props.currentPage < Math.ceil(props.total / props.blogPerPage)) {
            props.setCurrentPage(props.currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (props.currentPage > 1) {
            props.setCurrentPage(props.currentPage - 1);
        }
    };

    const pages = [];

    for (let i = 1; i <= Math.ceil(props.total / props.blogPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center gap-3 mt-10">
            <span onClick={handlePrevious} className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center  cursor-pointer group">
                <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white group-hover:text-white"
                />
            </span>
            {pages.map((page,index) => (
                <button onClick={() => props.setCurrentPage(page)} key={index} className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center font-semibold cursor-pointer group">
                    <span
                        size={20}
                        className="text-lightBlack dark:text-white group-hover:text-white"
                    >
                        {page}
                    </span>
                </button>
            ))}
            <span onClick={handleNext} className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center  cursor-pointer group">
                <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white group-hover:text-white"
                />
            </span>
        </div>
    )
}