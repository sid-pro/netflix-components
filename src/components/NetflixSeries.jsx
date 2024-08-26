// create components to reuse it

// Vite automatically serves any static assets placed in the public folder at the root of your project.
// This folder is meant for static files that you want to be served as-is without processing by Vite’s build system.
// Files inside the public folder are served at the root level of the base URL.
// For example, if you have an image located at public/images/stranger-thing.png,
//  it can be accessed via http://localhost:5173/images/stranger-thing.png when running the development server.

import seriesData from "../api/series.json";
import { SeriesCards } from "./SeriesCards";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {/* need to return each list from here we can use return staement or use () in fat arror function to return */}

      {/* {seriesData.map((series) => {
        // the series is called props
        return <SeriesCards key={series.id} series={series} />
      })} */}

      {/* // or we can write like this without return staement because there is only one line in fat arrow function */}

      {seriesData.map((series) =>  <SeriesCards key={series.id} series={series} /> )}
    </ul>
  );
};

export default NetflixSeries;

//passing data in components is called props and always need to pass key with it
