import React, { Component } from 'react';
import bg_img from './images/bg.png';
import './styles/App.css';
import CountdownContainer from './containers/CountdownContainer';
import ButtonContainer from './containers/ButtonContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<div className="part">
						<div className="wrap">
							<h1 className="App-title">Time left</h1>
							<CountdownContainer />
							<p>
								I'm done putzing around. I'm ready to let the
								data guide my sales and have MerchLab 10X my
								print-on-demand empire.
							</p>
							<ButtonContainer />
						</div>
					</div>
					<div className="part">
						<div className="image-container">
							<img src={bg_img} alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
