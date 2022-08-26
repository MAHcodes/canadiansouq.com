import React from "react";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";
import VisitUs from "./VisitUs";

export const Footer = () => {
  return (
    <div className="bg-black text-gray rounded-t-lg mt-4">
      <div className="container py-5">
        <ContactUs />
        <FollowUs />
        <VisitUs />
      </div>
    </div>
  );
};
