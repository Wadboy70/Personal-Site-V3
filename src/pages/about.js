import React from 'react';
import ComingSoon from '../components/comingsoon';
import Head from '../components/head';
import Layout from '../components/layout';

const About = (props) => {
    console.log(props);
    return(
        <Layout>
            <Head pageName = 'About'/>
            <h1>About Page</h1>
            <ComingSoon/>
        </Layout>
    );
};

export default About;