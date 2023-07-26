import { Link, Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Outlet />
    </div>
  );
}
