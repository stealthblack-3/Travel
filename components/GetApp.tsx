import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] ">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-center justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-30">
            Available on IOS and Android
          </p>
          <div className="flex  w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Download App"
              variant="btn_white"
              icon="/apple.svg"
              full
            />
            <Button
              type="button"
              title="Get your App"
              variant="btn_dark_green_outline"
              icon="/android.svg"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
