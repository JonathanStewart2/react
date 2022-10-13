const ComponentWithProps = (props) => {

    return (
        <h1>Hello, {props.name}</h1>
    );
}

const PropComp = () => {
    return (
        <>
        <ComponentWithProps name="Anomander Rake"/>
        <ComponentWithProps name="Daseem Ultor"/>
        </>
    )
}

export default PropComp;