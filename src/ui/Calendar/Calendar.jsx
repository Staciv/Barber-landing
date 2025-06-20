import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./styles.css";

export function Calendar({ selectedDate, setDate }) {
  return (
    <>
      <div popover="auto" id="rdp-popover" className="dropdown bg-transparent ">
        <DayPicker
          fixedWeeks
          className="react-day-picker"
          mode="single"
          selected={selectedDate}
          onSelect={setDate}
        />
      </div>
    </>
  );
}
