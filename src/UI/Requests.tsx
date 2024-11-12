import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { BookingInputs } from "../types";

type SpecialRequestsProps = {
  register: UseFormRegister<BookingInputs>;
  watch: UseFormWatch<BookingInputs>;
};

const SpecialRequests: React.FC<SpecialRequestsProps> = ({
  register,
  watch,
}) => {
  const specialRequestsSubject = watch("specialRequestsSubject");

  return (
    <>
      <TextField
        {...register("specialRequestsSubject")}
        label="Special Requests Subject"
        variant="outlined"
        multiline
        rows={1}
        fullWidth
        margin="normal"
      />

      {specialRequestsSubject && (
        <TextField
          {...register("specialRequests")}
          label="Special Requests"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          margin="normal"
        />
      )}
    </>
  );
};

export default SpecialRequests;
