import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'
import { ToDoList } from './components/ToDoList/ToDoList'

import './App.module.css'

import './global.css'

function App() {
	return (
		<div className="wrapper">
			<Header />

			<SearchBar />			

			<ToDoList />
		</div>
	)
}

export default App
