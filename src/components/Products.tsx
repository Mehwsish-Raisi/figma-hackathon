
import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="pb-6 sm:pb-12">
      {/* Best Of Air Max start */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <h3 className="text-[18px] md:text-[22px] font-medium">Best of Air Max</h3>
          <div className="flex gap-2 mt-2 md:mt-0">
            <p className="text-[14px] md:text-[15px] pt-1 md:pt-4 pr-2">Shop</p>
            <Image src="/images/drop1.png" alt="dropdown" width={32} height={32} className="w-8 cursor-pointer h-8 md:w-12 md:h-12" />
            <Image src="/images/drop2.png" alt="dropdown" width={32} height={32} className="w-8 cursor-pointer h-8 md:w-12 md:h-12" />
          </div>
        </div>
      </div>
      {/* Best Of Air Max end */}

      {/* Products Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 start */}
          <div className="w-full">
            <Image src="/images/card1.png" alt="card 1" width={441.36} height={441.36} className="w-full sm:h-auto " />
            <div className="flex justify-between pt-4">
              <p className="text-[14px] md:text-[15px] font-medium">Nike Air Max Pulse</p>
              <p className="text-[14px] md:text-[15px] font-medium">₹ 13 995</p>
            </div>
            <p className="text-[14px] md:text-[15px] pt-2 text-[#757575]">Women&apos;s Shoes</p>
          </div>
          {/* Card 1 end */}
          {/* Card 2 start */}
          <div className="w-full">
            <Image src="/images/card1.png" alt="card 1" width={441.36} height={441.36} className="w-full h-auto" />
            <div className="flex justify-between pt-4">
              <p className="text-[14px] md:text-[15px] font-medium">Nike Air Max 97 SE</p>
              <p className="text-[14px] md:text-[15px] font-medium">₹ ₹ 16 995</p>
            </div>
            <p className="text-[14px] md:text-[15px] pt-2 text-[#757575]">Men&apos;s Shoes</p>
          </div>
          {/* Card 2 end */}
          {/* Card 3 start */}
          <div className="w-full">
            <Image src="/images/card3.png" alt="card 1" width={441.36} height={441.36} className="w-full h-auto" />
            <div className="flex justify-between pt-4">
              <p className="text-[14px] md:text-[15px] font-medium">Nike Air Max Pulse</p>
              <p className="text-[14px] md:text-[15px] font-medium">₹ 13 995</p>
            </div>
            <p className="text-[14px] md:text-[15px] pt-2 text-[#757575]">Men&apoa;s Shoes</p>
          </div>
          {/* Card 3 end */}
        </div>
      </div>
    </div>
  );
};

export default Products;
