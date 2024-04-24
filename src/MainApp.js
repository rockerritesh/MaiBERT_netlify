import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import App from "./App";
import News from "./component/News/News";
import NewsDesc from "./component/News/NewsDesc";



function MainApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/news" element={<News cacheNews="cachedTop" label="any" cacheTime="top" />} />
          <Route path="/politics" element={<News cacheNews="cachedpolitics" label="Politics" cacheTime="politics" />} />
          <Route path="/sports" element={<News cacheNews="cachedsports" label="Sports" cacheTime="sports" />} />
          <Route path="/economy" element={<News cacheNews="economyNews" label="Economy" cacheTime="economyTime" />} />
          <Route path="/literature" element={<News cacheNews="literatureNews" label="Literature" cacheTime="literatureTime" />} />
          <Route path="/entertainment" element={<News cacheNews="entertainmentNews" label="Entertainment" cacheTime="entertainmentTime" />} />
          <Route path="/opinion" element={<News cacheNews="opinionNews" label="Opinion" cacheTime="opinionTime" />} />
          <Route path="/edutech" element={<News cacheNews="edutechNews" label="Edutech" cacheTime="edutechTime" />} />
          <Route path="/culture" element={<News cacheNews="cultureNews" label="Culture" cacheTime="cultureTime" />} />
          <Route path="/health" element={<News cacheNews="healthNews" label="Health" cacheTime="healthTime" />} />
          <Route path="/interview" element={<News cacheNews="interviewNews" label="Interview" cacheTime="interviewTime" />} />
          <Route path="/details/:title" element={<NewsDesc />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainApp;