import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
// import will from '../assets/img/will-ai.webp';
import pbhsHall from '../assets/img/pbhsHall.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// import express from 'express'

import React from 'react';

const Contact = () => {
	const formRef = useRef(); //////////

	const formInitialDetails = {
		name: '',
		email: '',
		message: '',
	};
	const [form, setForm] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonText('Sending...');
		console.log('form name: ', form.name);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'William',
					from_email: form.email,
					to_email: 'william.lawrence@browardschools.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					toast.success('Thank you. I will get back to you as soon as possible.');
					setStatus({ succes: true, message: 'Message sent successfully' });

					setForm({
						name: '',
						email: '',
						message: '',
					});
					setButtonText('Send');
				},
				(error) => {
					console.error(error);
					toast.error('Ahh, something went wrong. Please try again.');
					setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
				}
			);
	};

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<TrackVisibility partialVisibility>
							{/* {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              } */}
							{({ isVisible }) => (
								<img
									className={isVisible ? 'animate__animated animate__zoomIn round-image pbhs-hall-image' : 'round-image pbhs-hall-image'}
									src={pbhsHall}
									alt='Contact Us'
									load='lazy'
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility partialVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
									<h2>Get In Touch</h2>
									<form onSubmit={handleSubmit} ref={formRef}>
										<Row>
											<Col size={12} sm={6} className='px-1'>
												<input type='text' name='name' value={form.name} placeholder='Name' onChange={handleChange} />
											</Col>
											<Col size={12} sm={6} className='px-1'>
												<input type='email' name='email' value={form.email} placeholder='Email Address' onChange={handleChange} />
											</Col>
											<Col size={12} className='px-1'>
												<textarea rows='6' name='message' value={form.message} placeholder='Message' onChange={handleChange}></textarea>
												<button type='submit'>
													<span>{buttonText}</span>
												</button>
											</Col>
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
