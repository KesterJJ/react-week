import { useState } from 'react';


const Car = () => {


    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');

    const printValues = (e) => {
        e.preventDefault();
        console.log(brand, model, color, year);
    }

    return (
        <div>
            <div>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
            </div>
            <form onSubmit={printValues}>
                <label for="Brand">Brand:</label>
                <input type="text"
                    name="Brand"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />

                <label for="Model">Model:</label>
                <input type="text"
                    name="Model"
                    value={model}
                    onChange={e => setModel(e.target.value)} />

                <label for="Color">Color:</label>
                <input type="text"
                    name="Color"
                    value={color}
                    onChange={e => setColor(e.target.value)} />

                <label for="Year">Year:</label>
                <input type="text"
                    name="Year"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                
                <button type="submit">Submit</button>

            </form>

        </div>
    );

}


export default Car;