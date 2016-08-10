import React from 'react';

export class Cvv extends React.Component {
	constructor() {
		super();		
		this.state = {
			txt: ''
		}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({txt: e.target.value})
	}
	render() {
		return (
			<div>			
				<form>
			      <div className='form-group'>
			        <label>CVV</label>
			        <Widget txt={this.state.txt} update={this.update} />
			        <Widget txt={this.state.txt} update={this.update} />
			      </div>
			      <button className='btn btn-block' type='submit'>Submit</button>			      
			    </form>
			</div>    
		);
	}
}

const Widget = (props) => {
	return (
			<div>			
				<input type='password' className='error' maxLength='4' name='cvv' onChange={props.update}/>
		    	<div>{props.txt}</div>
			</div>    
		);
}