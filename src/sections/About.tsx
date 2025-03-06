import React from "react";
import { useTranslation } from "react-i18next";
import ActionButton from "../components/ActionButton";

interface AboutProps {
  toggleModal: () => void;
}

const About: React.FC<AboutProps> = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="mx-auto px-4 container grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl">
        <div className="mb-6 md:mb-0 mx-8 md:mx-18">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">{t("about.title")}</h2>
          <p className="text-md text-balance" dangerouslySetInnerHTML={{ __html: t("about.description") }} />
        </div>
        <div className="mx-8 md:mx-18">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">{t("about.information")}</h2>
          <h3 className="text-md text-balance font-bold">{t("about.address.label")}</h3>
          <span className="mt-2 text-md text-balance" dangerouslySetInnerHTML={{ __html: t("about.address.value") }} />
          <div className="flex flex-col">
            <h3 className="mt-2 text-md font-bold">{t("about.email.label")}</h3>
            <span className="text-md text-balance">{t("about.email.value")}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="mt-2 text-md font-bold">{t("about.phone.label")}</h3>
            {t("about.phone.values", { returnObjects: true }).map((phone: string, index: number) => (
              <span key={index} className="text-md text-balance">{phone}</span>
            ))}
          </div>
          <ActionButton title={t("about.contact_button")} action={toggleModal} />
        </div>
      </div>
    </section>
  );
};

export default About;
