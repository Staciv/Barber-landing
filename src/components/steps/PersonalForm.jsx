import { TextInput } from "../../ui/TextInput/TextInput";

export function PersonalForm({
  userName,
  handleChangeUserName,
  phone,
  handleChangeUserPhone,
}) {
  return (
    <>
      <TextInput
        value={userName}
        onChange={handleChangeUserName}
        placeholder="Name"
        type="text"
        pattern="[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9\-]*"
        icon={
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="8" cy="7" r="4" />
          </svg>
        }
        minLength="3"
        maxLength="30"
        error="Must be 3 to 30 characters containing only letters, numbers or dash"
      />
      <TextInput
        value={phone}
        onChange={handleChangeUserPhone}
        placeholder="Phone"
        type="tel"
        pattern="[0-9]*"
        icon={
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        }
        minLength="9"
        maxLength="9"
        error="Must be 9 digits"
      />
    </>
  );
}
