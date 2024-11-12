export type BookingInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  destination: string | null;
  travelers: number;
  date: string | null;
  specialRequestsSubject: string;
  specialRequests: string;
  agreeToTerms: boolean;
  fareType: string;
  phonePrefix: string;
};
