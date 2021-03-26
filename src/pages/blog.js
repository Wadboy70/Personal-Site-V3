import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import ComingSoon from '../components/comingsoon';
import Head from '../components/head';



const Blog = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                sort:{
                    fields: publishedDate,
                    order: DESC
                }
            ){
                edges{
                    node{
                        slug,
                        title,
                        publishedDate(formatString: "MMMM Do YYYY")
                    }
                }
            }
        }
    `);
    const postInfo = data?.allContentfulBlogPost?.edges; 
    return(
        <Layout>
            <Head pageName = 'Blog'/>
            <h1>Blog Page</h1>
            <ol>
                {
                    postInfo.map(md => (
                        <li key = {md.node.title}>
                            <Link to = {md.node.slug}>
                                <h2>
                                    {
                                        md.node.title
                                    }
                                </h2>
                                <h3>
                                    {
                                        md.node.date
                                    }
                                </h3>
                            </Link>
                        </li>
                    ))
                }
            </ol>
            <ComingSoon/>
        </Layout>
    )
};

export default Blog;