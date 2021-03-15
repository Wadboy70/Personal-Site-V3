import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import ComingSoon from '../components/comingsoon';



const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        excerpt
                    }
                }
            }
        }
    `);
    const postInfo = data?.allMarkdownRemark?.edges; 
    return(
        <Layout>
            <h1>Blog Page</h1>
            {/* <ol>
                {
                    postInfo.map(md => (
                        <li key = {md.node.frontmatter.title}>
                            <h2>
                                {
                                    md.node.frontmatter.title
                                }
                            </h2>
                            <h3>
                                {
                                    md.node.frontmatter.date
                                }
                            </h3>
                            <p>
                                {
                                    md.node.excerpt
                                }
                            </p>
                        </li>
                    ))
                }
            </ol> */}
            <ComingSoon/>
        </Layout>
    )
};

export default Blog;