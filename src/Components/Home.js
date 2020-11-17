import React, { useState } from "react"
import "../Styles/Home.css"
import Checker from "./Checker"

export default function Home() {
	const [input, setInput] = useState("")
	let str = input
	const text = "the quick brown fox jumps over the lazy dog"

	// useEffect(() => {
	// 	str = input
	// }, [input])

	function checkletters(key) {
		if (key.keyCode === 8) {
			str = str.slice(0, -1)
			setInput(str)
			console.log(str)
		} else if (
			((key.keyCode >= 48 && key.keyCode <= 222) || key.keyCode === 32) &&
			!(
				(key.keyCode >= 91 && key.keyCode <= 93) ||
				(key.keyCode >= 112 && key.keyCode <= 145)
			)
		) {
			setInput((str += key.key))
			console.log(str)
		}
	}

	const blockClicked = e => {
		window.addEventListener("keydown", checkletters, false)
	}
	return (
		<>
			<div className='main-container'>
				<div className='nav home text-block ' onClick={blockClicked}>
					<Checker text={text} userinput={input} />
				</div>
				<button className='button' onClick={() => setInput("")}>
					reset
				</button>
			</div>
			<div className='feeds'></div>
		</>
	)
}
