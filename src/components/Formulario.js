import React ,{useState}from 'react';
import Error from './Error'
import  shortid   from "shortid";
import Proptypes from 'prop-types'

const Formulario = ({guardarGasto,guardarCrearGasto}) => {
	const [nombre, guardarNombre] = useState('');
	const [cantidad, guardarCantidad] = useState(0);
	const [error,guardaError] = useState(false)

	//cuando el usuario agrega un gasto
	const agregarGasto = e => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
			guardaError(true)
			return;
		}
		guardaError(false)
		//construir gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate()
		}

		//enviar gasto al componente principal
		guardarGasto(gasto)
		guardarCrearGasto(true)

		//resetear formulario
		guardarNombre('')
		guardarCantidad(0)
	}
	return (  

		<form
			onSubmit = {agregarGasto}
		>
			<h2>Agrega tus gastor aqui</h2>
			{error ? 
				<Error mensaje="Ambos campos son obligatorio o presupuesto incorrecto" />
				:
				null
			}
			<div className="campo">
				
				<label>Nombre gastos</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Transporte"
					value={nombre}
					onChange = {e => guardarNombre(e.target.value)}
				/>
			</div>
			<div className="campo">
				<label>Cantidad gastos</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 300"
					value={cantidad}
					onChange = {e => guardarCantidad(parseInt(e.target.value,10))}
				/>
			</div>
			<input
					type="submit"
					className="button-primary u-full-width"
					value="Agregar Gasto"
					
				/>
		</form>
	);
}
Formulario.propTypes = {
	guardarGasto: Proptypes.func.isRequired,
	guardarCrearGasto: Proptypes.func.isRequired
}


export default Formulario;