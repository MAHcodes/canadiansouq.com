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
        width="831"
        height="372"
        src="https://maps.google.com/maps?q=8FVG+4J2,%20Maifadoun&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        className="w-full rounded-lg max-h-60 aspect-video"
      ></iframe>
    </div>
  </div>
);

export default VisitUs;
