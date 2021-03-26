import React from 'react';
import ComingSoon from '../components/comingsoon';
import Head from '../components/head';

import Layout from '../components/layout';

const Projects = () => {
    return(
        <Layout>
            <Head pageName = 'Projects'/>
            <h1>Projects Page</h1>
            <ComingSoon/>
        </Layout>
    )
};

export default Projects;