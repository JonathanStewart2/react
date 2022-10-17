
function Item() {

    const [item, setItem] = useState();

    const getItem = async () => {
        const res = await axios.get(url);
        setItem(res.data);
    }

    // was rendered for the first time
    // value of [item] causes component to update
    useEffect(() => {
        console.log("Loaded");
        const getItem = async () => {
            try {
            const res = await axios.get(url);
            setItem(res.data);
            } catch(err) {
            //error handling
            }
        }
         getItem();
    }, [item]);

    if (item) {
        return (
            <>
                <label htmlFor="itemName">:Item</laberl>
                <input type="text" id="itemName" value={name} onChange=(e => setItem(e.target.value))} />
                <h2>{item.name}</h2>
          
            </>
        )
    }


}


// blank array in useEffect used to trigger firsttime component is rendered
