import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './components/screens/Home/Home'
import Layout from "./components/layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store";

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
		<Layout>
			<Home/>
		</Layout>
		</Provider>
	</StrictMode>
)
