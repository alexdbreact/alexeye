import idea from '../idea/page'
import Link from 'next/link'
import { TbCameraShare } from "react-icons/tb";
import { GiBrainDump } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";






const Footer = () => {
  return (
    <div className="btm-nav ">
      
  <Link href={"../"} className="   border-blue-500 focus:border-blue-900 focus:outline-none bg-orange-200 text-orange-900 focus:bg-blue-700 focus:text-slate-100 	 ">
  <TbCameraShare fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-xs"> مخالفة/شكوي</span>
   
  </Link>
 
  <Link href={"../idea"} className="   focus:border-blue-900 focus:outline-none  bg-fuchsia-200 text-fuchsia-900 focus:bg-blue-700 focus:text-slate-100 ">
   

   
  <GiBrainDump fontSize="1.5em" />

    <span className="btm-nav-label text-center text-xs"> مقتــرح/فكــرة</span>


  </Link>
 
  <Link href={"../servey"} className="  focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100">
  <FaChartBar fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-xs">استطلاع رأى </span>
   
  </Link>
  <Link href={"../reports"} className="  focus:border-blue-900 focus:outline-none  bg-rose-200 text-rose-900 focus:bg-blue-700 focus:text-slate-100">
  <GrDocumentConfig  fontSize="1.5em"/>

    <span  className="btm-nav-label text-center text-xs ">قرارات/أخبار هامة</span>
   
  </Link>
 
</div>
  )
}

export default Footer