import React from "react";
import { OpenTime } from "../icons";
import Title from "./Title";

const VisitUs = () => (
  <div className="row-span-2 order-1">
    <Title text="Visit Us" />
    <div className="">
      <span className="inline-flex items-center justify-between gap-2 text-base mb-3">
        <OpenTime />
        Monday to Saturday - by appointment only
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d208.31765961582673!2d35.476504!3d33.342793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a803825ce1ad39c!2sCanadian%20Souq!5e0!3m2!1sen!2sus!4v1661622036129!5m2!1sen!2sus"
        frameBorder="0"
        loading="lazy" 
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-lg max-h-60 aspect-video"
      ></iframe>
    </div>
  </div>
);

export default VisitUs;
