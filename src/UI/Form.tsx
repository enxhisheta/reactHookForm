import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type BookingInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  destination: string;
  travelers: number;
  date: string | null;
  specialRequestsSubject: string;
  specialRequests: string;
  agreeToTerms: boolean;
  fareType: string;
};

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
    },
  });

  const specialRequestsSubject = watch("specialRequestsSubject");

  const onSubmit: SubmitHandler<BookingInputs> = (data) => {
    console.log(data);
    reset();
  };

  const handleFareTypeChange = (fareType: string) => {
    setValue("fareType", fareType);
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

        <Box className="fare-options-container">
          {[
            { label: "Regular", value: "regular" },
            { label: "Student - Extra discounts/baggage", value: "student" },
            { label: "Senior Citizen - Up to $20 off", value: "senior" },
            { label: "Armed Forces - Up to $20 off", value: "armedForces" },
            {
              label: "Doctor and Nurses - Up to $20 off",
              value: "doctorNurses",
            },
          ].map((fare) => (
            <Box
              key={fare.value}
              onClick={() => handleFareTypeChange(fare.value)}
              className={`fare-option ${
                watch("fareType") === fare.value ? "fare-option-selected" : ""
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

        <TextField
          {...register("name", {
            required: "Name is required",
            minLength: { value: 8, message: "Enter at least 8 characters" },
          })}
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
        />

        <TextField
          {...register("destination", {
            required: "Please select a destination",
          })}
          label="Destination"
          select
          variant="outlined"
          error={!!errors.destination}
          helperText={errors.destination?.message}
          value={watch("destination") || ""}
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

        <TextField
          {...register("specialRequestsSubject")}
          label="Special Requests Subject"
          variant="outlined"
          multiline
          rows={1}
        />

        {specialRequestsSubject && (
          <TextField
            {...register("specialRequests")}
            label="Special Requests"
            variant="outlined"
            multiline
            rows={3}
          />
        )}

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
