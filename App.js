import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

class App extends Component {
	constructor(){
		super()
		this.state = {
			dropDownVisible: false,
		}
	}

toggleDropDown = () => {
	this.setState({ 
		dropDownVisible: !this.state.dropDownVisible
	 })
}

render(){
  return (
    <div className="App">
    <section class="header">

      <div className='hedNavContainer'>

          <nav className='headNav' >


          <div className='hiddenNav'>
              <div className='logo' />

              { this.state.dropDownVisible ? 
            (
              <div className='navButt'>
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTRACT</span>
              </div>
            ) 
            : null }

          </div>

              <div className='navigation'>
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTRACT</span>
              </div>

              <div className='dropDown' onClick={this.toggleDropDown} >Menu  &equiv;</div>
         

          </nav>

      </div>

      <welcome className='welcome'>
        <div className="greet">Welcome To Our Studio!</div>
        <div className="meet">IT'S NICE TO MEET YOU</div>
        <div className="butt">TELL ME MORE</div>
      </welcome>

    </section>

    <section>
      <div className='servicesHead'>
        <h1>SERVICES</h1>
        <h6>we do stuff and things the bestest</h6>
      </div>

    <div className="circles" >
      
      <div>
      <div className="circle" >&#9000;</div>
      <h1>E-Commerce</h1>
      <p> Squid fashion axe humblebrag typewriter jean shorts. 
        Vape ennui vexillologist tofu activated charcoal chillwave 
        next level raw denim +1 PBR&B tumeric fam wolf. </p>
      </div>
      
      <div>
      <div className="circle" >&#9742;</div>
      <h1>Responsive Design</h1>
      <p> Portland palo santo retro twee hell of. 
        Vegan quinoa mumblecore put a bird on it celiac paleo, 
        umami raw denim activated charcoal pop-up edison bulb 
        you probably haven't heard of them cold-pressed gochujang. </p>
      </div>

      <div>
      <div className="circle" >&#9760;</div>
      <h1>Web Security</h1>
      <p> Cardigan slow-carb readymade meditation blog, shaman austin franzen wolf. 
        Everyday carry meh brunch PBR&B poke messenger bag raclette pickled butcher tofu locavore gentrify.  </p>
      </div>


    </div>



    </section>

    </div>
  );
}
}

export default App;
