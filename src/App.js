import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile.js'
import WhatIDo from './components/WhatIDo';
import Works from './components/Works.js';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
			<Nav />
			<Profile />
			<WhatIDo />
			<Works />
			<Contact />

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

    </div>
  );
}

export default App;
