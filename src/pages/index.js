import React from "react";
import Layout from '../components/layout';
import styled from 'styled-components';
import seyi from '../images/Seyi.png';
import { graphql, useStaticQuery } from "gatsby";
import StripedBackground from "../components/stripedBackground";



export default function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `;
  const PictureBox = styled.div`
    max-height: 70vmin;
    max-width: 70vmin;
    img{
      width: auto;
      height: auto;
    }
  `;
  const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;

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
      <StripedBackground/>
      <HomeContainer>
        <h1 className="title">{ data.site.siteMetadata.title }</h1>
        <PictureBox>
          <img src={seyi} alt="seyi" className="me" />
        </PictureBox>
        <WordBox>
          <p className="quote">
            Software Engineer, Hip Hop Head, and Writer
          </p>
          <p>
            Welcome to my site :)
          </p>
        </WordBox>
      </HomeContainer>
    </Layout>
  );
}
