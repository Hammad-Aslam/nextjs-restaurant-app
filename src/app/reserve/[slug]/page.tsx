import React from "react";
import ReserveHeader from "./components/ReserveHeader";
import ReserveForm from "./components/ReserveForm";

export function generateMetadata({ params }: any) {
  return {
    title: "Reserve Page | Restaurant App",
  };
}
function ReservePage() {
  return (
    <>
      {/* NAVBAR END */}
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <ReserveHeader />
          {/* HEADER */} {/* FORM */}
          <ReserveForm />
        </div>
      </div>
    </>
  );
}

export default ReservePage;
