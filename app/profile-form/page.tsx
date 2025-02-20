"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MasterLayout from "@/app/components/master-layout";
import TextField from "@/app/components/text-field";
import CheckboxField from "@/app/components/checkbox-field";
import { profileSchema, Profile } from "@/app/schema";
import { updateProfile } from "@/app/actions";

export default function ProfileFormPage() {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<Profile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      receiveNewsletter: false,
    },
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<string>("");

  const onSubmit = async (data: Profile) => {
    setSuccessMessage("");

    const response = await updateProfile(data);

    if (response.errors) {
      response.errors.forEach((error) => {
        setError(error.path[0] as keyof Profile, {
          type: "manual",
          message: error.message,
        });
      });
    } else {
      setSuccessMessage(response.message);
      setSubmittedData(JSON.stringify(data, null, 2));
      reset();
    }
  };

  return (
    <MasterLayout>
      <form onSubmit={handleSubmit(onSubmit)} aria-labelledby='formTitle'>
        <h2 className='text-2xl font-bold mb-6' id='formTitle'>
          Profile Form
        </h2>

        <TextField
          name='firstName'
          control={control}
          label='First name'
          placeholder='Enter your first name'
        />
        <TextField
          name='lastName'
          control={control}
          label='Last name'
          placeholder='Enter your last name'
        />
        <TextField
          name='phoneNumber'
          control={control}
          label='Phone number'
          placeholder='987 65 432'
        />
        <CheckboxField
          id='receiveNewsletter'
          name='receiveNewsletter'
          control={control}
          label='Receive newsletter'
        />
        <button
          className='bg-blue-500 text-white p-2 rounded mb-3'
          type='submit'
          aria-label='Save changes'
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save changes"}
        </button>
        {successMessage && <p className='mb-12'>{successMessage}</p>}
        {submittedData && (
          <pre className='bg-gray-100 p-4 rounded-md'>{submittedData}</pre>
        )}
      </form>
    </MasterLayout>
  );
}
