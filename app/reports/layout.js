import React from "react";
import { MdOutlineSpeakerNotesOff } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr";



import { TbCameraShare } from "react-icons/tb";
import Link from "next/link";

export const metadata = {
  title: "قرارات و أخبار الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية",
};

const page = ({ children }) => {
  return (
    <div dir="rtl" className="max-w-screen-xl mx-0 p-1 sm:p-1 my-0 ">
      <div className="mx-auto flex w-full max-w-md flex-row justify-center pb-4 ">
        <Link
          href="/reports"
          className=" flex  max-w-md flex-col justify-center items-center hover:scale-125  "
        >
          <GrDocumentVerified  fontSize="2.5em" className="bg-blue-600 text-slate-100 py-1 px-2 rounded-lg shadow-orange-300 shadow-xl" />
          <span className="  text-sm px-4 " >

          قرارات هامة

</span>
        </Link>
        <Link
          className=" flex  max-w-md flex-col justify-center items-center hover:scale-125 "
          href="/reports/now"
        >
          <Ri24HoursLine fontSize="2.5em" className="bg-blue-600 text-slate-100 py-1 px-2 rounded-lg  shadow-teal-300 shadow-xl " />
          <span className="  text-sm  " >

          أخبار عاجلة

          </span>
        </Link>
        <Link
          className=" flex  max-w-md flex-col justify-center items-center hover:scale-125  "
          href="/reports/humor"
        >
          <MdOutlineSpeakerNotesOff fontSize="2.5em" className="bg-blue-600 text-slate-100 py-1 px-2 rounded-lg shadow-rose-300 shadow-xl "/>
          <span className="  text-sm px-4 " >

          شائعـــات

          </span>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default page;
