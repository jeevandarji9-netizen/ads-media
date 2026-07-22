import { Bell, Search, Menu, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <button className="lg:hidden">
          <Menu size={24} />
        </button>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

      </div>

      <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-96">

        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search Client..."
          className="bg-transparent outline-none ml-2 w-full"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-2">

          <UserCircle size={38} className="text-blue-600" />

          <div className="hidden md:block">

            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
