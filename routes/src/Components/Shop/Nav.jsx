function Nav({ pageHandler }) {
  return (
    <nav>
      <button type="button" value="Chaos" onClick={pageHandler}>Chaos</button>
      <button type="button" value="Death" onClick={pageHandler}>Death</button>
      <button type="button" value="Order" onClick={pageHandler}>Order</button>
      <button type="button" value="Destruction" onClick={pageHandler}>Destruction</button>
    </nav>
  );
}

export default Nav;
