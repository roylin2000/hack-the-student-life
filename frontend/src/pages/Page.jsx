import { Outlet } from "react-router-dom";

export function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="container mt-6 flex w-1/2 flex flex-col justify-between">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
}

export default Page;
