import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {
	const { active, setActive, handleCheckbox } = useContext(PokemonContext);

	return (
		<div className={`cursor-pointer flex justify-content fixed top-0 w-[300px] h-full bg-[#f2f2f2] text-[#555555] pt-[140px] px-4 transition-all ${active ? 'left-0' : '-left-[300px]'}`}>
			<div className='w-full flex flex-col gap-4'>
				<div className="w-full flex items-center justify-between">
					<span>Tipo</span>
					<span className='pointer' onClick={() => setActive(!active)}>X</span>
				</div>

				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='grass'
						id='grass'
					/>
					<label htmlFor='grass'>Planta</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fire'
						id='fire'
					/>
					<label htmlFor='fire'>Fuego</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='bug'
						id='bug'
					/>
					<label htmlFor='bug'>Bicho</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fairy'
						id='fairy'
					/>
					<label htmlFor='fairy'>Hada</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='dragon'
						id='dragon'
					/>
					<label htmlFor='dragon'>Dragón</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='shadow'
						id='shadow'
					/>
					<label htmlFor='shadow'>Fantasma</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='ground'
						id='ground'
					/>
					<label htmlFor='ground'>Tierra</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='normal'
						id='normal'
					/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='psychic'
						id='psychic'
					/>
					<label htmlFor='psychic'>Psíquico</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='steel'
						id='steel'
					/>
					<label htmlFor='steel'>Acero</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='dark'
						id='dark'
					/>
					<label htmlFor='dark'>Siniestro</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='electric'
						id='electric'
					/>
					<label htmlFor='electric'>Eléctrico</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='fighting'
						id='fighting'
					/>
					<label htmlFor='fighting'>Lucha</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='flying'
						id='flying'
					/>
					<label htmlFor='flying'>Volador</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='ice'
						id='ice'
					/>
					<label htmlFor='ice'>Hielo</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='poison'
						id='poison'
					/>
					<label htmlFor='poison'>Veneno</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='rock'
						id='rock'
					/>
					<label htmlFor='rock'>Roca</label>
				</div>
				<div className='flex gap-4 ml-4'>
					<input
						type='checkbox'
						onChange={handleCheckbox}
						name='water'
						id='water'
					/>
					<label htmlFor='water'>Agua</label>
				</div>
			</div>
		</div>
	);
};
