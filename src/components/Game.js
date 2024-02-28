import React from 'react';
export const Game = ({ questions, step, question, onClickVariant }) => {
	const percentage = Math.round((step / questions.length) * 100);
	console.log(percentage);
	return (
		<>
			<div className='progress'>
				<div style={{ width: `${percentage}%` }} className='progress__inner'></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, variant) => (
					<li onClick={() => onClickVariant(variant)} key={text}>
						{text}
					</li>
				))}
			</ul>
		</>
	);
};
