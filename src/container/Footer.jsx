import Image from "next/image";
import {
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const images = [
  "/assets/about/f2.png",
  "/assets/about/f3.png",
  "/assets/about/f2.png",
  "/assets/about/f3.png",
  "/assets/about/f2.png",
];

const socialIcons = [
  { id: 1, icon: <FaInstagram />, name: "Instagram" },
  { id: 2, icon: <FaFacebook />, name: "Facebook" },
  { id: 3, icon: <FaTwitter />, name: "Twitter" },
  { id: 4, icon: <FaPinterest />, name: "Pinterest" },
  { id: 5, icon: <FaYoutube />, name: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-black/90 min-h-fit w-full text-white ">
      <div className="w-full min-h-[20vh] border-b border-gray-800 hidden lg:block">
        <div className="relative h-full flex gap-5 lg:px-8 py-10 px-0">
          {images.map((item, index) => {
            return (
              <Image
                src={item}
                key={index}
                alt="img"
                height={80}
                width={80}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
              />
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-6 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-2xl  mb-4 text-primary font-libre font-light py-5">
              About Us
            </h3>
            <p className="text-sm text-gray-500 font-poppins leading-7 pr-5">
              Restaurant metus dibus eudui aolicitudin istique lacus in the
              vestibulum congue est vitae maximus duru ne lacus in massa
              tristique aharetra ne ut isum.
            </p>
            {/* Language Selection Form */}
          </div>
          {/* Contact Info Section */}
          <div className="font-libre">
            <h3 className="text-2xl py-5 text-primary font-light">
              Contact Info
            </h3>
            <p className="text-sm text-gray-500 font-poppins leading-7 pr-5">
              <strong>Address:</strong> 1616 Broadway NY, New York 10001, United
              States of America
            </p>
            <p className="text-lg text-white font-libre leading-7 pr-5 py-4">
              855 100 4444
            </p>
            <p className="text-sm text-gray-500 font-poppins leading-7  border-b border-primary w-fit">
              info@luxuryhotel.com
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((social) => (
                <div
                  key={social.id}
                  className="text-lg hover:text-primary transition duration-300 ease-in-out"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
          {/* Subscribe Section */}
          <div className="font-libre">
            <h3 className="text-2xl font-light  py-5 text-primary">
              Subscribe
            </h3>
            <p className="text-sm text-gray-500 font-poppins leading-7 pr-5">
              Want to be notified when we launch a new template or an update?
              Just sign up and we'll send you a notification by email.
            </p>

            <div className="flex text-sm text-gray-500 font-poppins leading-7 pr-5 py-5">
              <div className="flex justify-between border border-primary p-1 w-full ">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full bg-transparent focus:outline-none "
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white hover:bg-white hover:text-primary  transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-start  text-sm   min-h-[20vh] flex items-end">
        <p className="text-gray-500 text-xs border-t border-gray-800 w-full pt-8 py-1 ">
          &copy; 2024 Luxury Hotel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
