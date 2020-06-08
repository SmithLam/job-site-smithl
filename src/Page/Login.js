import React from 'react'
import Navigation from './components/NavigationBar'

export default function Login() {
    return (
        <div>
            <Navigation/>
            <div className="container-fluid">
		<div id="login-form" className="row login main-content text-center">
			<div className="col-md-4 text-center company__info">
				<span className="login company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 className="login company_title">Your Company Logo</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login login_form ">
				<div className="container-fluid">
					<div className="login row">
						<h2>Log In</h2>
					</div>
					<div className="login row">
						<form control="" className="login form-group">
							<div className="login row">
								<input type="text" name="username" id="username" className="login form__input" placeholder="Username"/>
							</div>
							<div className="login row">
								<span className="fa fa-lock"></span> 
								<input type="password" name="password" id="password" className="login form__input" placeholder="Password"/>
							</div>
							<div className="login row">
								<input type="checkbox" name="remember_me" id="remember_me" className="mr-2"/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div className="login row">
								<input type="submit" value="Submit" className="login btn"/>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? <a href="#">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    )
}
