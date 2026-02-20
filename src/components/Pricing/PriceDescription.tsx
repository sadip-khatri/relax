function PriceDescription() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20">
      <p
        className="max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-14 
                     text-base sm:text-lg md:text-xl lg:text-2xl 
                     leading-7 sm:leading-8 md:leading-9 lg:leading-10 
                     tracking-wide text-center text-gray-700"
      >
        We believe everyone deserves access to professional massage therapy. Our
        pricing is transparent and competitive.
        <br className="hidden sm:block" />
        Choose from individual sessions or save with our value packages designed
        for regular wellness maintenance.
      </p>
    </section>
  );
}

export default PriceDescription;
