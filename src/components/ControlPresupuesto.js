import React, { Fragment } from 'react';
import {revisarPresupuesto} from '../helper'
import Proptypes from 'prop-types'


const ControlPresupuesto = ({presupuesto,restante}) => {
	return ( 
		<Fragment>
			<div className="alert alert-primary">
				Presupusto  $ {presupuesto}
			</div>
			<div className={revisarPresupuesto(presupuesto,restante)}>
				Restante: $ {restante}
			</div>
		</Fragment>

	 );
}

ControlPresupuesto.propTypes = {
	presupuesto: Proptypes.number.isRequired,
	restante: Proptypes.number.isRequired
}


export default ControlPresupuesto;