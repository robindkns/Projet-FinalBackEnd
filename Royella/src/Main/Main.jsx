import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import GoToTop from "../Shared/GoToTop";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";
import { useSelector } from "react-redux";
import Message from "../Shared/Message";

const Main = () => {

  let message = useSelector((state) => state.user.message);
  const [openMessage , setOpenMessage] = useState(false)

  useEffect(() => {
    setOpenMessage(message !== '' ? true : false)
  }, [message]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <HelmetChanger title="Hotel Booking" />
      {openMessage ? <Message message={message.message} setOpenMessage={setOpenMessage} /> : null}
      <ScrollToTop />
      <GoToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
