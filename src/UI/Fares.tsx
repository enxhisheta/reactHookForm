import React from "react";
import { Box, Typography } from "@mui/material";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { BookingInputs } from "../types";

type FaresProps = {
  setValue: UseFormSetValue<BookingInputs>;
  watch: UseFormWatch<BookingInputs>;
};

const fareOptions = [
  { label: "Regular", value: "regular" },
  { label: "Student - Extra discounts", value: "student" },
  { label: "Senior Citizen - Up to $20 off", value: "senior" },
  { label: "Armed Forces - Up to $20 off", value: "armedForces" },
  { label: "Doctor and Nurses - Up to $20 off", value: "doctorNurses" },
];

const Fares: React.FC<FaresProps> = ({ setValue, watch }) => {
  const selectedFare = watch("fareType");

  return (
    <Box className="fare-options-container">
      {fareOptions.map((fare) => (
        <Box
          key={fare.value}
          onClick={() => setValue("fareType", fare.value)}
          className={`fare-option ${
            selectedFare === fare.value ? "fare-option-selected" : ""
          }`}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {fare.label.split(" - ")[0]}
          </Typography>
          <Typography variant="caption">
            {fare.label.split(" - ")[1]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Fares;
