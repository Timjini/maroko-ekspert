import { z } from "zod";

export const countryCodes = [
    { name: "PL", code: "+48" },
    { name: "UK", code: "+44" },
    { name: "DE", code: "+49" },
    { name: "FR", code: "+33" },
    { name: "IT", code: "+39" },
    { name: "ES", code: "+34" },
    { name: "NL", code: "+31" },
    { name: "BE", code: "+32" },
    { name: "SE", code: "+46" },
    { name: "US", code: "+1" },
  ];

export  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const parts = [];
  
    if (digits.length > 0) parts.push(digits.slice(0, 3));
    if (digits.length > 3) parts.push(digits.slice(3, 6));
    if (digits.length > 6) parts.push(digits.slice(6, 10));
  
    return parts.join(" ");
  };

export const formSchema = z.object({
  title: z.string().default("Maroko Ekspert Form"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  status: z.string().default("new"),
});

export const formatMediaImage = (value: string) => {
  const API_BUCKET = import.meta.env.VITE_PUBLIC_BUCKET_URL;
  return value ? API_BUCKET + value : '';
}