/* eslint-disable react/prop-types */

function Film({
  title, year, poster,
}) {
  return (
    <section>
      <img src={poster} alt={`${title} Movie poster`} />
      <p>{title}</p>
      <p>{`Year: ${year}`}</p>
    </section>
  );
}

export default Film;
