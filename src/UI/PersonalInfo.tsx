import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { BookingInputs } from "../types";

type PersonalInfoProps = {
  register: UseFormRegister<BookingInputs>;
  errors: FieldErrors<BookingInputs>;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ register, errors }) => (
  <>
    <TextField
      {...register("name", { required: "Name is required" })}
      label="Name"
      variant="outlined"
      error={!!errors.name}
      helperText={errors.name?.message}
    />
    <TextField
      {...register("surname", { required: "Surname is required" })}
      label="Surname"
      variant="outlined"
      error={!!errors.surname}
      helperText={errors.surname?.message}
    />
  </>
);

export default PersonalInfo;
