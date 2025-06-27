import { Barbers } from "../Barbers/Barbers";

export function BarberForm({ barber, setBarber }) {
  return <Barbers selectedBarber={barber} onBarberChange={setBarber} />;
}
