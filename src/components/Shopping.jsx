import { useState } from "react";

const Shopping = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [count, setCount] = useState(0);

    const addItem = event => {
        event.preventDefault();
        setItems([...items, { id: count, name: itemName }]);
        setItemName("");
        setCount(count => count + 1);
    }


    return (
        <>
            <form onSubmit={addItem}>
                <input type="text" name="Item"
                    value={itemName}
                    onChange={(e) => { setItemName(e.target.value) }}
                    placeholder="Enter an item" />
                <button type="submit">Add </button>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.id + " " + item.name} </li>
                ))}
            </ul>
        </>
    );
}
export default Shopping;