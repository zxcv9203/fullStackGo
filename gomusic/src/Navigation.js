import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component{
	render(){
		// 메뉴를 표현할 코드
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bgsuccess fixed-top">
					<div className="container">
						<button type="button" className="navbar-brand order-1 btn btn-success"
						onclick={() =>{this.props.showModalWindow();}}>Sign in</button>
						<div className="navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<NavLink className="nav-item nav-link" to="/">Home
								</NavLink>
								<NavLink className="nav-item nav-link" to="/promos">
									Promotions
								</NavLink>
								<NavLink className="nav-item nav-link" to="/about">
									About
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}