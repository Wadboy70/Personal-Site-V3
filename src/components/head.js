import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ pageName }) => {

    const query = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `);

    return (
        <Helmet 
            title = {`${pageName} | ${query.site.siteMetadata.title}`}
        />
    );
};

export default Head;