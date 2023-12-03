import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const TimeSlotPicker = ({ time, timeSetter, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={time}
        onChange={(newValue) => timeSetter(newValue)}
        sx={{ width: "100%" }}
      />
    </LocalizationProvider>
  );
};
