const ReadyToExperienceRelief = () => {
  return (
    <section className="bg-white border-t py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h3
          className="
            font-bold text-[#7BA05B] mb-3 sm:mb-4 md:mb-5
            
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          Ready to Experience Relief?
        </h3>

        {/* Description */}
        <p
          className="
            text-gray-600 mb-6 sm:mb-8
            
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            
            leading-normal
            sm:leading-relaxed
            md:leading-loose
          "
        >
          Take the first step toward relaxation and wellness. Our expert
          therapists are here to
          <br className="hidden sm:block" />
          tailor each treatment to your unique needs, ensuring a rejuvenating
          and restorative experience every time.
        </p>

        {/* Button */}
        <a href="https://wa.me/447848930217" target="_blank">
          <button
            className="
            bg-yellow-600 hover:bg-[#7BA05B]
            text-white font-bold rounded-full shadow-md
            transition duration-300 cursor-pointer
            
            text-sm
            sm:text-base
            md:text-lg
            
            px-6 py-3
            sm:px-8 sm:py-4
            md:px-10 md:py-4
            lg:px-12 lg:py-5
            
            w-full sm:w-auto
          "
          >
            Book an Appointment
          </button>
        </a>
      </div>
    </section>
  );
};

export default ReadyToExperienceRelief;
