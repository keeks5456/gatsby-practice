import React from 'react';
// gatsby preloads almost instant
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<div>
				<div>
					Hallo From Index Page Component
					<p>
						need a dev? Contact meee here
						{/* standard way of linking  */}
						{/* <a href="/contact">Contacts</a> */}
					</p>
					{/* Link has better UI, real time refresh */}
					<p>
						Nev a dev <Link to="/contact">Contact me.</Link>
					</p>
				</div>
			</div>
		</Layout>
	);
};
export default IndexPage;
