
import { useState } from 'react';
import Product from './Product';

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
            <Product name="food" search={search} />
            <Product name="pizza" search={search} />
            <Product name="car" search={search} />
            <Product name="apple" search={search} />
            <Product name="orange" search={search} />
            <Product name="house" search={search} />
        </div>
        </>
    );


}

export default ProductTable;