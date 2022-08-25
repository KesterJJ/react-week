const Product = (props) => {

    if (props.name.includes(props.search)) {
    return (
        <div>
            <p>Product name:</p>
            <p>{props.name}</p>
        </div>
    );
    }
};

export default Product;