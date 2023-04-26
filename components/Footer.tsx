/* eslint-disable @next/next/no-img-element */
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
          <img src="/github.svg" height="26px" width="28px" alt="" />
          <img src="/twitter.svg" height="31px" width="30.14px" alt="" />
          <img src="/instagram.svg" height="26px" width="30.14px" alt="" />
          <img src="/reddit.svg" height="29px" width="30px" alt="" />
          <img
            src="/liinkedin.svg"
            height="26px"
            width="30.14px"
            className=""
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};
