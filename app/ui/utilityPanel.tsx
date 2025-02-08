import Link from "next/link";
import { signOut } from "@/auth";

export default function UtilityPanel() {
  return (
    <div className="bg-paynes_gray-200 border-paynes_gray-100 col-span-2 row-start-3 row-end-8 rounded-md flex flex-col justify-between items-stretch py-8">
      <div>
        <div className="px-4 my-4">
          <Link
            href={"/home"}
            className="bg-onyx-300 hover:bg-onyx-500 py-2 px-4 rounded-full border w-full flex flex-row justify-start items-center font-bold text-lg"
          >
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
              </svg>
            </div>
            <p>Inicio</p>
          </Link>
        </div>
        <div className="px-4 my-4">
          <Link
            href={"/home/gastos"}
            className="bg-onyx-300 hover:bg-onyx-500 py-2 px-4 rounded-full border w-full flex flex-row justify-start items-center font-bold text-lg"
          >
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.875 6c.09-.22.195-.42.31-.598.413-.638.895-.902 1.315-.902.264 0 .54.1.814.325a.75.75 0 1 0 .953-1.158C9.772 3.259 9.169 3 8.5 3c-1.099 0-1.992.687-2.574 1.587A5.518 5.518 0 0 0 5.285 6H4.75a.75.75 0 0 0 0 1.5h.267a7.372 7.372 0 0 0 0 1H4.75a.75.75 0 0 0 0 1.5h.535c.156.52.372.998.64 1.413C6.509 12.313 7.402 13 8.5 13c.669 0 1.272-.26 1.767-.667a.75.75 0 0 0-.953-1.158c-.275.226-.55.325-.814.325-.42 0-.902-.264-1.315-.902a3.722 3.722 0 0 1-.31-.598H8.25a.75.75 0 0 0 0-1.5H6.521a5.854 5.854 0 0 1 0-1H8.25a.75.75 0 0 0 0-1.5H6.875Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p>Gastos</p>
          </Link>
        </div>
        <div className="px-4 my-4">
          <Link
            href={"/home/ingresos"}
            className="bg-onyx-300 hover:bg-onyx-500 py-2 px-4 rounded-full border w-full flex flex-row justify-start items-center font-bold text-lg"
          >
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
                  clipRule="evenodd"
                />
                <path d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z" />
              </svg>
            </div>
            <p>Ingresos</p>
          </Link>
        </div>
      </div>
      <div className="px-4 ">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="bg-onyx-300 hover:bg-onyx-500 py-2 px-4 rounded-full border w-full flex  justify-start items-center font-bold text-lg">
            <div className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 stroke-red-500 fill-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 8 1ZM4.11 3.05a.75.75 0 0 1 0 1.06 5.5 5.5 0 1 0 7.78 0 .75.75 0 0 1 1.06-1.06 7 7 0 1 1-9.9 0 .75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
