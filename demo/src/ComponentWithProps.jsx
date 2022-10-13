const ComponentWithProps = (props) => {

    return (
        <h1>Hello, {props.name} {props.name2}</h1>
    );
}

const PropComp = () => {
    return (
        <>
        <ComponentWithProps name="Anomander Rake"/>
        <ComponentWithProps name2="Daseem Ultor"/>
        </>
    )
}

export default PropComp;