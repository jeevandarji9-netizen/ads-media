import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Clients",
      icon: <Users size={20} />,
      path: "/dashboard",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard",
    },
  ];

  return (
    <aside className="w-72 bg-white shadow-lg min-h-screen border-r">

      <div className="h-20 flex items-center justify-center border-b">

        <h1 className="text-2xl font-bold text-blue-600">
          Viralwala
        </h1>

      </div>

      <nav className="mt-6">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 mx-4 mb-2 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </nav>

      <div className="absolute bottom-6 left-0 w-72 px-4">

        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}
