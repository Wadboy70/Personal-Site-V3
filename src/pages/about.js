import React from 'react';
import ComingSoon from '../components/comingsoon';
import Layout from '../components/layout';

const About = (props) => {
    console.log(props);
    return(
        <Layout>
            <h1>About Page</h1>
            <ComingSoon/>
        </Layout>
    );
};

export default About;