import { ImFacebook2, ImInstagram } from "react-icons/im";
import logo from "../../assets/images/logo.png";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#ceebd4] mt-32">
      <div className="max-w-[2400px] mx-auto">
        <footer className="lg:py-20 md:py-14 py-10 text-base-content ">
          <div className="md:w-[70%] w-[80%] mx-auto ">
            <div className="flex flex-col md:flex-row md:justify-between justify-center  gap-4 mb-10">
              <div className="md:w-1/2 w-full">
                <h1 className="md:text-3xl text-2xl font-bold mb-2 text-center md:text-left text-green-600 merienda">
                  Get in Touch
                </h1>
                <p className="text-center md:text-left text-gray-600">
                  {" "}
                  Discover the essence of purity at{" "}
                  <span className="merienda text-sm font-bold text-black">
                    Shaadbazar <span className="text-green-600">BD</span>
                  </span>
                  . From golden jaggery to rich mustard oil and pure honey, we
                  bring you nature’s finest treasures. Committed to quality and
                  authenticity, we ensure every product is crafted with care,
                  offering you a taste of tradition and the goodness of natural
                  foods.
                </p>
                <p className="text-gray-600 my-2 text-center md:text-left">
                  Contact:{" "}
                  <span className="text-green-600 font-semibold">
                    +8801750996919
                  </span>{" "}
                </p>
              </div>

              <div className="space-y-6 ">
                <form>
                  <h6 className="md:text-2xl font-semibold text-xl text-center md:text-left text-green-600 merienda">
                    Newsletter
                  </h6>

                  <div className="flex flex-col   md:items-start items-center">
                    <label className="label">
                      <span className="label-text text-gray-600">
                        Enter your email address:
                      </span>
                    </label>

                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered input-info rounded-none md:w-full w-[180px] md:h-[48px] h-[34px]"
                      />
                      <button className="btn md:btn-md btn-sm btn-primary rounded-none my-auto">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div>
              <hr className="border-indigo-300 w-[80%] mx-auto my-4" />
              <div>
                <nav className="w-2/3 mx-auto flex  items-center justify-center gap-10 text-green-600 text-xl">
                  <a className="link link-hover">
                    <ImFacebook2 />
                  </a>
                  <a className="link link-hover">
                    <ImInstagram />
                  </a>
                  <a className="link link-hover">
                    <FaSquareTwitter className="text-2xl" />
                  </a>
                </nav>
              </div>

              <hr className="border-indigo-300 w-[80%] mx-auto my-4" />

              <div>
                <nav className="w-2/3 mx-auto flex flex-col items-center md:flex-row justify-between gap-2 text-green-600">
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
                </nav>
              </div>
              <hr className="border-indigo-300 w-[80%] mx-auto my-4" />
            </div>

            <div className="flex flex-col-reverse items-center gap-2 md:flex-row justify-between">
              <p className="text-gray-600">
                All rights reserved@
                <span className="font-bold text-green-600">2024</span>{" "}
              </p>
              <p className="flex items-center play">
                <img
                  className="w-[55px]  h-[45px] rounded-full"
                  src={logo}
                  alt="logo"
                />
                <span className="merienda text-sm font-bold">
                  Shaadbazar <span className="text-green-600">BD</span>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
