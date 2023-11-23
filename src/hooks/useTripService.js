import { useMutation } from "react-query";
import { generateTrip } from "services";
export function useTripService(trip) {
  const generateTripMutation = useMutation({
    mutationFn: (trip) => {
      generateTrip(trip);
    },
  });

  return generateTripMutation;
}
