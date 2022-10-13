const PowerProps = (props) =>{
    let x = props.num*props.num;

    return (
        <>
        <p>{props.num} multiplied by itself is:</p>
        <p>{x}</p>
        </>
    )
}

export default PowerProps
