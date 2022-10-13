const Products = (props) => {
    
    // const item = {
    //     name: "Coke",
    //     price: 2,
    //     descript: "A drink"
    // }
    return (
        <>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <p>Description: {props.descript}</p>
        </>

    )
}

export default Products;

//to send info to a further child prop: <{Child ..oProps}/>