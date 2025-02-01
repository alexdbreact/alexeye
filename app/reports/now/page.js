import React from 'react'
import new1 from "../../../public/news/1.jpg"
import new2 from "../../../public/news/2.jpg"
import new3 from "../../../public/news/3.jpg"
import new4 from "../../../public/news/4.jpg"
import Image from 'next/image'

export const metadata = {
  title: "قرارات و أخبار الإسكندرية",
  description: "منصة المشاركة المجتمعية لمحافظة الإسكندرية", 
};

const page = () => {
  return (
    
 
    <>    <div className="rounded overflow-hidden shadow-xl">
      <a href="#" />
      <div className="relative">
        <a href="#">
          <Image
            className="w-full max-w-md "
            src={new3}
            alt="اخبار الاسكندرية"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
    
          <div className="text-sm absolute top-0 right-0 bg-blue-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
            <span className="font-bold">عاجل</span>
            <small>اليوم</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
     
        <p className="text-gray-500 text-sm text-justify">
⭕️بناءً على تنويه الهيئة العامة للأرصاد الجوية من كثافة الشبورة المائية التي قد تصل إلى حد الضباب على بعض الطرق الزراعية والسريعة والقريبة من المسطحات المائية مما يؤدي إلى انخفاض الرؤية الأفقية، وذلك غدا الاثنين 27 يناير 2025.
🔻لذا تهيب محافظة الإسكندرية بالسادة قائدي المركبات توخي الحيطة والحذر أثناء القيادة، واتخاذ كافة التدابير اللازمة للحد من الآثار الناجمة عن الشبورة المائية الكثيفة.</p>
      </div>

    </div>
    <div className="rounded overflow-hidden shadow-xl">
      <a href="#" />
      <div className="relative">
        <a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAlex.Gov.Eg%2Fposts%2Fpfbid02g9kmRbGZuaiJ9azRfcWJC2VqeDeyDjJiBdhavZRD7ekCwuseJy6q3bm5RqEKsdWJl&show_text=true">
        <Image
            className="w-full"
            src={new2}
            alt="اخبار الاسكندرية"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
        <p className="text-gray-500 text-sm p-4 bg-blue-100">
        البدء  في تنفيذ أعمال تمهيد المسارات البديلة لكوبري المندرة  </p>
          <div className="absolute bottom-0 left-0 bg-blue-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
            Photos
          </div>
        </a>
     
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-blue-600 transition duration-500 ease-in-out"
        >
التمهيد لأعمال هدم الكوبري وتطوير ميدان المندرة .        </a>
        <p className="text-gray-500 text-sm">
        البدء  في تنفيذ أعمال تمهيد المسارات البديلة لكوبري المندرة  بدءا من جسم النفق حتي نقطة مرور المندرة،  وذلك في إطار  التمهيد  لأعمال هدم الكوبري وتطوير ميدان المندرة .        </p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">3 mins read</span>
        </span>
      </div>
    </div>
    </>

  
  

  )
}

export default page