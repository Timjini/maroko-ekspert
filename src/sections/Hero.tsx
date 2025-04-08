import { useTranslation } from "react-i18next";
import ActionButton from "../components/ActionButton";

interface HeroProps {
  toggleModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] via-[#fbe4c1] to-[#f6c68a] text-gray-900 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          {t("hero.title")}
        </h1>
        <p 
          className="text-lg md:text-2xl mb-8 text-gray-700"
          dangerouslySetInnerHTML={{ __html: t("hero.description") }}
        />
        <ActionButton title={t("hero.button")} onClick={toggleModal} />
      </div>

      {/* Decorative element */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#fff3e0] rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#ffe0b2] rounded-full blur-2xl opacity-50 z-0" />
    </div>
  );
};

export default Hero;
