import React, { useState } from "react";

interface PhoneInputProps {
  onChange: (value: string) => void;
}

const countryCodes = [
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

// Format phone number with spaces
const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  const parts = [];

  if (digits.length > 0) parts.push(digits.slice(0, 3));
  if (digits.length > 3) parts.push(digits.slice(3, 6));
  if (digits.length > 6) parts.push(digits.slice(6, 10));

  return parts.join(" ");
};

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange }) => {
  const [selectedCode, setSelectedCode] = useState("+48");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    onChange(`${selectedCode} ${formatted}`);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
    onChange(`${e.target.value} ${phoneNumber}`);
  };

  return (
    <div>
      <label className="block text-left text-gray-500 text-sm">
        Phone number
      </label>
      <div className="relative mt-2 text-gray-500">
        <div className="absolute w-24 inset-y-0 left-0 flex items-center border-r pr-3">
          <select
            className="text-sm w-24 outline-none rounded-lg h-full pl-3 pr-2 bg-transparent"
            value={selectedCode}
            onChange={handleCountryChange}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
        </div>

        <input
          type="tel"
          placeholder="123 456 7890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="w-full pl-[6.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
