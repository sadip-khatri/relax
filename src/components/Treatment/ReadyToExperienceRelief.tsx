import React from "react";

const ReadyToExperienceRelief = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 border-t">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#7BA05B] mb-4">
          Ready to Experience Relief?
        </h3>

        <p className="text-gray-600 text-xl mb-8 leading-relaxed">
          Take the first step toward relaxation and wellness. Our expert
          therapists are here to <br /> tailor each treatment to your unique
          needs, ensuring a rejuvenating and restorative experience every time.
        </p>

        <button className="bg-yellow-600 hover:bg-[#7BA05B] cursor-pointer text-white text-lg font-bold px-12 py-5 rounded-full shadow-md transition">
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default ReadyToExperienceRelief;
