const Film = ({ title, year, poster }) => {
    return (
      <>
        <img src={poster} alt="Film image" />
        <p> {title} </p>
        <p> {`Year: ${year}`} </p>
      </>
    );
  }
  
  export default Film;