import React from 'react';

export class CardForm extends React.Component {

	render() {
		return (
			<div>
			    <form>
			      <div className='form-group'>
			        <label>Card Number</label>
			        <input type='text' onChange={this.onCartaoChange}/>
			        
			      </div>

			      <div className='row'>
			        <div className='form-group col'>
			          <label>Val</label>
			          <input type='text' />
			        </div>

			        <div className='form-group col'>
			          <label>CVV</label>
			          <input type='password' maxLength='4' onChange={this.onCartaoChange} />
			          
			        </div>

			      </div>

			      <div className='row'>
			        <a href='#' className='btn btn-back col'>Back</a>
			        <button type='submit' className='btn col' onClick={this.onSubmit}>Submit</button>
			      </div>

			    </form>				 
			</div>    
		);
	}
}
