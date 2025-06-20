import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Appointment } from "../../components/Appointment/Appointment";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Services } from "../../components/Services/Services";

export function HomePage() {
  return (
    <>
      <Header />
      <Appointment />
      <Services />
      <AboutUs />
      <Footer />
    </>
  );
}
