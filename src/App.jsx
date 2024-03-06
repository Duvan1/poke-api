import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
	return (
		<PokemonProvider>
			<div className="container mx-auto">
				<AppRouter />
			</div>
		</PokemonProvider>
	);
}

export default App;
