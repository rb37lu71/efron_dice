import React, {Component} from 'react'
import './Die.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
render(){
	const {face, rolling} = this.props
	
	// Using font awesome icon to show
	// the exactnumber of dots
	return (
			<div>
				{/* <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die
				${rolling && 'Die-shaking'}`} /> */}
                <img className={`Die
				${rolling && 'Die-shaking'}`} alt="Die" src={`img/${face}.png`}/>
			</div >
		)
}
}

export default Die
