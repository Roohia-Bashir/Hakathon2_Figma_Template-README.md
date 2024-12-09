
export default function Footer() {
    return (
      <footer className="w-full h-[505px] border-t border-black/[0.17] bg-white py-12 mt-[1px] ">
        <div className="container px-[100px] h-[312px] mt-[48px] ">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">

            {/* Company Info */}
            <div className="space-y-4 ">
              <h2 className="text-2xl font-bold font-poppins mb-7">Funiro.</h2>
              <p className="text-gray-500 font-poppins">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
  
            {/* Links */}
            <div className="space-y-4  pl-28   h-[312px]  ">
              <h3 className="text-gray-500 font-poppins font-medium mb-7">Links</h3>
              <nav className="flex flex-col space-y-[48px]">
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Home
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Shop
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  About
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Contact
                </a>
              </nav>
            </div>
  
            {/* Help */}
            <div className="space-y-4 pl-16">
              <h3 className="text-gray-500 font-poppins font-medium mb-7">Help</h3>
              <nav className="flex flex-col space-y-[48px]">
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Payment Options
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Returns
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Privacy Policies
                </a>
              </nav>
            </div>
  
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-gray-500 font-poppins font-medium mb-7">Newsletter</h3>
              <div className="flex gap-[38px]">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full border-b border-black pb-1 text-sm font-poppins text-gray-500 focus:outline-none"
                  />
                </div>
                <button className="border-b border-black pb-1 text-sm font-poppins font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-[#D9D9D9] pt-6 mb-7">
            <p className="text-black font-poppins">2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    )
  }