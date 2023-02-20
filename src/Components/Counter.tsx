import { useState } from "react"

function Counter(){
	const gifts = ["Logitech G402 Pro", "Mointor LE 34'", "CPU i9"]
	const [gift, setGift] = useState("")
	const random = ()=>{
		const index = Math.floor(Math.random()*gifts.length)
		setGift(gifts[index])
	}
return(
	<>
	<div>{gift||"Chưa có phần thưởng"}</div>
	<button onClick={random} className="px-3 py-2 border border-gray-400 rounded-lg" >Quay phần thưởng</button>
	</>
	
)
}
export default Counter