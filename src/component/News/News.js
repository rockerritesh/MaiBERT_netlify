import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NewsNavbar from "../Navbar/NewsNavbar";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import localForage from 'localforage';


const News = (props) => {
  const [loading, setLoading] = useState(true);
  const [cachedData, setCachedData] = useState([]);

  useEffect(() => {
    // Check if cached data is still valid before fetching new data
    fetchDataFromCache();
  }, [props.cacheNews, props.cacheTime, props.label]);

  const fetchDataFromCache = async () => {
    try {
      const cachedJson = await localForage.getItem(props.cacheNews);
      const cachedTime = await localForage.getItem(props.cacheTime);

      if (
        cachedJson &&
        cachedTime &&
        Date.now() - parseInt(cachedTime, 10) < 1*60*60*1000
      ) {
        // Use the cached data if it's not expired
        setCachedData(JSON.parse(cachedJson));
        // setLoading(false); // ehh
        fetchDataFromApi(); // ehh

      } else {
        // Fetch new data if cached data is expired
        fetchDataFromApi();
      }
    } catch (error) {
      console.error("Error fetching data from cache:", error);
      // Fetch new data if there's an error retrieving cached data
      fetchDataFromApi();
    }
  };

  const fetchDataFromApi = async () => {
    const url =
      "https://raw.githubusercontent.com/rockerritesh/maithili-news-gnews/main/docs/filename.json";
    setLoading(true);

    let responseData = await fetch(url);
    let parsedData = await responseData.json();
    // Optionally filter the data based on the label
    const filteredData =
      props.label === "any"
        ? parsedData
        : parsedData.filter((item) => item.label === props.label);

    const reversedData = filteredData.reverse().slice(0, 200);
    setCachedData(reversedData);

    try {
      let responseData = await fetch(url);
      let parsedData = await responseData.json();
      // Optionally filter the data based on the label
      const filteredData =
        props.label === "any"
          ? parsedData
          : parsedData.filter((item) => item.label === props.label);

      const reversedData = filteredData.reverse();
      setCachedData(reversedData);  // ehhhh

      // Store the cached data and timestamp in IndexedDB using localForage
      await localForage.setItem(props.cacheNews, JSON.stringify(reversedData)); //ehh 
      await localForage.setItem(props.cacheTime, Date.now().toString());        // ehh
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const selectImageUrl = (images) => {
    if (!images) {
      // Return a default URL or handle the case when 'images' is null
      return 'https://th.bing.com/th/id/OIG4.9F3EXs056LkGaQHyeuza?pid=ImgGn';
    }
  
    // Extract URLs from the string or use an empty array if it's already an array
    const imageUrls = Array.isArray(images)
      ? images
      : images
          .replace(/[{}']/g, '') // Remove curly braces and single quotes
          .split(', '); // Convert the string into an array
  
    // Choose any URL from the middle of the array, or use a default URL if the array is empty
    return imageUrls.length > 0 ? imageUrls[imageUrls.length/2] : 'https://th.bing.com/th/id/OIG4.9F3EXs056LkGaQHyeuza?pid=ImgGn';
  };
  
  return (
    <>
      <div
        className="newspage"
        style={{ backgroundColor: "var(--color-white)" }}
      >
        <NewsNavbar />
        {/* <Newshero/>
    <CatNews/>
    <MainNews/> */}
        {console.log(cachedData)}
        <div className="container">
          <h1
            className="text-center"
            style={{ marginTop: "2rem", color: "var(--color-black)" }}
          >
            Latest News {props.label==="any"?"":`- ${props.label}`}
          </h1>
          {loading && <Spinner />}
          <div className="row">
            {!loading && cachedData && cachedData.length > 0 ? (
              cachedData.map((element, index) => (
                <div className="col-md-4 my-2" key={index}>
                  <NewsItem
                    id ={index}
                    title={element.title}
                    description={
                      element.translated
                    }
                    englishDescription={element.full_article}
                    imageUrl={selectImageUrl(element.images)}
                    author={element["publisher.title"]}
                    date={element["published date"]}
                  />
                </div>
              ))
            ) : (
              <div className="col-md-12 text-center">
                <p>Sorry, No News available right now for {props.label} Category.</p>
              </div>
            )}
          </div>
          {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page > Math.ceil(totalResults / props.pageSize) - 1}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default News;
