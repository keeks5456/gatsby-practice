import React from 'react';
// gatsby preloads almost instant
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'

const IndexPage = () => {
	return (
		<Layout>
      <Head title="Home"/>
			<div>
				<div>
				<h1>Wiki-Anime</h1>
					<p>
            Welcome! Wiki-Anime is a personal blogging site, created to display information about My favorite anime shows & Movies, giving you my hot takes on the overall story, the character development and how that anime impacted me in someway.
						{/* standard way of linking  */}
						{/* <a href="/contact">Contacts</a> */}
					</p>
					{/* Link has better UI, real time refresh */}
					<p>
						Want to get in touch with me to talk about your favorite anime <Link to="/contact">Contact me.</Link>
					</p>
				</div>
			</div>
		</Layout>
	);
};
export default IndexPage;
