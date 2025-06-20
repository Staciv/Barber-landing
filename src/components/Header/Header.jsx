import { Link } from "react-router-dom";
import { BookingModal } from "../BookingModal/BookingModal";
import { Button } from "../../ui/Button/Button";

export function Header() {
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost desktop:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>TEAM</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          NOVA
        </Link>
      </div>
      <div className="navbar-center hidden desktop:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a>SERVICES</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>TEAM</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button
          className=" px-4 py-2 rounded-md font-semibold transition-all duration-300
        bg-[rgb(82,180,223)] hover:bg-[rgb(87,135,155)]"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          APPOINTMENT
        </Button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box  max-w-fit p-12 bg-transparent tablet:max-w-full mobile:p-0  mobile:w-full">
            <form method="dialog">
              <Button className="btn btn-sm text-white bg-slate-400 btn-circle btn-ghost absolute right-1">
                ✕
              </Button>
            </form>
            <BookingModal />
          </div>
        </dialog>
      </div>
    </div>
  );
}
