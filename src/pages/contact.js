import React from 'react';
// import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faTwitter, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import * as contactStyles from './contact.module.scss'
const Contact = () => {
	return (
		<Layout>
			<Head title="Contacts" />
			<h1>Hello There! </h1>
			<p>The best way to get in touch with Akiko is through these apps below :)</p>
      <br />
      <p>If you have any questions anime or software engineer related, please feel free to connect with me on social media! :)</p>
			<ul className={contactStyles.contact}>
				{/* replace the text with icons */}
				<li>
					<a href="https://www.linkedin.com/in/agreen08/"> <FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/akikoDotJS/">
						Twitter <FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li>
					<a href="https://agreen17.medium.com/">
						Medium <FontAwesomeIcon icon={faMedium} />
					</a>
				</li>
				<li>
					{' '}
					<a href={'mailto:akikogreen08@gmail.com'} className="email">
						Contact Me Here <FontAwesomeIcon icon={faTelegramPlane} />
					</a>
				</li>
			</ul>
			{/* <Link to="https://twitter.com/akikoDotJS">twitter</Link> can also use this as option for linking to socials */}
		</Layout>
	);
};

export default Contact;
