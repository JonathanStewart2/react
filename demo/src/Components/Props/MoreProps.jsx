const generateNum = (num) => {
    let output = []

    for (let i = 0; i < num; i++){
        output.push(<tr key={i}/>);
    }
    return output    
}

const main = (props) => {
    //let num = props.num;
    return(
    <table>{generateNum(props.num).key}</table>
    )
}

export default main;