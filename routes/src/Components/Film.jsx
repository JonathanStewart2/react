const Film = ({ title, year, poster }) => {
    return (
    
      <section>
        <img src={poster} alt="Film image" />
        <p> {title} </p>
        <p> {`Year: ${year}`} </p>
      </section>
      
    );
  }
  
  export default Film;