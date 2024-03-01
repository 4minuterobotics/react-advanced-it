import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Helmet } from 'react-helmet';

const App = () => {
	return (
		<div className='App'>
			{/* <Helmet>
      <title>William's Portfolio</title>
      <meta charSet='utf-8'/>
      <meta name="description" content="Welcome! All games here have been made by Pompano 
                                        Beach High School's Advanced IT Honors Students. Feel 
										free to inquire about our program." 
										/>
      <link rel="icon" type="image" href="./src/assets/img/logo.png" />
    </Helmet> */}

			<ToastContainer position='bottom-center' limit={1} />
			<NavBar />
			<Banner />
			{/* <Technologies /> */}
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
