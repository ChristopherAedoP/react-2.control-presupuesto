import React from 'react';
import Proptypes from 'prop-types'

const Gasto = ({gasto}) => (
	<li className="gastos">
		<p>{gasto.nombre}
		
			<span className="gasto">$ {gasto.cantidad}</span>
		</p>
	</li>

);
 
Gasto.propTypes = {
	gasto: Proptypes.object.isRequired
}
export default Gasto;