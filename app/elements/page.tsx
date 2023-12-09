import { Header } from "@/components/Header";
import Image from "next/image";

function page() {
  return (
    <div>
      <title>Elements</title>
      <Header />

      <div className=" bg-[#EE5035] h-screen flex w-full items-center justify-center">
        <Image src={"/soon.jpg"} width={500} height={200} />
      </div>
    </div>
  );
}

export default page;
