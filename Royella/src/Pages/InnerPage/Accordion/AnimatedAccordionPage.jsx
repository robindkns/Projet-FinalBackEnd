import Accordion from "./Accordion";
import { useState,useEffect } from "react";
import axios from "axios";

export default function AnimatedAccordionPage() {

  const [faq, setFaq] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/faq/")
      .then((response) => { 
        if (response.data.faq) {
          setFaq(response.data.faq);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // TEMPLATE DATA

  // //  All Faqs and  answers.
  // const faqs = [
  //   {
  //     title: "How to Booking a Room?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "What kinds of Bedroom available?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "Do you have any Discount Current Month?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "Have you available money back Guarantee?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "Do you have any Discount Current Month?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "How to Booking a Room?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "What kinds of Bedroom available?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },

  //   {
  //     title: "Have you available money back Gaurentee?",
  //     text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
  //     active: false,
  //   },
  // ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div
          className=" grid items-end grid-cols-1 lg:grid-cols-2  gap-x-[30px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faq ? faq.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              id={`faqs-${index}`}
              active={item.active}
            >
              {item.response}
            </Accordion>
          )) : <p>Loading...</p>}
        </div>
      </div>
    </main>
  );
}
