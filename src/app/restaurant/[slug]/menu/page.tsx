import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/RestaurantMenu";

function MenuPage() {
  return (
    <>
      {/* NAVBAR */} {/* HEADER */}
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <RestaurantMenu />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
}

export default MenuPage;
