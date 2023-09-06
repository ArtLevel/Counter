import React from 'react'
import './App.css'
import { CounterOne } from './components/Counters/CounterOne'
import { CounterTwo } from './components/Counters/CounterTwo'

const App = () => {
	return (
		<div>
			<CounterOne />
			<CounterTwo />
		</div>
	)
}

export default App
