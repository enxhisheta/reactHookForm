import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import {
  Controller,
  FieldErrors,
  Control,
  UseFormRegister,
} from "react-hook-form";
import { BookingInputs } from "../types";

type TripDetailsProps = {
  register: UseFormRegister<BookingInputs>;
  errors: FieldErrors<BookingInputs>;
  control: Control<BookingInputs>;
};

const TripDetails: React.FC<TripDetailsProps> = ({
  register,
  errors,
  control,
}) => (
  <>
    <TextField
      {...register("destination", { required: "Please select a destination" })}
      label="Destination"
      select
      variant="outlined"
      error={!!errors.destination}
      helperText={errors.destination?.message}
    >
      <MenuItem value="cairo">Cairo</MenuItem>
      <MenuItem value="tokyo">Tokyo</MenuItem>
      <MenuItem value="new_york">New York</MenuItem>
      <MenuItem value="sydney">Sydney</MenuItem>
      <MenuItem value="san_francisco">San Francisco</MenuItem>
    </TextField>

    <TextField
      {...register("travelers", { min: 1 })}
      label="Number of Travelers"
      type="number"
      variant="outlined"
      error={!!errors.travelers}
      helperText={errors.travelers?.message}
    />

    <Controller
      control={control}
      name="date"
      rules={{ required: "Please select a travel date" }}
      render={({ field, fieldState: { error } }) => (
        <DateTimePicker
          label="Travel Date"
          value={field.value}
          onChange={field.onChange}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error?.message,
            },
          }}
        />
      )}
    />
  </>
);

export default TripDetails;
