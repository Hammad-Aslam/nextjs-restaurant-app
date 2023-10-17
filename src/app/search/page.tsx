import SearchHeader from "./components/SearchHeader";
import SearchSideBar from "./components/SearchSideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";

function SearchPage() {
  return (
    <>
      {/* HEADER */}
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CAR */}
          <SearchRestaurantCard />
          {/* RESAURANT CAR */}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
