import "./styles.css";
import { Button } from "../../ui/Button/Button";
import appointments from "./appointments.json";

export function AvailableTimeSlots({
  selectedTime,
  setSelectedTime,
  selectedDate,
  selectedBarber,
}) {
  const TIMESLOTS = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const dayTimeDisabled = appointments.barbers
    .map((appointment) => {
      if (appointment.id === selectedBarber) {
        return appointment.schedule[selectedDate];
      }
      return null;
    })
    .filter(Boolean)
    .flat();

  return (
    <div className="timeSlots-wrap">
      {TIMESLOTS.map((timeSlot) => {
        const isDisabled = dayTimeDisabled.includes(timeSlot) ? "disabled" : "";
        return (
          <Button
            key={timeSlot}
            onClick={() => setSelectedTime(timeSlot)}
            isActive={selectedTime === timeSlot && isDisabled !== "disabled"}
            isDisabled={isDisabled}
            className="mobile:btn-sm"
          >
            {timeSlot}
          </Button>
        );
      })}
    </div>
  );
}

// selectedTime === timeSlot
