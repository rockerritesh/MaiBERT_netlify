import React from "react";
import {useNavigate } from "react-router-dom";

const NewsItem = (props) => {
  let {id, title, description, imageUrl, author, date,englishDescription } = props;
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to details page and pass data as state
    navigate(`/details/${encodeURIComponent(title)}`, {
      state : {
      id,
      title,
      description,
      imageUrl,
      author,
      date,
      englishDescription,
    }
    });
  };
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          backgroundColor: "var(--color-white)",
          color: "var(--color-black)",
          border: "2px solid var(--color-black)",
        }}
      >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill"
          style={{
            backgroundColor: "var(--color-cornflowerblue)",
            zIndex: "1",
            left: "90%",
          }}
        ></span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://th.bing.com/th/id/OIG4.9F3EXs056LkGaQHyeuza?pid=ImgGn"
          }
          height="200px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 43) : ""}....</h5>
          <p className="card-text">{description ? description.slice(0, 88) : ""}......</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            onClick={handleReadMore}
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
