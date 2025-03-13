import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import MainButton from "../components/MainButton";
import PhoneInput from "../components/PhoneInput";
// import LoadingButton from "../components/LoadingButton";
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const formSchema = z.object({
  title: z.string().default("Maroko Ekspert Form"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  status: z.string().default("new"),
});

type FormData = z.infer<typeof formSchema>;

interface FormModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, toggleModal }) => {
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
      console.log("form data", data);
      const response = await axios.post(`${BACKEND_URL}/forms`, data, {
        headers: { "Content-Type": "application/json" },
      });

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
            className="absolute inset-0 bg-gray-800 bg-opacity-75"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-lg p-8 z-10">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-left text-gray-500 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Your Name"
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-gray-500 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Your Email"
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <PhoneInput onChange={(value) => setValue("phone", value)} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

              <div>
                <label htmlFor="message" className="block text-left text-gray-500 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Your Message"
                  rows={4}
                  className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <div className="flex justify-center">
                {isSubmitting ? (
                  <MainButton title="Sending..."/>
                ) : (
                  <MainButton title="Send"/>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
