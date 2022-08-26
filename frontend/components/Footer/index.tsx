import React from "react";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";
import VisitUs from "./VisitUs";

export const Footer = () => {
  return (
    <div className="bg-black text-gray rounded-t-lg mt-4">
      <div className="container py-5 grid grid-cols-1 items-start md:grid-cols-2 gap-4">
        <ContactUs />
        <VisitUs />
        <FollowUs />
      </div>
    </div>
  );
};
