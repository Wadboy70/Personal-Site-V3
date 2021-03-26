import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

const NotFound = () => {
    return(
        <Layout>
            <Head pageName = 'Page Not Found'/>
            <h1>
                Page not Found
            </h1>
            <Link to = '/'>Head Home</Link>
        </Layout>
    );
};

export default NotFound;
