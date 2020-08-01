import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAutheticated } from '../auth/helper';

const Signin = () => {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		error: '',
		loading: false,
		didRedirect: false
	});
	const { email, password, error, loading, didRedirect } = values;
	const { user } = isAutheticated();
	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};
	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });
		signin({ email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, loading: false });
				} else {
					authenticate(data, () => {
						setValues({
							...values,
							email: '',
							password: '',
							error: '',
							didRedirect: true
						});
					});
				}
			})
			.catch(console.log('Request Failed'));
	};

	const performedRedirect = () => {
		//TODO
		if (didRedirect) {
			if (user && user.role === 1) {
				return <Redirect to="/admin/dashboard"/>
			} else {
				return <Redirect to="/user/dashboard"/>
				
			}
		}
		if (isAutheticated()) {
			return <Redirect to="/" />;
		}
	};

	const signInForm = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
						<div className="form-group">
							<label className="">Email:</label>
							<input
								onChange={handleChange('email')}
								value={email}
								type="email"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="">Password:</label>
							<input
								onChange={handleChange('password')}
								value={password}
								type="password"
								className="form-control"
							/>
						</div>
						<button onClick={onSubmit} className="btn btn-warning btn-block">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};
	const loadingMessage = () => {
		return (
			loading && (
				<div className="alert alert-info">
					<h2>loading....</h2>
				</div>
			)
		);
	};
	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
						{error}
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="container">
			<h4 className="text-center">PhotoGraphIt</h4>
			{loadingMessage()}
			{errorMessage()}
			{signInForm()}
			{performedRedirect()}
			<p className="text-white text-center">{JSON.stringify(values)}</p>
		</div>
	);
};

export default Signin;