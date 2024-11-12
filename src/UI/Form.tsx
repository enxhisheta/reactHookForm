import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import TripDetails from "./TripDetails";
import Fares from "./Fares";
import SpecialRequests from "./Requests";
import { BookingInputs } from "../types";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<BookingInputs>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      destination: "",
      travelers: 1,
      date: null,
      specialRequestsSubject: "",
      specialRequests: "",
      agreeToTerms: false,
      fareType: "regular",
      phonePrefix: "",
    },
  });

  const onSubmit: SubmitHandler<BookingInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
      >
        <Typography variant="h5" className="form-title">
          Book Your Trip
        </Typography>

        <Fares setValue={setValue} watch={watch} />
        <PersonalInfo register={register} errors={errors} />
        <ContactInfo
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <TripDetails register={register} errors={errors} control={control} />
        <SpecialRequests register={register} watch={watch} />

        <FormControlLabel
          control={
            <Checkbox
              {...register("agreeToTerms", {
                required: "Please agree to the terms and conditions",
              })}
            />
          }
          label="I agree to the terms and conditions"
        />
        {errors.agreeToTerms && (
          <Typography variant="caption" color="error">
            {errors.agreeToTerms.message}
          </Typography>
        )}

        <Button type="submit" variant="contained" color="primary">
          Submit Booking
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default Form;
