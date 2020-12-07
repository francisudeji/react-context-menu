import './App.css';
import { ContextMenu } from 'react-context-menu';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div
					className="wrapper"
					style={{ height: '500px', width: '500px', backgroundColor: 'red' }}
				>
					<ContextMenu
						target=".wrapper"
						menuItems={[{ name: 'Copy' }, { name: 'Paste' }]}
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
