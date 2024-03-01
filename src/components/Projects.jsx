import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import ExperienceCard from './ExperienceCard';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import will from '../assets/img/will.webp';
import startup from '../assets/img/startup.webp';
import shockfat from '../assets/img/shockfat.webp';
import monster from '../assets/img/monster.webp';
import drewit from '../assets/img/drewit.webp';
import amazona from '../assets/img/amazona.webp';
import wallstreetblast from '../assets/img/wallstreetblast.webp';
import igHoldings from '../assets/img/igHoldings.webp';
import luxuryPicnics from '../assets/img/luxuryPicnics.webp';
import rightDirection from '../assets/img/rightDirection.webp';
import harveyCastle from '../assets/img/harveycastle.webp';
import comingScoon from '../assets/img/comingsoon.webp';
import javaScript from '../assets/img/javascript.webp';
import codehs from '../assets/img/codehs.webp';
import arduino from '../assets/img/arduino.webp';

import ali from '../assets/img/ali.webp';
import startupwebsites from '../assets/img/startupwebsites.webp';
import wildcat from '../assets/img/wildcat.webp';

import colorSharp2 from '../assets/img/color-sharp2.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import React from 'react';

const Projects = () => {
	const projects = [
		// {
		// 	title: 'Gambling App',
		// 	description:
		// 		'Currently in developement and only viewbale on mobile, users will be able to place 3 simultaneous bets using various currencies. Back end utilizes web sockets for multiplayer.',
		// 	imgUrl: wallstreetblast,
		// 	tags: [
		// 		{
		// 			name: 'react',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'MySQL, Web Sockets, World Pay',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'SASS',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/wall-street-blast',
		// 	website_link: 'https://wall-street-blast.vercel.app/',
		// },
		{
			title: 'The Township',
			description: 'A game made as an example of what is possible with JavaScript 2d animation.',
			imgUrl: harveyCastle,
			tags: [
				{
					name: 'Made by: Mr. Lawrence',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: Beat em up',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: JavaScript',
					color: 'orange-text-gradient',
				},
			],
			source_code_link: 'https://github.com/4minuterobotics/scalable-2d-game-beat-em-up',
			website_link: 'https://mr-lawrence-the-township.vercel.app/#',
		},
		{
			title: 'Student Game',
			description: 'New Student Games go Here',
			imgUrl: comingScoon,
			tags: [
				{
					name: 'Made by: ',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: ',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: ',
					color: 'orange-text-gradient',
				},
			],
			// source_code_link: 'pbhs-games.vercel.app',
			// website_link: 'pbhs-games.vercel.app',
		},
		{
			title: 'Student Game',
			description: 'New Student Games go Here',
			imgUrl: comingScoon,
			tags: [
				{
					name: 'Made by: ',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: ',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: ',
					color: 'orange-text-gradient',
				},
			],
			// source_code_link: 'pbhs-games.vercel.app',
			// website_link: 'pbhs-games.vercel.app',
		},
		{
			title: 'Student Game',
			description: 'New Student Games go Here',
			imgUrl: comingScoon,
			tags: [
				{
					name: 'Made by: ',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: ',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: ',
					color: 'orange-text-gradient',
				},
			],
			// source_code_link: 'pbhs-games.vercel.app',
			// website_link: 'pbhs-games.vercel.app',
		},
		{
			title: 'Student Game',
			description: 'New Student Games go Here',
			imgUrl: comingScoon,
			tags: [
				{
					name: 'Made by: ',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: ',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: ',
					color: 'orange-text-gradient',
				},
			],
			// source_code_link: 'pbhs-games.vercel.app',
			// website_link: 'pbhs-games.vercel.app',
		},
		{
			title: 'Student Game',
			description: 'New Student Games go Here',
			imgUrl: comingScoon,
			tags: [
				{
					name: 'Made by: ',
					color: 'blue-text-gradient',
				},
				{
					name: 'Genre: ',
					color: 'green-text-gradient',
				},
				{
					name: 'Technologies: ',
					color: 'orange-text-gradient',
				},
			],
			// source_code_link: 'pbhs-games.vercel.app',
			// website_link: 'pbhs-games.vercel.app',
		},

		// {
		// 	title: 'AI Image Generator',
		// 	description:
		// 		'A tribute to my late younger brother Drew, this web app takes prompts from users, converts it to an image, and uses cloud storage to save and re-access photos.',
		// 	imgUrl: drewit,
		// 	tags: [
		// 		{
		// 			name: 'react',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'mongodb, openAI, cloudinary',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/MERN-AI-image-generator',
		// 	website_link: 'https://drew-it-git-main-4minuterobotics.vercel.app/',
		// },
		// {
		// 	title: 'Animated Portfolio',
		// 	description: 'A animation themed portfolio web app, displaying coding capability of 3D animation.',
		// 	imgUrl: will,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'threejs, tailwind, framer motion ',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/3d_portfolio/',
		// 	website_link: 'https://williamlawrence.tech',
		// },
		// {
		// 	title: 'Bouncy House Rental',
		// 	description: 'Users can schedule bookings and make payments. Admin features include complete Saas functionality.',
		// 	imgUrl: monster,
		// 	tags: [
		// 		{
		// 			name: 'WIX',
		// 			color: 'blue-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: '',
		// 	website_link: 'https://www.monsterbouncyhouses.com',
		// },
		// {
		// 	title: 'Web Dev Agency',
		// 	description: 'My own web development agency website built on WIX using their VELO api.',
		// 	imgUrl: startup,
		// 	tags: [
		// 		{
		// 			name: 'WIX',
		// 			color: 'blue-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: '',
		// 	website_link: 'https://www.startupwebsites.design',
		// },
		// {
		// 	title: 'Crossfit Gym',
		// 	description: 'An app for a small gym that allows its customers to view changing schedules, order supplements, and watch live stream workouts.',
		// 	imgUrl: shockfat,
		// 	tags: [
		// 		{
		// 			name: 'Wordpress',
		// 			color: 'green-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: '',
		// 	website_link: 'https://www.shockfat.com',
		// },
		// {
		// 	title: 'Luxury Picnics',
		// 	description:
		// 		'A website for booking luxury picnics in southern Florida. This website allows customers to view prodcucts and request bookings online.',
		// 	imgUrl: luxuryPicnics,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind, framer motion, react-bootstrap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/luxury-picnics',
		// 	website_link: 'https://www.luxurypicnicrentals.com',
		// },
		// {
		// 	title: 'Integrated Health',
		// 	description: 'A website used as the main resource reference for an integrated health company in Arizona.',
		// 	imgUrl: igHoldings,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind, framer motion, react-bootstrap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/ig-holdings',
		// 	website_link: 'https://www.shockfat.com',
		// },
		// {
		// 	title: 'Behavioral Specialists',
		// 	description: 'A website for a life coaching and therapy company in Arizona. Currently under construction.',
		// 	imgUrl: rightDirection,
		// 	tags: [
		// 		{
		// 			name: 'reactjs',
		// 			color: 'blue-text-gradient',
		// 		},
		// 		{
		// 			name: 'emailjs',
		// 			color: 'green-text-gradient',
		// 		},
		// 		{
		// 			name: 'tailwind, framer motion, react-bootstrap',
		// 			color: 'orange-text-gradient',
		// 		},
		// 	],
		// 	source_code_link: 'https://github.com/4minuterobotics/the-right-direction',
		// 	website_link: 'https://www.the-right-direction.vercel.app/',
		// },
	];

	const experiences = [
		{
			title: 'We start with basic coding ideas.',
			company_name: 'Intro to JavaScript with CodeHS.com:',
			icon: codehs,
			iconBg: '#383E56',
			date: 'Quarters 1-2',
			points: [
				'Students begin their coding journey by learning JavaScript fundamentals through CodeHS.com.',
				'They build small games and gain hands-on experience manipulating the HTML canvas using JavaScript.',
				'CodeHS.com provides an accessible and structured approach to coding, ensuring students grasp foundational concepts without confusion.',
			],
		},
		{
			title: 'Next we build basic games with JavaScript.',
			company_name: 'Creating a Video Game in VS Code:',
			icon: javaScript,
			iconBg: '#E6DEDD',
			date: 'Quarters 2-3',
			points: [
				'Once students have mastered JavaScript basics, they transition to creating a video game in VS Code.',
				'Guided by the instructor, they learn advanced concepts and techniques necessary for game development.',
				'Through collaborative learning and practical demonstrations, students gain insights into creating games on a larger scale.',
			],
		},
		{
			title: 'Students attempt to create their own games.',
			company_name: 'Developing Personal Game Projects:',
			icon: javaScript,
			iconBg: '#383E56',
			date: 'Quarters 3-4',
			points: [
				'With a solid understanding of game development, students embark on creating their own game projects.',
				'Drawing upon the knowledge accumulated from previous phases, they unleash their creativity to design and develop unique games.',
				'The emphasis is on independent exploration and experimentation, fostering innovation and problem-solving skills.',
			],
		},
		// {
		// 	title: 'Lastly, we cover robotics.',
		// 	company_name: 'Arduino Robotics Exploration:',
		// 	icon: arduino,
		// 	iconBg: '#383E56',
		// 	date: 'Quarter 4',
		// 	points: [
		// 		'In the final phase, students delve into the world of robotics using Arduino.',
		// 		'They learn how to build and program robots, applying their coding skills to create interactive and functional devices.',
		// 		'Hands-on projects and challenges empower students to apply their knowledge in real-world contexts, sparking curiosity and ingenuity.',
		// 	],
		// },
	];

	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<h2>Projects / About us</h2>
									<p>Click either tab to view our projects or learn more about us.</p>
									<Tab.Container id='projects-tabs' defaultActiveKey='first'>
										<Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
											<Nav.Item>
												<Nav.Link eventKey='first'>Projects</Nav.Link>
											</Nav.Item>
											{/* <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item> */}
											<Nav.Item>
												<Nav.Link eventKey='third'>About This Class</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content id='slideInUp' className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
											<Tab.Pane eventKey='first'>
												<Row>
													{projects.map((project, index) => {
														return <ProjectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											{/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
											<Tab.Pane eventKey='third'>
												{/* <p>10 years in high school science education and 7 years in tech.</p> */}
												<div className='component' id='experience'>
													<div className='mt-20 flex flex-col'>
														<VerticalTimeline>
															{experiences.map((experience, index) => (
																<ExperienceCard key={`experience-${index}`} experience={experience} />
															))}
														</VerticalTimeline>
													</div>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2} alt='background'></img>
		</section>
	);
};

export default Projects;
