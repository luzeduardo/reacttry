import React from 'react';
import { CardForm } from './CardForm.jsx';

export class NewCard extends React.Component {
	render() {
		return (
			<div>
				<main>
				  <div className="container">
				    <CardForm />
				  </div>
				</main>				
			</div>    
		);
	}
}
