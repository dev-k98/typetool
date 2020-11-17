import React from "react"

export default function Checker({ text, userinput }) {
	let mtext = text.split("")
	return (
		<div>
			{mtext.map((l, i) => {
				let color = ""
				if (i < userinput.length)
					color = userinput[i] === l ? "correct" : "incorrect"

				return (
					<span key={i} className={color}>
						{l}
					</span>
				)
			})}
		</div>
	)
}
