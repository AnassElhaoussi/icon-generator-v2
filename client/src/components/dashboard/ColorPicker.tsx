import { useEffect } from "react";
import { ChromePicker } from "react-color";

const DashboardColorPicker = ({chosenColor, setChosenColor}: {
  chosenColor: string | null;
  setChosenColor: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div>
      <ChromePicker />
    </div>
  );
};
export default DashboardColorPicker;
