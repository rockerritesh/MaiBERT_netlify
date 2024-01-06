import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import App from "./App";
import News from "./component/News/News";
import NewsItem from "./component/News/NewsItem";



function MainApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsitem" element={<NewsItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainApp;