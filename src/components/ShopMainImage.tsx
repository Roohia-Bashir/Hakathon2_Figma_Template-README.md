import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import Header from './Header';


function Shopmainimage() {
  return (
    <>
      <section className="mb-[46px]">
        {/* Main Shop Image */}
        <div className="w-full">
          <Image
            src="/blogMainImage.png"
            alt="Shop Main Image"
            width={1440}
            height={316}
          />
        </div>    

        {/* Filter and Sort Section */}
        <div className="flex items-center justify-around w-full h-[100px] bg-[#f9f1e7]">
          {/* Left Section: Filters */}
          <div className="flex items-center gap-[64px]">
            <div className="flex items-center">
              <Image
                src="/shopIcon1.png"
                alt="Filter Icon"
                width={25}
                height={25}
              />
              <p className="text-[20px] leading-[30px] font-[400] font-poppins text-black ml-3 mr-[23px]">
                Filter
              </p>
              <Image
                src="/shopIcon2.png"
                alt="Icon 2"
                width={25}
                height={25}
              />
              <Image
                src="/shopIcon3.png"
                alt="Icon 3"
                width={25}
                height={25}
                className="ml-[24px]"
              />
            </div>

            {/* Divider with Text */}
            <div className="w-[237px] border-l-2 border-black">
              <p className="pl-[34px] text-[16px] leading-[24px] font-[400] font-poppins text-black">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>

          {/* Right Section: Sorting */}
          <div className="flex items-center text-[20px] leading-[30px]">
            <p className="pr-[35px]">Show</p>
            <Input
              placeholder="16"
              className="w-[55px] h-[55px] bg-white rounded-none text-center mr-[29px] text-[16px] leading-[24px] font-[400] font-poppins text-[#9f9f9f]"
            />
            <p className="pr-[35px]">Sort By</p>
            <Input
              placeholder="Default"
              className="w-[188px] h-[55px] bg-white rounded-none text-center text-[16px] leading-[24px] font-[400] font-poppins text-[#9f9f9f]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Shopmainimage;
