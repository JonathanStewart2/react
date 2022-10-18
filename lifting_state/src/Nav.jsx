const Nav = ({pageHandler}) => {

    return (
        <nav>
            <button value="Chaos" onClick={pageHandler}>Chaos</button>
            <button value="Death" onClick={pageHandler}>Death</button>
        </nav>
    );
}

export default Nav;