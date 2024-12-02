import bannerImg from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-10">
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
        className="lg:min-h-[780px] bg-no-repeat bg-center bg-contain md:min-h-[600px] min-h-[520px] w-full"
      ></div>
    </div>
  );
};

export default Banner;
