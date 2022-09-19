import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from 'react';
import useFetchLocations from '../../hooks/useFetchLocations';
import Card from '../Card/Card';

function Dashboard() {

  const [hasMore, setHasMore] = useState(true);
  const [startingIndex, setStartingIndex] = useState(0);
  const [locations, setLocations] = useFetchLocations(startingIndex);

  const fetchMoreData = () => {
    if (locations.length >= 60) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setStartingIndex(startingIndex+3);
  };

  return (
    <div>
      <h1 class="font-medium leading-tight text-center text-5xl mt-0 mb-2 text-black-600">Confidence Locations</h1>
      <InfiniteScroll
          dataLength={locations.length} 
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
              <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
              </p>
          }>
      {locations.map((currentLocation) => (
          <Card locationData={currentLocation}/>
      ))}
      </InfiniteScroll>
    </div>
  )
}

export default Dashboard
