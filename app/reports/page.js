"use client";


import React from 'react'
import new1 from "../../public/news/1.jpg"
import new2 from "../../public/news/2.jpg"
import new3 from "../../public/news/3.jpg"
import new4 from "../../public/news/4.jpg"
import Image from 'next/image'


{/*export const metadata = {
  title: "قرارات و أخبار الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية", 
};*/}


const page = () => {
  return (
    
 
    <> 
       
    <div className="card bg-slate-200 w-84 shadow-xl mb-2">
  <figure className="px-2 pt-2">
  <Image
            className="w-full max-w-md  rounded-xl"
            src={new1}
            alt="اخبار الاسكندرية"
          />

  </figure>
  <div className="card-body items-center text-center">
    <p className="text-justify text-center"> تخفيض سرعة السير على الطريق من 90 كم/ ساعة إلى 70 كم/ ساعة، وأيضا إنشاء إشارات مرورية لعبور المشاة ببعض المناطق . 
     زيادة أعمال الإنارة بطول محور المحمودية أثناء الفترة الليلية للحد من الحوادث المرورية، بالإضافة إلى تكثيف التمركزات المرورية على طول المحور خاصة في المناطق الأكثر ازدحاما.</p>
    <div className="card-actions">
      <button className="btn btn-info">المزيد من التفاصيل</button>
    </div>
  </div>
</div>


   
       
   
     
    </>

  
  

  )
}

export default page