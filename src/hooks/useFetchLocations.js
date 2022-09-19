import { useEffect, useState } from 'react'
import { getLocations } from '../Api'
 
function useFetchLocations(startingIndex) {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations(startingIndex)
        .then(data => {
            setLocations([...locations, ...data.locations])
        })
        .catch((error) => {
          console.log(error)
        });
  }, [startingIndex]);
 
  return [locations, setLocations];
}

export default useFetchLocations
