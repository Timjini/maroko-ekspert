export interface MainButtonProps {
  title: string;
  onClick: () => void;
}

export interface PhoneInputProps {
  onChange: (value: string) => void;
}
export interface FormModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}
export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormResponse {
  status: string;
  message: string;
}

export interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  desiredDate: string;
  tourId: string;
  tourName: string;
  message: string;
}