// filterName state is passed from parent App

const Filter = ({ filterName, setFilterName }) => {
    
    const handleFilterChange = (event) => {
        setFilterName(event.target.value);
    };

    return (
        <>
            <div>
                Filter names shown with:
                <input value={filterName} onChange={handleFilterChange} />
            </div>
        </>
    )
}

export default Filter