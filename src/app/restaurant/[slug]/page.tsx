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
    <>
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
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
      {/* RESERVATION
    CARD PORTION */}
    </>
  );
}

export default RestaurantPage;
