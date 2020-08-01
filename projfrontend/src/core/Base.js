import React from 'react';
import Menu from './Menu'
const Base = ({
	title = 'My Title',
	description = 'My Description',
	className = 'p-4',
	children
}) => {
	return (
		<div>
            <Menu/>
			<div className="container-fliud">
				
				<div className={className}>{children}</div>
			</div>
            




     
            
       

       
       
        </div>
			
		
	);
};
export default Base;
