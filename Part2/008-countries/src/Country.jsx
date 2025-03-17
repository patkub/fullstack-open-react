const Country = ({info}) => {
    const data = info?.data;
    return (
        <>
            <h2>{data?.name?.common}</h2>
            Capital: {data?.capital[0]}<br/>
            Area: {data?.area}<br/>
            
            <h2>Languages</h2>
            <ul>
                {
                    data?.languages && Object.entries(data?.languages).map(([k, v]) => {
                        return <li key={k}>{v}</li>;
                    })
                }
            </ul>

            {<img src={data?.flags?.png}></img>}

            {/* <pre>
            {JSON.stringify(data, null, 2)}
            </pre> */}
        </>
    )
}

export default Country