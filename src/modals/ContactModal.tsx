import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MainButton from "../components/MainButton";
import PhoneInput from "../components/PhoneInput";
import { FormModalProps } from "../types/common";
import { formSchema } from "../utils";
import mainApi from "../api";
import { useTranslation } from "react-i18next";
// import LoadingButton from "../components/LoadingButton";
// eslint-disable-next-line react-refresh/only-export-components
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type FormData = z.infer<typeof formSchema>;

const FormModal: React.FC<FormModalProps> = ({ isOpen, toggleModal }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await mainApi.sendFormData(data);

      if (response?.data?.status !== "success") {
        throw new Error("Failed to send the form. Please try again later.");
      }

      reset();
      alert("Your message was sent successfully!");
      toggleModal();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#fdf6ec] via-[#fbe4c1] to-[#f6c68a] bg-opacity-75"
            onClick={toggleModal}
          ></div>

          <div className="relative glass rounded-2xl shadow-lg w-11/12 max-w-lg p-8 z-10">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:cursor-pointer"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center capitalize">
              {t('contact.contact_us')}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-gray-500 text-sm capitalize"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder={t('contact.your_name')}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-gray-500 text-sm capitalize"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="email@example.com"
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <PhoneInput onChange={(value) => setValue("phone", value)} />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-gray-500 text-sm capitalize"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder={t('contact.your_message')}
                  rows={4}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 capitalize"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <MainButton
                  title={isSubmitting ? `${t('contact.sending')}...` : t('contact.send')}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
