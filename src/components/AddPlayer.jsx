const AddPlayer = (props) => {


    return (
        <form onSubmit={props.submitHandler}>
        <input type="text" placeholder="name" onChange={props.newPlayer}/>
            <button type="submit">Add Player</button>
        </form>
    );
}

export default AddPlayer;