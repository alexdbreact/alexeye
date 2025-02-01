import React from 'react'
import new6 from "../../../public/news/6.jpg"
import new7 from "../../../public/news/7.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div> <div className="card bg-slate-200 w-84 shadow-xl mb-2">
      <figure className="px-2 pt-2">
      <Image
                className="w-full max-w-md  rounded-xl"
                src={new6}
                alt="اخبار الاسكندرية"
              />
    
      </figure>
      <figure className="px-2 pt-2">
      <Image
                className="w-full max-w-md  rounded-xl"
                src={new7}
                alt="اخبار الاسكندرية"
              />
    
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-justify text-center"> نوضح أن الغرض من إعادة التخطيط ليس الإزالة، وإنما لتوفير الخدمات العامة واحتياجات المنطقة من خدمات ورصف طرق، وإدخال المرافق ورفع كفاءة البنية التحتية لرفع جودة الحياة بالمناطق حتى يتسنى للمواطنين التعامل مع الجهات الرسمية في شأن التراخيص وأعمال البناء.</p>
        <div className="card-actions">
          <button className="btn btn-info">المزيد من التفاصيل</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page