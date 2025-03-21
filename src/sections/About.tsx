import React from "react";
import { useTranslation } from "react-i18next";
import ActionButton from "../components/ActionButton";
import { formatMediaImage } from "../utils";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface AboutProps {
  toggleModal: () => void;
}

const About: React.FC<AboutProps> = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 flex items-center justify-center py-20"
    >
      <div className="mx-auto px-4 container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-xl">
        {/* Left Column - About Us */}
        <div className="flex flex-col space-y-8 mx-4 md:mx-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide">
              {t("about.title")}
            </h2>
            <div className="relative group">
              <div className="overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 group-hover:scale-102">
                <img 
                  src={formatMediaImage('/home/elOuafi.png')} 
                  alt="ElOuafi" 
                  className="w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
          
          <p
            className="text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("about.description") }}
          />
        </div>

        {/* Right Column - Information */}
        <div className="mx-4 md:mx-8 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide">
            {t("about.information")}
          </h2>

          <div className="space-y-8">
            {/* Address Section */}
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="w-6 h-6 text-gray-900  mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("about.address.label")}
                </h3>
                <address className="text-gray-600 not-italic leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t("about.address.value") }}
                />
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-start gap-2">
              <FaEnvelope className="w-6 h-6 text-gray-900  mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("about.email.label")}
                </h3>
                <a 
                  href={`mailto:${t("about.email.value")}`}
                  className="text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  {t("about.email.value")}
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("about.phone.label")}
                </h3>
                <div className="space-y-1">
                  {(t("about.phone.values", { returnObjects: true }) as string[]).map(
                    (phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                        className="block text-gray-600 hover:text-emerald-700 transition-colors"
                      >
                        {phone}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pl-4">
            <ActionButton
              title={t("about.contact_button")}
              onClick={toggleModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;