import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <span>Loading ...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <span>
      User searched for {city}
      <span>
        found -
        {results?.data.map((restaurant) => (
          <span>{restaurant.restaurantName}</span>
        ))}
      </span>
    </span>
  );
};

export default SearchPage;
