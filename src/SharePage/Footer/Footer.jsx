import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-10   bg-white shadow-slate-900 footer text-base-content">
        <div>
          <img
            className="w-36"
            src="https://i.ibb.co/yNk1JRm/logojpeg.jpg"
            alt=""
          />
          <p>Artistry Academy Ltd.</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Art Courses</a>
          <a className="link link-hover">Craft Courses</a>
          <a className="link link-hover">Photography Classes</a>
          <a className="link link-hover">Online Workshops</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">security</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="credit text-center py-10 bg-white">
        <span className="text-center  py-5 ">
          © 2023 Mehedi Hasan Siam. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
