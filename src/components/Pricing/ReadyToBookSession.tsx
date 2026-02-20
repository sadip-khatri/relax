const ReadyToBookSession = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 border-t">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#7BA05B] mb-4">
          Ready to Book Your Session?
        </h3>

        <p className="text-gray-600 text-xl mb-8 leading-relaxed">
          Contact us today to schedule your appointment or ask about our
          packages
        </p>

        <a href="https://wa.me/07848930217" target="_blank">
          {" "}
          <button className="bg-yellow-600 hover:bg-[#7BA05B] cursor-pointer text-white text-lg font-bold px-12 py-5 rounded-full shadow-md transition">
            Book via WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
};

export default ReadyToBookSession;
