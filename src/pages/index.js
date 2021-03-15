import React from "react";
import Layout from '../components/layout';
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";



export default function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
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
        <div className="face">
          {/* <img src="./assets/Seyi.png" alt="seyi" className="me" /> */}
        </div>
        <div className="word-box">
          <p className="quote">
            Software Engineer, Music Fanatic, and Lifelong Learner
          </p>
          <p className="quote">Checkout my stuff below :)</p>
        </div>
      </HomeContainer>
    </Layout>
  );
}
