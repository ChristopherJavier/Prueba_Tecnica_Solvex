import { useState } from 'react';
import loginServices from '../services/Login';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e) {
		e.preventDefault()
		await loginServices.login({
			email: email,
			password: password,
		});
	}

	return (
		<div>
			<form onSubmit={(e) => handleLogin(e)}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="Password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
