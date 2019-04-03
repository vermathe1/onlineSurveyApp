import React from 'react'
import { Heading } from "../components/heading";
import { Content } from "../components/content";

export function Summarypage (props) {
	return props.summary.map(data => 
		<div>
			<Heading heading={data.question}/>
			<Content content={data.answer} />
		</div>
		)
}
