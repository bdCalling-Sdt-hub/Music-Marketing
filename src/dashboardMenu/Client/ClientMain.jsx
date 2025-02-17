import { Outlet } from "react-router-dom";
import Sidebar from "./Header/Sidebar";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
const ClientMain = () => {
    return (
        <div className="flex min-h-screen gap-5">
            <Link target="_blank" to={'https://mail.google.com/mail/u/0/?fs=1&to=nimurnerob404@gmail.com&tf=cm'} className="fixed right-3 bottom-3 cursor-pointer">
                <div className="relative">
                    {/* Ping Animation */}
                    <span className="absolute -inset-1 bg-blue-600 rounded-full w-16 h-16 animate-ping opacity-75"></span>

                    {/* Email Icon */}
                    <img className="relative w-16" src="/email.webp" alt="Email Icon" />

                </div>
                <h2 className="font-semibold bg-black text-white p-1 rounded-lg text-xs text-center mt-1">Support</h2>
            </Link>
            {/* Sidebar */}
            <div >
                <div className=" bg-white shadow-md h-full">
                    <Sidebar />
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <div className="bg-primary px-4">
                    <Header />
                </div>

                {/* Page Content */}
                <div className=" min-h-screen mt-5 pr-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ClientMain;
