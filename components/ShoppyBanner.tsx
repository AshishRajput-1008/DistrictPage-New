import Image from "next/image";
import advShoppy from "@/public/payzonapi112.webp";

export default function ShoppyBanner() {
  return (
    <div className="w-[80%] md:w-[60%] mx-auto flex flex-col items-center bg-white">
      {/* Advertisement Label */}
      <div className="text-center px-3 md:px-4">
        <span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-wider">
          विज्ञापन
        </span>
      </div>

      {/* Centered Banner */}
      <div className="px-0 justify-center items-center">
        <a
          href="https://ulogin.payzonapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className=" cursor-pointer">
            <Image
              src={advShoppy}
              alt="Payzon API - IT Solutions & Fintech"
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
