import pricingImagePc from "@/assets/price.png";
import pricingImageMobile from "@/assets/mprice.png";

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section-custom py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* PC / Tablet image */}
          <img
            src={pricingImagePc}
            alt="料金プラン"
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile image */}
          <img
            src={pricingImageMobile}
            alt="料金プラン"
            className="block md:hidden w-full h-auto object-contain"
          />

          {/* LINE CTA button - bottom right, sized and positioned relative to image */}
          <div className="absolute right-4 bottom-10 md:right-10 md:bottom-16 lg:right-16 lg:bottom-20">
            <a href="/contact/line" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500
                 px-7 py-2.5 md:px-8 md:py-3 text-[1.3rem] md:text-[1.25rem] font-bold text-white shadow-lg 
                 hover:bg-emerald-600 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
              >
                LINEで相談
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
