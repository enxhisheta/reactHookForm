import { useState, FormEvent, ChangeEvent } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

type BookingInputs = {
  name: string;
  email: string;
  phone: string;
  passportNumber: string;
  destination: string;
  travelers: number;
  date: string;
  specialRequests: string;
  agreeToTerms: boolean;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<BookingInputs>({
    name: "",
    email: "",
    phone: "",
    passportNumber: "",
    destination: "",
    travelers: 1,
    date: "",
    specialRequests: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<BookingInputs>>({});

  const validateForm = () => {
    const newErrors: Partial<BookingInputs> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.passportNumber)
      newErrors.passportNumber = "Passport number is required";
    if (!formData.destination)
      newErrors.destination = "Please select a destination";
    if (!formData.date) newErrors.date = "Please select a travel date";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = false;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        mx: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Book Your Trip
      </Typography>

      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        name="email"
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        name="phone"
        label="Phone Number"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
      />

      <TextField
        name="passportNumber"
        label="Passport Number"
        variant="outlined"
        value={formData.passportNumber}
        onChange={handleChange}
        error={!!errors.passportNumber}
        helperText={errors.passportNumber}
      />

      <TextField
        name="destination"
        label="Destination"
        select
        variant="outlined"
        value={formData.destination}
        onChange={handleChange}
        error={!!errors.destination}
        helperText={errors.destination}
      >
        <MenuItem value="cairo">Cairo</MenuItem>
        <MenuItem value="tokyo">Tokyo</MenuItem>
        <MenuItem value="new_york">New York</MenuItem>
        <MenuItem value="sydney">Sydney</MenuItem>
        <MenuItem value="san_francisco">San Francisco</MenuItem>
      </TextField>

      <TextField
        name="travelers"
        label="Number of Travelers"
        type="number"
        variant="outlined"
        value={formData.travelers}
        onChange={handleChange}
        error={!!errors.travelers}
        helperText={errors.travelers}
      />

      <TextField
        name="date"
        label="Travel Date"
        type="date"
        variant="outlined"
        slotProps={{
          inputLabel: { shrink: true },
        }}
        value={formData.date}
        onChange={handleChange}
        error={!!errors.date}
        helperText={errors.date}
      />

      <TextField
        name="specialRequests"
        label="Special Requests"
        variant="outlined"
        multiline
        rows={3}
        value={formData.specialRequests}
        onChange={handleChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
        }
        label="I agree to the terms and conditions"
      />
      {errors.agreeToTerms && (
        <Typography variant="caption" color="error">
          {errors.agreeToTerms}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit Booking
      </Button>
    </Box>
  );
};

export default Form;
