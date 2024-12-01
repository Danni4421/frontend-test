import { useSessionStore } from "@/store/useSessionStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateLayout() {
  const { user } = useSessionStore((state) => state);
  const location = useLocation();

  if (!user)
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );

  return (
    <div>
      <Outlet />
    </div>
  );
}
