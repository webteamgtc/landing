import CommonMainForm from "@/app/[locale]/components/MainForm";
import Image from "next/image";
import { useTranslations } from "next-intl"; // for localization
import SwapForm from "@/app/[locale]/components/MainForm";
import TradeForm from "@/app/[locale]/components/TradeForm";

const SliderModal = ({ isOpen, onClose, zapierUrl, successPath, emailConfig }) => {

  const t = useTranslations("partner.form"); // adjust namespace if needed
  return (
    <div
      className={`fixed inset-0 z-[99] transition-all duration-700 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 z-10 opacity-60 pointer-events-none">
        <img
          src="/ib/lp.webp"
          alt="Decorative background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div
        className={`absolute top-0 right-0 h-full w-full bg-[#0F1035] text-white shadow-lg transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container flex-col mx-auto flex justify-center items-center h-full w-full">
          <div className="flex justify-end w-full pb-4">
            <button className="text-white text-2xl cursor-pointer" onClick={onClose}>
              <img src="/close.svg" alt="Close" className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-4">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
              width={200}
              height={72}
              alt="GTCFX"
              className="lg:w-[200px] lg:h-[72px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
            />
            <h2 className="text-center text-2xl md:text-3xl font-medium my-5 md:my-8">
                  {t("heading")}
            </h2>
            <TradeForm
             zapierUrl={zapierUrl}
              successPath={successPath}
              emailConfig={emailConfig} // Pass the email configuration
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderModal;

