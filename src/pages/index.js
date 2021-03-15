import React from "react";
import Layout from '../components/layout';
import styled from 'styled-components';
import seyi from '../images/Seyi.png';
import { graphql, useStaticQuery } from "gatsby";



export default function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    div{
      display: flex;
      justify-content: center;
    }
  `;
  const PictureBox = styled.div`
    /* max-height: 70vmin;
    max-width: 70vmin; */
  `;
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          title
        }
      }
    }
  `);

  
  return (
    <Layout>
      <HomeContainer>
        <h1 className="title">{ data.site.siteMetadata.title }</h1>
        <PictureBox>
          <img src={seyi} alt="seyi" className="me" />
        </PictureBox>
        <div className="word-box">
          <p className="quote">
            Software Engineer, Hip Hop Head, and Writer
          </p>
          <p>
            Welcome to my site :)
          </p>
          <p className="quote">Checkout my stuff below :)</p>
        </div>
      </HomeContainer>
    </Layout>
  );
}
