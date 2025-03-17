import React, { useState } from "react";
import { PhoneInputProps } from '../types/common';
import {countryCodes , formatPhoneNumber} from '../utils';

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
