import { useState } from "react"
const Cat = ()=>{
    const handleclick =()=>{
        setCat({
            ...cat,
            year: cat.year + 1
        })
    }
    const [cat, setCat] = useState({
        name: "Cat",
        year: 5
    })
    return (
        <>
        <h2>{cat.name} - {cat.year}</h2>
        <button onClick={handleclick} className="btn  btn-dark mb-3">Update year</button>
        </>
    )
}
export default Cat