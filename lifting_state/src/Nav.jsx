const Nav = ({pageHandler}) => {

    return (
        <nav>
            <button value="Chaos" onClick={pageHandler}>Chaos</button>
            <button value="Death" onClick={pageHandler}>Death</button>
            <button value="Order" onClick={pageHandler}>Order</button>
            <button value="Destruction" onClick={pageHandler}>Destruction</button>
        </nav>
    );
}

export default Nav;