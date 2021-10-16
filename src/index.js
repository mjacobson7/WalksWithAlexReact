import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import ShopProvider from './context/ShopContext';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const debug =
	process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
	<React.StrictMode>
		<ShopProvider>
			<StyletronProvider value={engine} debug={debug} debugAfterHydration>
				<BrowserRouter>
					<ScrollToTop />
					<App />
				</BrowserRouter>
			</StyletronProvider>
		</ShopProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
