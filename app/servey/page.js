import React from 'react'
import Bool from '../components/Bool'
import { IoStorefrontOutline } from "react-icons/io5";
import { IoRainyOutline } from "react-icons/io5";
import { GiRoad } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";


export const metadata = {
  title: " استطلاعات رأي الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية", 
};

const page = () => {
  return (
<div dir="rtl" className=" relative w-full  bg-white px-6 pt-2 pb-2 mt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl rounded-xl sm:px-2">
  <div className="mx-auto px-0 ">
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-0 text-center text-3xl font-bold tracking-tight md:text-4xl text-blue-700">
         رأيك يهمنا
      </h2>
      <p className="mt-3 text-sm text-center text-neutral-500 md:text-sm">
        مشاركتك برأيك تساعد في اتخاذ القرار
     </p>
    </div>
    <div className="mx-auto mt-2 grid max-w-xl divide-y divide-slate-100 ">
    
      <div className="py-2 px-2 bg-teal-300 rounded-lg mt-2 ">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <IoStorefrontOutline fontSize="1.5em" className=" ml-2 "/>

          <span> استطلاع رأي عن أسواق اليوم الواحد</span>
          <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <Bool />
        </details>
      </div>
      <div className="py-2 px-2 bg-rose-300 rounded-lg mt-2">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <IoRainyOutline fontSize="1.5em" className=" ml-2 "/>

            <span>  مياه الامطار و النوات </span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>

<h1>
 غير متاح حالياً
</h1>
        </details>
      </div>
      <div className="py-2 px-2 bg-orange-300 rounded-lg mt-2">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <GiRoad fontSize="1.5em" className=" ml-0 "/>

            <span> الطـــرق و الرصف</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <h1>
 غير متاح حالياً
</h1>
        </details>
      </div>
      <div className="py-2 px-2 bg-fuchsia-300 rounded-lg mt-2">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <MdOutlineCleaningServices  fontSize="1.5em" className=" ml-0 "/>

            <span>النظافـــــــة</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <h1>
 غير متاح حالياً
</h1>
        </details>
      </div>

    
    </div>
  </div>

</div>

  )
}

export default page