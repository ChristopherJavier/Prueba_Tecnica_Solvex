import { cleanup, render, screen } from '@testing-library/react';
import { afterAll, afterEach, describe, it } from 'vitest';
import { TodoList } from './components/TodoList';
import { ToDo } from './components/ToDo';
const ToDos = [
	'Do the laundry',
	'Do the Homework',
	'Cook the dinner',
	'Start the project',
];

describe('TodoList Test', () => {
	afterEach(cleanup);
	it('The component should render', () => {
		render(<TodoList />);
	});

	it('The component should show the to-dos', () => {
		render(<TodoList />);
		ToDos.forEach((i) => {
			screen.getByText(i);
		});
	});
});

describe('ToDo component Tests', () => {
	afterEach(cleanup);

	it('should contain the todo title', () => {
		const toDoObject = { id: 120, title: "Clean the house"}
		render(<ToDo toDoI={toDoObject}/>)
		screen.getByText(toDoObject.title)
	});
});
