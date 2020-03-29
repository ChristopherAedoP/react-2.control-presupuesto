import React, { Fragment ,useState } from 'react';
import Error from './Error'
import Proptypes from 'prop-types'



const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

	const [cantidad, guardarCantidad] = useState(0)
	const [error,guardaError] = useState(false)

	//funcion que lee presupuesto
	const definirPresupuesto = e => {
		guardarCantidad(parseInt(e.target.value))
	}
	//submit graba presupuesto
	const agregarPresupuesto = e => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad)){
			guardaError(true)
			return;
		}

		//si pasa validacion
		guardaError(false)
		guardarPresupuesto(cantidad)
		guardarRestante(cantidad)
		actualizarPregunta(false)
	}
	return ( 
		<Fragment>
			<h2>Ingresar tu presupuesto</h2>
			{error ? 
				<Error mensaje="El presupuesto es Incorrecto" />
				:
				null
			}
			
			<form>
				<input
					type="number"
					className = "u-full-width"
					placeholder="Coloca tu presupuesto"
					onChange={definirPresupuesto}
				/>
				<input
					type="submit"
					className = "button-primary u-full-width"
					value="Definir presupuesto"
					onClick={agregarPresupuesto}
				/>
			</form>
		</Fragment>
	 );
}
 
Pregunta.propTypes = {
	guardarPresupuesto: Proptypes.func.isRequired,
	guardarRestante: Proptypes.func.isRequired,
	actualizarPregunta: Proptypes.func.isRequired
}

export default Pregunta;