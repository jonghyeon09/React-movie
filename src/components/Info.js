import styles from "./Info.module.css";

function Info({
  background_image_original,
  medium_cover_image,
  url,
  title_long,
  rating,
  runtime,
  genres,
  download_count,
}) {
  return (
    <div>
      <img className={styles.bg} src={background_image_original} />
      <div className={styles.show}>
        <img className={styles.img} src={medium_cover_image} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>
            <a href={url} target="_blank">
              {title_long}
            </a>
          </h1>
          <ul>
            <li key={rating}>Rating {rating}</li>
            <li key={runtime}>Runtime {runtime}</li>
            <li key={download_count}>Download {download_count}</li>
            <li>
              Genres
              <ul>
                {genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
