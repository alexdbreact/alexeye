




import Form from "./components/Form";
export default function Home() {
  return (
    <>
      {/* head section */}
      <div className="max-w-lg mx-auto mt-0 bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="text-l py-4 px-6 bg-blue-500 text-white text-center  uppercase">
                قم بتصوير المخالفة و ارسل لنا تفاصيلها خلال ثواني

                </div>
                <Form />
                </div>

    </>
  );
}
