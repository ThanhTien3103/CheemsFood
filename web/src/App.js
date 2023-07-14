import React, { useState } from 'react'
import { Routes, BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/DangNhap/DangNhap'
import RegisterForm from './components/DangKy/DangKy'
const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route exact path='/home' element={<Home />} />
					<Route path='/register' element={<RegisterForm />} />
				</Routes>
			</Router>
		</div>
	)
}
export default App
