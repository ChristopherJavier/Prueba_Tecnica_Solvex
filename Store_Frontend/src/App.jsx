//import { Home } from './components/Home';
import productServices from './services/Products';
import { useEffect, useState } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';

function App() {
	const [products, setProducts] = useState([]);
	//const [user, setUser] = useState(null);

	useEffect(() => {
		productServices.getAll().then((product) => setProducts(product));
	}, []);

	/* return user === null ? (
		<Home />
	) : (
		<>
		
		</>
	); */

	return (
		<>
		<ProductList products={products}/>
		</>
	)
}

export default App;
