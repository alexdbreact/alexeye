"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";




const IdeasList = () => {
  const [name, setName] = useState("");
   const [idy, setIdy] = useState("");
   const [mob, setMob] = useState("");
   const [job, setJob] = useState("");
   const [details, setDetails] = useState("");
 
   
   const router = useRouter();
 
   
   
 
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     if (!mob || !details) {
       alert("برجاء ادخال رقم الهاتف و المقترح");
       return;
   }
 
   try {
       const res = await fetch("http://localhost:3000/api/ideas", {
           method: "POST",
           headers: {
               "Content-type": "application/json",
           },
           body: JSON.stringify({name, idy, mob, job, details}),
       });
 
       if (res.ok) {
           router.push("/reports");
           alert("تم ارسال المقترح بنجاح .. شكراً لسيادتكم");

       } else {
           throw new Error("Failed to create a idea");
       }
   } catch (error) {
       console.log(error);
   }
     
   };
 
   // Convert file to Base64
   
 
   return (
    <div className="max-w-lg mx-auto mt-0 bg-white shadow-xl rounded-lg overflow-hidden">
    <div className="text-l py-4 px-6 bg-blue-500 text-white text-center  uppercase">
    قدم مقترحك و بياناتك و سيتم الرد عليكم بعد دراسة المقترح

    </div>
    <form
       name="new"
       autoComplete="on"
       className="mx-auto mt-2 max-w-xl sm:mt-10"
       onSubmit={handleSubmit}
     >
       <div dir="rtl" className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 m-4">

 
         {/* Description Text Area */}
         <div className="sm:col-span-2">
         <label htmlFor="name" className="block text-sm font-semibold px-2 pb-2">
              الإســــــم
           </label>
           <input
             type="name"
             id="name"
             name="name"
             placeholder="اكتب اسمــــك بالكامـــل"
             value={name}
             onChange={(e) => setName(e.target.value)}
             className="block w-full rounded-md border border-gray-300 px-3 py-2 "
           />
         </div>
         <div className="sm:col-span-2">
           <label htmlFor="idy" className="block text-sm font-semibold pb-2">
             الرقم القومي
           </label>
           <input
             type="idy"
             id="idy"
             name="idy"
             placeholder="يحتوي علي اربعة عشر رقم"
             value={idy}
             onChange={(e) => setIdy(e.target.value)}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
         <div className="sm:col-span-2">
         <label htmlFor="job" className="block text-sm font-semibold pb-2">
              الوظيفة
           </label>
           <textarea
            id="job"
             value={job}
             onChange={(e) => setJob(e.target.value)}
             placeholder="اكتب وظبفتـــك أو مؤهلك العلمي"
             rows={1}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
           {/* Mobile Number */}
           <div className="sm:col-span-2">
           <label htmlFor="mob" className="block text-sm font-semibold pb-2">
             رقم التليفون للتواصل والمتابعة 
           </label>
           <input
             type="mob"
             id="mob"
             name="mob"
             placeholder="01xxxxxxxxx"

             value={mob}
             onChange={(e) => setMob(e.target.value)}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
         <div className="sm:col-span-2">
         <label htmlFor="details" className="block text-sm font-semibold px-2 pb-2">
         تفاصيل المقترح           </label>
           <textarea
             id="details"
             value={details}
             onChange={(e) => setDetails(e.target.value)}
             placeholder="اكتب تفاصيل مقترحك أو فكرتك و مقترح تنفيذها "
             rows={4}
             className="block w-full rounded-md border border-gray-300 px-3 py-2"
           />
         </div>
 
       
 
         {/* Submit Button */}
         <div className="sm:col-span-2 mx-auto">
           <button
             type="submit"
             className="inline-block m-4 mb-8 rounded bg-blue-500 px-12 py-2 text-white"
           >
             ارسل المقترح
           </button>
         </div>
       </div>
     </form>
     
    </div>
     
   );
 };

export default IdeasList