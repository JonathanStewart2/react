const Products = (props) => {
    
    return (
        <>
        <h1>Name: {props.name}</h1>
        <p>Price: {props.price}</p>
        <p>Description: {props.descript}</p>
        </>

    )
}

export default Products;

//to send info to a further child prop: <{Child ...Props}/>