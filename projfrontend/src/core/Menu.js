import React,{useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAutheticated } from '../auth/helper';
import './MenuMin.css'

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return {
			color: '#2ecc72'
		};
	} else {
		return {
			color: '#FFFFFF'
		};
	}
};
const Menu = ({ history }) => {
	
	return (
		
		<div style={{paddingBottom:"100px" ,
		borderBottom:"text-primary",
		
		}}
		className="bg-warning"
		>
	
			
			 <nav className="nav bg-warning">
                   <span id="brand">
				   <Link className="nav-link" to="/home" style={currentTab(history, '/')}>
						
						<span className="text-dark">HOME</span>

					</Link>
                  </span> 

                  <ul id="menu">
                        
							{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/dashboard" style={currentTab(history, '/user/dashboard')}>
					
						<span className="text-dark"style={{fontSize:'18px'}}>PHOTOS</span>
						
					</Link>
				</li>
				) }
				{isAutheticated()&& isAutheticated().user.role===1 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/admin/dashboard" style={currentTab(history, '/admin/dashboard')}>
						
						<span className="text-dark" style={{fontSize:'18px'}}>ADMIN DASHBOARD</span>
					</Link>
				</li>
				)}
				{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/selected" style={currentTab(history, '/user/dashboard')}>
					
						<span className="text-dark" style={{fontSize:'18px'}}>SELECTED</span>
						
					</Link>
				</li>
				) }

{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/video" style={currentTab(history, '/user/video')}>
					
						<span className="text-dark" style={{fontSize:'18px'}}>SAMPLE VIDEOS</span>
						
					</Link>
				</li>
				) }
				{isAutheticated()&& isAutheticated().user.role===1 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/addcustomer" style={currentTab(history, '/addcustomer')}>
						<span className="text-dark" style={{fontSize:'18px'}}>ADD CUSTOMER</span>
					</Link>
				</li>
				)}
				
				
               
				{isAutheticated() && (
					<li className="nav-item">
						<span
                        className="nav-link"
                        onClick={()=>{
                            signout(()=>{
                                history.push("/")
                            })

                        }}
                        >
					<span className="text-dark" style={{fontSize:'18px'}}>SIGNOUT</span>

                        </span>
					</li>
				)}
			
                        
                  </ul>

                  <div id="toggle">
                        <div className="span text-dark">menu</div>
                  </div>

            </nav>

            <div id="resize" className="bg-white">
                  <div className="close-btn text-warning">close</div>

				  <ul id="menu">
                        
						{isAutheticated()&& isAutheticated().user.role===0 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/user/dashboard" style={currentTab(history, '/user/dashboard')}>
				
					<span className="text-warning">PHOTOS</span>
					
				</Link>
			</li>
			) }
			{isAutheticated()&& isAutheticated().user.role===1 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/admin/dashboard" style={currentTab(history, '/admin/dashboard')}>
					
					<span className="text-warning">ADMIN DASHBOARD</span>
				</Link>
			</li>
			)}
			{isAutheticated()&& isAutheticated().user.role===0 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/user/selected" style={currentTab(history, '/user/dashboard')}>
				
					<span className="text-warning">SELECTED</span>
					
				</Link>
			</li>
			) }


			{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/videos" style={currentTab(history, '/user/dashboard')}>
					
						<span className="text-primary">VIDEOS</span>
						
					</Link>
				</li>
				) }

{isAutheticated()&& isAutheticated().user.role===0 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/user/video" style={currentTab(history, '/user/video')}>
				
					<span className="text-warning">SAMPLE VIDEOS</span>
					
				</Link>
			</li>
			) }

			{isAutheticated()&& isAutheticated().user.role===1 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/addcustomer" style={currentTab(history, '/addcustomer')}>
					<span className="text-warning">ADD CUSTOMER</span>
				</Link>
			</li>
			)}
			{isAutheticated()&& isAutheticated().user.role===1 &&(
				<li className="nav-item">
				<Link className="nav-link" to="/admin/addevents" style={currentTab(history, '/admin/addevents')}>
					<span className="text-warning">EVENTS</span>
				</Link>
			</li>
			)}
			
		   
			{isAutheticated() && (
				<li className="nav-item">
					<div
					className="nav-link point"
					onClick={()=>{
						signout(()=>{
							history.push("/")
						})

					}}
					>
				<span className="text-warning">SIGNOUT</span>

					</div>
				</li>
			)}
		
					
			  
                  </ul>
            </div>

		</div>
	);
};
export default withRouter(Menu);


{/*  */}