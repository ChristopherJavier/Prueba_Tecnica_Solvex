import { useState } from 'react';
import signUpServices from '../services/SignUp';

export function SignUpForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRep, setPasswordRep] = useState('');

	async function handleSignUp(e) {
		e.preventDefault();
		if (password === passwordRep) {
			signUpServices.signUp({
				email: email,
				password: password,
			});
		}

		throw Error('The password need to be equal');
	}

	return (
		<div>
			<form onSubmit={(e) => handleSignUp(e)}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="Password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="passwordRepeat">Password Repeat</label>
					<input
						type="password"
						name="passwordRepeat"
						id="passwordRepeat"
						onChange={(e) => setPasswordRep(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
