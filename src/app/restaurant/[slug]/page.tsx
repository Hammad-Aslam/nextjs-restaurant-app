import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import React from "react";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantNavBar from "./components/RestaurantNavBar";
import RestaurantTitle from "./components/RestaurantTitle";
import RestaurantRatings from "./components/RestaurantRatings";
import RestaurantDescription from "./components/RestaurantDescription";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews";
import RestaurantReservation from "./components/RestaurantReservation";

function RestaurantPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */} {/* HEADER */}
        <RestaurantHeader />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavBar />
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <RestaurantTitle />
            {/* TITLE */} {/* RATING */}
            <RestaurantRatings />
            {/* RATING */} {/* DESCRIPTION */}
            <RestaurantDescription />
            {/* DESCRIPTION */} {/* IMAGES */}
            <RestaurantImages />
            {/* IMAGES */} {/* REVIEWS */}
            <RestaurantReviews />
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <RestaurantReservation />
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}

export default RestaurantPage;
