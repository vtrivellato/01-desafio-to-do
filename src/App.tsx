import { Header } from './components/Header/Header'
import { ToDoList } from './components/ToDoList/ToDoList'

import './App.module.css'

import './global.css'

function App() {
	return (
		<div className="wrapper">
			<Header />		

			<ToDoList />
		</div>
	)
}

export default App
