import "./style.css"

function FruitList ({item, setFruits}) {

    function filteredRedFruits () {
        setFruits(item.filter((item) => item.color === "red"))
    }

    const totalPrice = item.reduce((acc, item) => item.price + acc, 0)

    return (
        <>  
            <span className="price">Preço Total = {totalPrice}</span>
            <ul>
                {item.map((item, index) => <li key = {index}>{item.name}</li>)}
            </ul>
            <button className="btn" onClick={filteredRedFruits}>Mostrar frutas vermelhas</button>
        </>
    )


}

export default FruitList