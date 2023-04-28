import { useEffect, useState } from "react"
import { LocationCard } from "../../../components/LocationCard/LocationCard"
import RickMortyApi from "../../../utils/api/rickMortyApi";


export const SearchLocationsPage = () => {

  const [locations, setLocations] = useState([])

  console.log({locations});
  useEffect(() => {
    RickMortyApi.getLocations().then((data) => setLocations(data.results))
    
  }, []);


  return (
    <div>
    {locations.map((location) => <LocationCard location={location} />)}
       
    </div>
  )
}