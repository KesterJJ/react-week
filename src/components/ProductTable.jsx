
import { useState } from 'react';

const ProductTable = () => {

    const [search, setSearch] = useState('');

    return (
        <>
        <h3>Product search: </h3>
        <input type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}></input>
        <div>
            <Product name="food" />
            <Product name="pizza" />
            <Product name="car" />
            <Product name="apple" />
            <Product name="orange" />
            <Product name="house" />
        </div>
        </>
    );


}

export default ProductTable;