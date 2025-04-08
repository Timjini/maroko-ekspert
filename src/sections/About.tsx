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
      className="min-h-screen flex items-center py-16 bg-gray-50"
    >
      <div className="mx-auto px-4 container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-xl">
        {/* Left Column - About Us */}
        <div className="flex flex-col space-y-8 mx-4 md:mx-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
              {t("about.title")}
            </h2>
            <div className="relative group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={formatMediaImage('/home/elOuafi.png')} 
                  alt="ElOuafi" 
                  className="w-full h-auto max-h-80 object-cover object-top"
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
        <div className="mx-4 md:mx-8 space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            {t("about.information")}
          </h2>

          <div className="space-y-6">
            {/* Address Section */}
            <div className="flex items-start gap-4">
              <div className="bg-[#C19B77] p-3 rounded-full">
                <FaMapMarkerAlt className="w-5 h-5 text-grey-700" />
              </div>
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
            <div className="flex items-start gap-4">
              <div className="bg-[#C19B77] p-3 rounded-full">
                <FaEnvelope className="w-5 h-5 text-grey-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("about.email.label")}
                </h3>
                <a 
                  href={`mailto:${t("about.email.value")}`}
                  className="text-gray-600 hover:text-grey-700 transition-colors"
                >
                  {t("about.email.value")}
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start gap-4">
              <div className="bg-[#C19B77] p-3 rounded-full">
                <FaPhoneAlt className="w-5 h-5 text-grey-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("about.phone.label")}
                </h3>
                <div className="space-y-2">
                  {(t("about.phone.values", { returnObjects: true }) as string[]).map(
                    (phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                        className="block text-gray-600 hover:text-grey-700 transition-colors"
                      >
                        {phone}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
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