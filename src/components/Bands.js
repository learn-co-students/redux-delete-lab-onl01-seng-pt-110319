import React from 'react';
import Band from './Band';

const Bands = (props) => {

	const bands = props.bands.map(band => 
		<Band key={band.id} {...band} delete={props.delete}/>
	)

	return(
		<div>
		Bands Component
		{bands}
		</div>
	)
	

}

export default Bands