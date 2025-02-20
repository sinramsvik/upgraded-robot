import { Control } from "react-hook-form";

//For posts
export interface PostType {
  id: number;
  image: string;
  title: string;
  description: string;
  author?: string;
  comments?: number;
}

//For profile form
export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  receiveNewsletter: boolean;
}

export interface TextInputProps {
  id: string;
  name: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

export interface TextFieldProps {
  name: string;
  control: Control<Profile>;
  label: string;
  placeholder: string;
}

export interface CheckboxInputProps {
  id: string;
  name: string;
  label: string;
  control: Control<Profile>;
}

//For gif fetcher
export interface Gif {
  id: string;
  images: {
    downsized: {
      url: string;
    };
  };
  title: string;
}
