import Image from "next/image";

const Reasons = () => {
  return (
    <div className="py-16">
      <div className="mx-auto flex flex-col w-11/12 sm:w-3/4 lg:grid lg:grid-cols-2 md:gap-10">
        <div className="flex items-center justify-center md:p-10">
          <Image
            src={"/bc.webp"}
            width={400}
            height={200}
            className="w-full lg:w-[28rem] 2xl:w-full"
          />
        </div>
        <div className="my-6 flex flex-col gap-4">
          <span className="title font-bold text-4xl">
            The Top Reasons to Choose Spotype for Your Spotype Project
          </span>

          <p className=" dark:text-[#a8abac] text-base font-medium my-5 sm:text-xl md:text-base md:my-0 lg:text-lg">
            With Spotype, you can build modern and content-focused websites
            without seacrificing performance or ease of use.
          </p>

          <div className="my-5 md:my-2 md:gap-2 md:text-base dark:text-[#a8abac] flex flex-col gap-5 sm:text-lg md:text-lg">
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Instantly load static sites for better use experience and SEO.
              </span>
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Intuitive syntax and support for popular frameworks make
                learning and using Spotype a breeze.
              </span>
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Use any front-end library or framework, or build custom
                components, for any project size.
              </span>
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Built on cutting-edge technology to keep your projects
                up-to-date with the latest web standards.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
