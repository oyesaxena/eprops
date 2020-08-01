import React, { useState } from 'react';
import Base from '../core/Base';
import {Link, Redirect} from 'react-router-dom';
import { signup } from '../auth/helper';
import AWS from './AWS'
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const Signup = () => {
	

	const [ values, setValues ] = useState({
		name: '',
		email: '',
        password: '',
        title:'',
        status:'',
		error: '',
		success: false
	});
	
	

	const { name, email, password,title,status, error, success } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, password,title,status })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					
					setValues({
						...values,
						name: '',
						email: '',
                        password: '',
                        title:'',
                        status:'',
						error: '',
						success: true
					});
				}
			})
			.catch(console.log('ERROR IN SIGNUP'));
	};

	const signUpForm = () => {
		return (
			<div className="row">
               
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
                       <div className="row">
                           <div className="col-4">
                          
                          
                           </div>
                           <div className="col">
                           <h4 className="">Add Customer:</h4>
                           </div>
                           
                       </div>
						<div className="form-group">
							<label className="">Name</label>
							<input type="text" className="form-control" onChange={handleChange('name')} value={name} />
						</div>
						<div className="form-group">
							<label className="">Email</label>
							<input
								type="email"
								onChange={handleChange('email')}
								className="form-control"
								value={email}
							/>
						</div>
						<div className="form-group">
							<label className="">Password</label>
							<input
								type="password"
								onChange={handleChange('password')}
								className="form-control"
								value={password}
							/>
						</div>
                        <div className="form-group">
							<label className="">Title</label>
							<input
								type="text"
								onChange={handleChange('title')}
								className="form-control"
								value={title}
							/>
						</div>
                        <div className="form-group">
							<label className="">Status</label>
							<input
								type="text"
								onChange={handleChange('status')}
								className="form-control"
								value={status}
							/>
						</div>
                        <div>
                        <label className="">Upload Photos</label>
                        </div>
                        <div className="form-group">

                        <div class="input-group">
                       
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
 
    <AWS />
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>

                        </div>
                       
						<button onClick={onSubmit} className="btn btn-primary btn-block">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	 const successMessage = () => {
	return (
    //         <div className="row">
    //         <div className="col-md-6 offset-sm-3 text-left">
    //     <div className="alert alert-success" style={{ display: success ? '' : 'none' }} >
    //             New Account was created successfully.Please {" "}
    //         </div>
    //         </div>
	//         </div>
	
	<div className="row">
	<div className="col-md-6 offset-sm-3 text-left">
<div className="alert alert-success" style={{ display: success ? '' : 'none' }} >
	  "Customer added successfully!"
	</div>
	</div>
	</div>)
     };
    const errorMessage = () => {
		return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >
              {error}
            </div>
            </div>
            </div>
            )
	};
	return (
		<Base title="Signup page" description="page for user to signup">
            
           
             {successMessage()} 
            {errorMessage()}
			{signUpForm()}
			<p className="text-white text-center">{JSON.stringify(values)}</p>
		</Base>
	);
};

export default Signup;
