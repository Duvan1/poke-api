import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};
