import towelShave from "../../assets/towel-shave.webp";
import haircut from "../../assets/haircut.webp";
import lineUp from "../../assets/line-up.webp";

export function Services() {
  return (
    <>
      <h1 className="margin m-10 text-5xl tablet:text-2xl mobile:text-base mobile:m-4">
        SERVICES
      </h1>
      <div className="cards-wrap flex justify-between gap-8 tablet:gap-4 mobile:flex-col mobile:p-4">
        <a
          href="#appointment"
          className="card  w-full  bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden hover:scale-105 transform cursor-pointer"
        >
          <figure>
            <img src={towelShave} alt="Shoes" />
          </figure>
          <div className="card-body mobile:p-5">
            <h2 className="card-title block mobile:text-base">
              HOT TOWEL SHAVE
            </h2>
            <p className="mobile:text-xs">
              Click below to schedule an appointment.
            </p>
          </div>
        </a>
        <a
          href="#appointment"
          className="card  w-full  bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden hover:scale-105 transform cursor-pointer"
        >
          <figure>
            <img src={haircut} alt="Shoes" />
          </figure>
          <div className="card-body mobile:p-5">
            <h2 className="card-title block mobile:text-base">HAIRCUT</h2>
            <p className="mobile:text-xs">
              Click below to schedule an appointment.
            </p>
          </div>
        </a>
        <a
          href="#appointment"
          className="card  w-full  bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden hover:scale-105 transform cursor-pointer "
        >
          <figure>
            <img src={lineUp} alt="Shoes" />
          </figure>
          <div className="card-body mobile:p-5">
            <h2 className="card-title block mobile:text-base">LINE-UP</h2>
            <p className="mobile:text-xs">
              {" "}
              Click below to schedule an appointment.
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
