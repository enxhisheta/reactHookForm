import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

type BookingInputs = {
  name: string;
  email: string;
  destination: string;
  travelers: number;
  date: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInputs>();

  const onSubmit: SubmitHandler<BookingInputs> = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Book Your Trip
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        variant="outlined"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Destination"
        select
        variant="outlined"
        defaultValue=""
        {...register("destination", {
          required: "Please select a destination",
        })}
        error={!!errors.destination}
        helperText={errors.destination?.message}
      >
        <MenuItem value="cairo">Cairo</MenuItem>
        <MenuItem value="jordan">Jordan</MenuItem>
        <MenuItem value="san_francisco">San Francisco</MenuItem>
      </TextField>

      <TextField
        label="Number of Travelers"
        type="number"
        variant="outlined"
        {...register("travelers", {
          required: "Please specify the number of travelers",
          min: { value: 1, message: "Must be at least 1 traveler" },
        })}
        error={!!errors.travelers}
        helperText={errors.travelers?.message}
      />

      <TextField
        label="Travel Date"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        {...register("date", { required: "Please select a travel date" })}
        error={!!errors.date}
        helperText={errors.date?.message}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit Booking
      </Button>
    </Box>
  );
};

export default Form;
