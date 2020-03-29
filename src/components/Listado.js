import React from 'react';
import Gasto from './Gasto'
import Proptypes from 'prop-types'

const Listado = ({gastos}) => (
	<div className="gastos-realizados">
		<h2>Listado</h2>
			{gastos.map(gasto =>(
				 <Gasto
				 	 key  = {gasto.id}
					 gasto= {gasto}
				 />
			)) 


			}

	</div>

);
 
Listado.propTypes = {
	gastos: Proptypes.array.isRequired
}

export default Listado;