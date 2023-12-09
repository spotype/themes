import Image from "next/image";

const Discover = () => {
  return (
    <div className="pt-20 pb-10 dark:bg-[#222222]">
      <div className="flex flex-col mx-auto w-11/12 sm:w-3/4 lg:grid lg:grid-cols-2 md:gap-10 md:items-center">
        <div className="my-2 flex items-center justify-center 2xl:p-10 order-1 lg:order-2">
          <Image
            src={"/ab.webp"}
            width={400}
            height={200}
            className="w-full lg:w-96 xl:w-[30rem] 2xl:w-full"
          />
        </div>
        <div className="my-5 flex flex-col gap-5 order-2 lg:order-1">
          <span className="title text-4xl font-bold">
            Discover the Key Features Of Spotype
          </span>
          <p className="dark:text-[#A8ABAC] text-base font-medium text-gray-500 my-5 sm:text-xl md:text-lg">
            Spotype is an all-in-one web framework for building fast,
            content-focused websited. It offers a range of exciting features for
            developers and website creators. Some of the key features are
          </p>

          <div className="flex flex-col gap-4 dark:text-[#a8abac] sm:text-lg md:text-base">
            <p className="flex ">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Zero JS, by default: No JavaScript runtime overhead to slow you
                down.
              </span>
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                Customizable: Tailwind, MDX, and 100+ other integrations to
                choose from.
              </span>
            </p>
            <p className="flex">
              <i className="fi fi-rr-check mr-2"></i>
              <span>
                UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and
                more.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <button className="py-3 bg-black text-white px-6 text-base dark:bg-white dark:text-black font-semibold rounded-lg flex items-center gap-2">
              Get Started Now{" "}
              <i className="fi fi-rr-arrow-small-right flex text-3xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
