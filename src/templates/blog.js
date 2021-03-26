import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedDate(formatString: "MMMM Do YYYY")
            body{
                json
            }
        }
    }
`;


const Blog = ({data}) => {

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img src = {url} alt = {alt}></img>
            }
        }
    }

    return(
        <Layout>
            <Head pageName = {data.contentfulBlogPost.title}/>
            <h1>{ data.contentfulBlogPost.title }</h1>
            <p>{ data.contentfulBlogPost.publishedDate }</p>
            {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog;