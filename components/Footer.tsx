import React from "react";
const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      <hr className="mt-10 mb-7" />
      <div className="px-16 flex flex-row  ">
        <p className="text-poppins light text-sm">
          &copy; {date} All rights reserved
        </p>

        <div className=" ml-auto flex flex-row  space-x-16 pb-3">
          <img src="/github.svg" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/instagram.svg" alt="" />
          <img src="/reddit.png" alt="" />
          <img src="/liinkedin.svg" className="" alt="" />
        </div>
      </div>
    </footer>
  );
};
