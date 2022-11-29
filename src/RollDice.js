import React,{ Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component{

// Face numbers passes as default props

// A B C D
static defaultProps = {
	A_sides : ['0', '0', '4', '4', '4', '4'],
    B_sides : ['3', '3', '3', '3', '3', '3'],
    C_sides : ['2', '2', '2', '2', '6', '6'],
    D_sides : ['1', '1', '1', '5', '5', '5'],
}
constructor(props){
	super(props)
	// States
	this.state = {
        die1_sides : [],
        die2_sides : [],
        die1 : 'empty',
        die2 : 'empty',
        rolling: false
	}
	this.roll = this.roll.bind(this)
    this.reset = this.reset.bind(this)
    this.A_func = this.A_func.bind(this)
    this.B_func = this.B_func.bind(this)
    this.C_func = this.C_func.bind(this)
    this.D_func = this.D_func.bind(this)
    // console.log(this.state.die1);
}
roll(){
	// const {sides} = this.props

	this.setState({
	
	// Changing state upon click
	die1 : this.state.die1_sides[Math.floor(Math.random() * this.state.die1_sides.length)],
	die2 : this.state.die2_sides[Math.floor(Math.random() * this.state.die2_sides.length)],
	rolling:true
	})
	
	// Start timer of one sec when rolling start
	setTimeout(() => {
	
	// Set rolling to false again when time over
	this.setState({rolling:false})
	},1000)
}

A_func() {
    // console.log("CLICKED");
    // console.log(this.state);
    if (this.state.die1 === 'empty') {
        const {A_sides} = this.props
        this.setState({
            die1_sides : A_sides,
            die1 : A_sides[0],
        })
    }
    else if (this.state.die2 === 'empty') {
        const {A_sides} = this.props
        this.setState({
            die2_sides : A_sides,
            die2 : A_sides[0],
        })
    }
    else {
        console.log("Full");
    }
}
B_func() {
    // console.log("CLICKED");
    if (this.state.die1 === 'empty') {
        const {B_sides} = this.props
        this.setState({
            die1_sides : B_sides,
            die1 : B_sides[0],
        })
    }
    else if (this.state.die2 === 'empty') {
        const {B_sides} = this.props
        this.setState({
            die2_sides : B_sides,
            die2 : B_sides[0],
        })
    }
    else {
        console.log("Full");
    }
}
C_func() {
    // console.log("CLICKED");
    if (this.state.die1 === 'empty') {
        const {C_sides} = this.props
        this.setState({
            die1_sides : C_sides,
            die1 : C_sides[0],
        })
    }
    else if (this.state.die2 === 'empty') {
        const {C_sides} = this.props
        this.setState({
            die2_sides : C_sides,
            die2 : C_sides[0],
        })
    }
    else {
        console.log("Full");
    }
}
D_func() {
    // console.log("CLICKED");
    if (this.state.die1 === 'empty') {
        const {D_sides} = this.props
        this.setState({
            die1_sides : D_sides,
            die1 : D_sides[0],
        })
    }
    else if (this.state.die2 === 'empty') {
        const {D_sides} = this.props
        this.setState({
            die2_sides : D_sides,
            die2 : D_sides[0],
        })
    }
    else {
        console.log("Full");
    }
}

reset() {
    this.setState({
            die1_sides : [],
            die2_sides : [],
            die1 : 'empty',
            die2 : 'empty',
        })
}

render(){
	const handleBtn = this.state.rolling ?
					'RollDice-rolling' : ''
	const {die1, die2, rolling} = this.state
	return(
	<div className='RollDice'>
        <div className='RollDice-container'>
            <button className='Plane'><img className='image' src="img/A.png" alt="A" onClick={this.A_func} /></button>
            <button className='Plane'><img className='image' src="img/B.png" alt="B" onClick={this.B_func} /></button>
            <button className='Plane'><img className='image' src="img/C.png" alt="C" onClick={this.C_func} /></button>
            <button className='Plane'><img className='image' src="img/D.png" alt="D" onClick={this.D_func} /></button>
        </div>

		<div className='RollDice-container'>
            <Die face={die1} rolling={rolling}/>
            <Die face={die2} rolling={rolling}/>
		</div>

        <div className='RollDice-container'>
            <button className={`Roll ${handleBtn}`}
                    disabled={this.state.rolling}
                    onClick={this.roll}>
            {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
            </button>

            <button className='Reset'
                    onClick={this.reset}>
            Reset
            </button>
        </div>
        <div className='Share'>
            <div className="addthis_inline_share_toolbox"></div>
        </div>
        
	</div>
	)
}
}

export default RollDice
