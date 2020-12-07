import './App.css';
import { ContextMenu } from 'react-context-menu';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ContextMenu
					target=".App"
					menuItems={[{ name: 'Copy' }, { name: 'Paste' }]}
				/>
			</header>
		</div>
	);
}

export default App;
