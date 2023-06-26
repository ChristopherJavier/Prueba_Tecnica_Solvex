import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export function Home() {
	const [display, setDisplay] = useState('Home');

	return (
		<div>
			{display === 'Login' ? (
				<>
					<button onClick={() => setDisplay('')}>Home</button>
					<LoginForm />
				</>
			) : display === 'Sign-Up' ? (
				<>
					<button onClick={() => setDisplay('')}>Home</button>
					<SignUpForm />
				</>
			) : (
				<>
					<h1>To-Do App</h1>
					<input
						type="button"
						value="Sign up"
						onClick={() => setDisplay('Sign-Up')}
					/>
					<input
						type="button"
						value="Login"
						onClick={() => setDisplay('Login')}
					/>
				</>
			)}
		</div>
	);
}
