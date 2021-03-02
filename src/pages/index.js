import React from "react";
import Layout from '../components/layout';
import styled from 'styled-components';



export default function Home() {
  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `;

  return (
    <Layout>
      <HomeContainer>
        <h1 class="title">Seyi Oluwaleimu</h1>
        <div class="face">
          {/* <img src="./assets/Seyi.png" alt="seyi" class="me" /> */}
        </div>
        <div class="word-box">
          <p class="quote">
            Software Engineer, Music Fanatic, and Lifelong Learner
          </p>
          <p class="quote">Checkout my stuff below :)</p>
        </div>
      </HomeContainer>
    </Layout>
  );
}
