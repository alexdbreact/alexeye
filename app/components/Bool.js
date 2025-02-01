"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsGeoAlt } from "react-icons/bs";

const Bool = () => {
  const [place, setPlace] = useState("");
  /* const [location, setLocation] = useState(null); */
  const [know, setKnow] = useState("");
  const [near, setNear] = useState("");
  const [price, setPrice] = useState("");
  const [service, setService] = useState("");
  const [mob, setMob] = useState("");
  const [comment, setComment] = useState("");
  /* const [error, setError] = useState(null); */
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

{  /*const handleGetLocation = (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.'); // Check if geolocation is supported
      return;
    }

    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude }); // Save the location to state
      },
      (err) => {
        setError('Unable to retrieve your location.'); // Handle errors
      }
    );
  };  */}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!place || !mob || !near|| !price || !know || !service) {
      alert("برجاءالاجابة عن جميع الاسئلة ");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/bools", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          place,
          know,
          near,
          price,
          service,
          comment,
          mob,
        }),
      });

      if (res.ok) {
        router.push("/reports");
        alert("تم الارسال  بنجاح .. شكراً لسيادتكم");
      } else {
        throw new Error("Failed to create a item");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      name="new"
      id="new"
      autoComplete="on"
      className="mx-auto mt-2 max-w-xl sm:mt-10 bg-teal-200 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div
        dir="rtl"
        className="grid grid-cols-1 gap-x-2 gap-y-2 lg:grid-cols-1 m-2"
      >
        {/* Select Place */}
        <div>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mt-2"
          >
            <option value="">اختار الحي الذى تسكن فيه *</option>
            <option value="شرق">شرق</option>
            <option value="وسط">وسط</option>
            <option value="غرب">غرب</option>
            <option value="المنتزه أول">المنتزه أول</option>
            <option value="المنتزه ثان">المنتزه ثان</option>
            <option value="الجمرك">الجمرك</option>
            <option value="العجمي">العجمي</option>
            <option value="العامرية أول">العامرية أول</option>
            <option value="العامرية ثان">العامرية ثان</option>
            <option value="برج العرب">برج العرب</option>
          </select>
        </div>

        {/* location Upload */}

        {/*  <div className="bg-blue-100 p-2 rounded-lg text-right sm:col-span-2">
          <button
            onClick={handleGetLocation}
            className="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700 rounded focus:outline-none"
          >
          <BsGeoAlt />   تحديد الموقع (اختياري)         
    
          </button>
    
          {location && (
            <div className="mt-4 text-center">
              <BsGeoAlt />
                     <p>الاحداثيات : {location.latitude}/{location.longitude}  </p>
    
            </div>
          )}
    
        </div> */}

        {/* Select Violation Type */}
        <div className="sm:col-span-2">
          <select
            value={know}
            onChange={(e) => setKnow(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
            <option value="">
              {" "}
              هل تعلم عن اسواق اليوم الواحد و الخدمات المقدمة *
            </option>
            <option value="أعلم"> أعلم</option>
            <option value="لكن"> أعلم و لكن لا اعرف ممبزاتاها </option>
            <option value="لا أعلم "> لا أعلم </option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <select
            value={near}
            onChange={(e) => setNear(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
            <option value=""> هل يوجد سوق يوم واحد في منطقتك *</option>
            <option value="يوجد"> يوجد</option>
            <option value="بعيد"> يوجد ولكنه بعيد </option>
            <option value="لا يوجد "> لا يوجد </option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
            <option value=""> هل جميع المنتجات متوفرة *</option>
            <option value="متوفرة"> متوفرة </option>
            <option value="معظمها"> معظمها متوفر </option>
            <option value="غير">غير متوفرة </option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          >
            <option value=""> هل الاسعار مناسبه *</option>
            <option value="نعم"> نعم </option>
            <option value="بعضها"> بعضها مناسب و الاخر غير مناسب </option>
            <option value="غير مناسبة "> غير مناسبة  </option>
          </select>
        </div>

        {/* File Upload */}

        {/* Comment Text Area */}
        <div className="sm:col-span-2">
        <label htmlFor="comment" className="block text-sm font-semibold">
            اكتب تعليقك (اختياري)
          </label>
          <textarea
          id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="اماكن مطلوب سوق فيها / سلع غير متوفرة /  اسعار سلع غير مناسبة"
            rows={3}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Mobile Number */}
        <div className="sm:col-span-2">
        <label htmlFor="mob" className="block text-sm font-semibold">
            رقم التليفون للتواصل والمتابعة (اختياري)
          </label>
        
          <input
            type="tel"
            id="mob"
            name="mob"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 m-auto">
          <button
            type="submit"
            disabled={isDisabled}
            className="inline-block m-4 mb-8 rounded bg-teal-600 px-12 py-2 text-slate-100 hover:bg-teal-300 hover:text-slate-900"
          >
            {isDisabled ? "جاري الإرسال..." : "ارســـال "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Bool;
