import RestaurantHeader from "./components/RestaurantHeader";

function Restaurantlayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <RestaurantHeader />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}

export default Restaurantlayout;
