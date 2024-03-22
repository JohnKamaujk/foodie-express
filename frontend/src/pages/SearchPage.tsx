import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();

  const { results, isLoading } = useSearchRestaurants(city);
  
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });

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
