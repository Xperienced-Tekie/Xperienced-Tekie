import "./SideBar.css";
import Link from "next/link";

const MobileBottomBar = ({ onClick }) => {
  return (
    <aside className="w-full fixed bg-blue-950 text-white flex h-20 items-start pt-2 justify-evenly">
      <div onClick={() => onClick("project")} className="flex cursor-pointer">
        <svg
          width="20"
          height="21"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06998 7.48658C9.47678 7.07978 9.47678 6.42024 9.06998 6.01344C8.66319 5.60664 8.00364 5.60664 7.59685 6.01344L1.34685 12.2634C0.940049 12.6702 0.940049 13.3298 1.34685 13.7366L7.59685 19.9866C8.00364 20.3934 8.66319 20.3934 9.06998 19.9866C9.47678 19.5798 9.47678 18.9202 9.06998 18.5134L3.55655 13L9.06998 7.48658Z"
            fill="#ffffff"
          />
          <path
            d="M17.4033 6.01344C16.9965 5.60664 16.337 5.60664 15.9302 6.01344C15.5234 6.42024 15.5234 7.07978 15.9302 7.48658L21.4436 13L15.9302 18.5134C15.5234 18.9202 15.5234 19.5798 15.9302 19.9866C16.337 20.3934 16.9965 20.3934 17.4033 19.9866L23.6533 13.7366C24.0601 13.3298 24.0601 12.6702 23.6533 12.2634L17.4033 6.01344Z"
            fill="#ffffff"
          />
        </svg>
        <p className="text-sm">Projects</p>
      </div>
      <div
        onClick={() => onClick("payment")}
        className="cursor-pointer sidebar-2"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.75C0 5.02411 1.39911 3.625 3.125 3.625H21.875C23.6009 3.625 25 5.02411 25 6.75V19.25C25 20.9759 23.6009 22.375 21.875 22.375H3.125C1.39911 22.375 0 20.9759 0 19.25V6.75ZM2.08333 6.75C2.08333 6.1747 2.5497 5.70833 3.125 5.70833H21.875C22.4503 5.70833 22.9167 6.1747 22.9167 6.75V9.875H2.08333V6.75ZM22.9167 11.9583V19.25C22.9167 19.8253 22.4503 20.2917 21.875 20.2917H3.125C2.5497 20.2917 2.08333 19.8253 2.08333 19.25V11.9583H22.9167Z"
            fill="white"
          />
        </svg>
        <p className="text-sm">Payments</p>
      </div>

      <div
        onClick={() => onClick("certificate")}
        className="sidebar-3 cursor-pointer"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5416 3.62504C13.5416 3.04974 13.0752 2.58337 12.4999 2.58337C11.9246 2.58337 11.4583 3.04974 11.4583 3.62504V13.6102L8.02815 10.1801C7.62136 9.77334 6.96181 9.77334 6.55502 10.1801C6.14822 10.5869 6.14822 11.2465 6.55502 11.6533L11.7633 16.8616C12.1701 17.2684 12.8297 17.2684 13.2365 16.8616L18.4448 11.6533C18.8516 11.2465 18.8516 10.5869 18.4448 10.1801C18.038 9.77334 17.3785 9.77334 16.9717 10.1801L13.5416 13.6102V3.62504Z"
            fill="white"
          />
          <path
            d="M3.12492 15.0834C3.70022 15.0834 4.16659 15.5497 4.16659 16.125V20.2917C4.16659 20.568 4.27633 20.8329 4.47168 21.0283C4.66703 21.2236 4.93199 21.3334 5.20825 21.3334H19.7916C20.0679 21.3334 20.3328 21.2236 20.5282 21.0283C20.7235 20.8329 20.8333 20.568 20.8333 20.2917V16.125C20.8333 15.5497 21.2996 15.0834 21.8749 15.0834C22.4502 15.0834 22.9166 15.5497 22.9166 16.125V20.2917C22.9166 21.1205 22.5873 21.9154 22.0013 22.5014C21.4152 23.0875 20.6204 23.4167 19.7916 23.4167H5.20825C4.37945 23.4167 3.58459 23.0875 2.99854 22.5014C2.41249 21.9154 2.08325 21.1205 2.08325 20.2917V16.125C2.08325 15.5497 2.54962 15.0834 3.12492 15.0834Z"
            fill="white"
          />
        </svg>
        <p className="text-sm">Certificate</p>
      </div>
    </aside>
  );
};

export default MobileBottomBar;