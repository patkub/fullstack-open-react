const Person = ({id, name, phoneNumber, handleDelete}) => {
    return (
        <>
            <p>{name} {phoneNumber} <button onClick={(e) => handleDelete(e, id)}>delete</button></p>
        </>
    )
}

export default Person