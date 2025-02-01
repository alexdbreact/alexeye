import React from "react";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";






export const metadata = {
  title: "عين الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center overflow-hidden">
        <div className="max-w-screen-xl m-0  bg-white shadow-xl sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-0 flex flex-col items-center">            

                {children}
            </div>
          </div>




          <div className="flex-1 border-blue-200 text-center hidden lg:flex">
            <div className="m-1 xl:m-4 w-full bg-contain bg-center bg-no-repeat rounded-lg shadow-sm">
          <Intro/>
         </div>
          </div>
        </div>
      </div>

        <Footer/>

      </body>
    </html>
  );
}
