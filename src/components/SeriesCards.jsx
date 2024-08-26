
export const SeriesCards = (props) => {
  // desctructure props
  const { series } = props;
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    series;

  // whenever write condition in JSX use ``
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${
      rating > 8.5 ? "rgb(36, 231, 36)" : "rgb(227, 227, 29)"
    }`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const ratingClass = rating > 8.5 ? "super_hit" : "average";
  return (
    // key is just like an index of that array which is always unique for each Element of array
    <li key={id} className="card">
      <div>
        <img src={img_url} alt={img_url} width="40%" height="40%" />
      </div>

      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>
          {/* to give two className to same tag use template literal */}
          Rating:{" "}
          {/* <span
            className={`rating_common ${
              rating > 8.5 ? "super_hit" : "average"
            }`}
          >
            {rating}
          </span> */}
          {/* or */}
          <span className={`rating_common ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast : {props.series.cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch now</button>
        </a>
      </div>
    </li>
  );
};
