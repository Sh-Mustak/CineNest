import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useSearch(query);

  return (
    <>
      <DesktopSearch
        query={query}
        setQuery={setQuery}
        data={data}
        loading={loading}
      />
      
      <MobileSearch
        query={query}
        setQuery={setQuery}
        data={data}
        loading={loading}
      />
    </>
  );
}