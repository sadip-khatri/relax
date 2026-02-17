const ReadyToBook: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-[#7BA05B] font-bold text-5xl mb-6">
          Ready to Book Your Appointment?
        </h2>

        <p className="text-gray-600 text-lg">
          Contact us today to schedule your wellness session.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#7BA05B] text-white px-6 py-6 rounded-4xl cursor-pointer flex items-center gap-2 hover:bg-green-700">
            Book via WhatsApp
          </button>

          <button className="border border-green-600 text-[#7BA05B] px-12 py-6 rounded-4xl cursor-pointer flex items-center gap-2 hover:bg-green-50">
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBook;
