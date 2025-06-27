export function CreatedForm() {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <div className="w-80 h-80 border-x-2 border-white-50 rounded-full bg-gradient-to-br from-blue-500 to-blue-50 = drop-shadow-2xl shadow-[0_20px_45px_-10px_rgb(18_20_110_/_0.97)] flex items-center justify-center">
          <svg
            className="w-56 h-56 text-slate-200 filter drop-shadow-[0_6px_8px_rgb(18_20_110_/_0.97)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 13l4 4L19 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-20 text-3xl font-semibold text-gray-600">
          Appointment created!
        </p>
      </div>
    </div>
  );
}
