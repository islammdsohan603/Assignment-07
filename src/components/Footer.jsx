import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterPage = () => {
  return (
    <div className="bg-green-900 py-8">
      <div className="w-10/12 mx-auto">
        <div className="text-center space-y-4">
          {/* Text */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
            KeenKeeper
          </h1>

          <p className="text-xs md:text-lg text-white font-semibold">
            Your personal shelf of meaningful connections. Browse, tend and
            nurture the <br />
            relationships that matter most.
          </p>
          {/* Social Link */}
          <div className="flex flex-col items-center justify-center space-y-2.5 ">
            <h1 className="text-2xl font-bold text-white">Social Links</h1>

            <div className="flex items-center gap-6">
              <FaFacebook className="text-white cursor-pointer hover:scale-110 duration-300 text-2xl" />
              <FaGithub className="text-white cursor-pointer hover:scale-110 duration-300 text-2xl" />
              <FaLinkedin className="text-white cursor-pointer hover:scale-110 duration-300 text-2xl" />
              <FaTwitter className="text-white cursor-pointer hover:scale-110 duration-300 text-2xl" />
            </div>
          </div>

          <div className=" text-white py-8 flex flex-col md:flex-row gap-4 items-center justify-between mt-4  border-t-2 border-gray-600">
            <h1>
              © {new Date().getFullYear()} KeenKeeper. All rights reserved.
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h1>Privacy Policy</h1>
              <h1>Terms of Services</h1>
              <h1>Cookies</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
