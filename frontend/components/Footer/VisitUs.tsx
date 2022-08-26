import React from "react";
import { OpenTime } from "../icons";
import Title from "./Title";

const VisitUs = () => (
  <div>
    <Title text="Visit Us" />
    <div className="inline-flex items-center justify-between gap-2">
      <OpenTime />
      <span className="text-base">
        Monday to Saturday - by appointment only
      </span>
    </div>
  </div>
);

export default VisitUs;
