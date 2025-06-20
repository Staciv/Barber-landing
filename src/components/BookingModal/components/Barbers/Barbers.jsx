import { ListItem } from "../../../../ui/ListItem/ListItem";
import styles from "./Barbers.module.css";

export function Barbers({ selectedBarber, onBarberChange }) {
  const BARBERS = {
    Anya: "Anya",
    Bella: "Bella",
    Anastsiya: "Anastsiya",
  };
  return (
    <div className="list  flex flex-col gap-4 min-w-72 ">
      <p
        className={`p-4 pb-2 text-xl uppercase text-lime-600 opacity-60 tracking-wide ${styles.titleCard} mobile:text-base`}
      >
        Choose a barber
      </p>

      <ListItem
        onClick={() => onBarberChange("d7123a85-7c5f-4f4a-ae91-b66e44c75a26")}
        selectedItem={selectedBarber}
        isActive={selectedBarber === "d7123a85-7c5f-4f4a-ae91-b66e44c75a26"}
        name={BARBERS.Anya}
        icon={
          <img
            className="size-12 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          />
        }
      >
        EDGE OF CALM
      </ListItem>
      <ListItem
        onClick={() => onBarberChange("9a31f3d6-3bb8-4a88-9a52-3ae30f14ff42")}
        selectedItem={selectedBarber}
        isActive={selectedBarber === "9a31f3d6-3bb8-4a88-9a52-3ae30f14ff42"}
        name={BARBERS.Bella}
        icon={
          <img
            className="size-12 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          />
        }
      >
        WHISPERING BLADES
      </ListItem>
      <ListItem
        onClick={() => onBarberChange("52cfbdd1-1f1c-4a6b-9186-18b76f3059a0")}
        selectedItem={selectedBarber}
        isActive={selectedBarber === "52cfbdd1-1f1c-4a6b-9186-18b76f3059a0"}
        name={BARBERS.Anastsiya}
        icon={
          <img
            className="size-12 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
          />
        }
      >
        VISION IN DETAIL
      </ListItem>
    </div>
  );
}
