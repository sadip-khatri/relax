const ReadyToBook: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-14 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        {/* Heading */}
        <h2 className="text-[#7BA05B] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Ready to Book Your Appointment?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl">
          Contact us today to schedule your wellness session.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a
            href="https://wa.me/07848930217"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-[#7BA05B] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-700 transition duration-300">
              Book via WhatsApp
            </button>
          </a>

          <a href="tel:07848930217" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border border-green-600 text-[#7BA05B] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-green-50 transition duration-300">
              Call Us Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBook;
