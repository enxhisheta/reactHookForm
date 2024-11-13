import React from "react";
import { TextField, MenuItem, Box, CircularProgress } from "@mui/material";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { BookingInputs } from "../types";
import { useFetch } from "../Hooks/useFetch";

type ContactInfoProps = {
  register: UseFormRegister<BookingInputs>;
  errors: FieldErrors<BookingInputs>;
  setValue: UseFormSetValue<BookingInputs>;
  watch: UseFormWatch<BookingInputs>;
};

const API_URL = "https://restcountries.com/v2/all";

const ContactInfo: React.FC<ContactInfoProps> = ({
  register,
  errors,
  setValue,
  watch,
}) => {
  const { data: phoneCountries, loading, error } = useFetch(API_URL);

  return (
    <>
      <TextField
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email address",
          },
        })}
        label="Email"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Box className="phone-input-container">
        <TextField
          select
          label="Phone Prefix"
          value={watch("phonePrefix") || ""}
          onChange={(e) => setValue("phonePrefix", e.target.value)}
          sx={{ width: "150px" }}
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          ) : error ? (
            <MenuItem disabled>Error loading countries</MenuItem>
          ) : (
            phoneCountries.map((country) => (
              <MenuItem key={country.code} value={country.prefix}>
                {country.prefix} ({country.label})
              </MenuItem>
            ))
          )}
        </TextField>

        <TextField
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid phone number",
            },
          })}
          label="Phone Number"
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone?.message}
          fullWidth
        />
      </Box>
    </>
  );
};

export default ContactInfo;
