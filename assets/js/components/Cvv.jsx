import React from 'react';
import { Hint } from './Hint.jsx';

export class Cvv extends React.Component {
	render() {
		return (
			<div>			
				<form>
			      <div className='form-group'>
			        <label>CVV</label>
			        <input type='password' className='error' maxLength='4' name='cvv' />
			        <Hint />
			        <span className='error'>error</span>
			      </div>

			      <button className='btn btn-block' type='submit'>Submit</button>
			      
			    </form>
			</div>    
		);
	}
}
