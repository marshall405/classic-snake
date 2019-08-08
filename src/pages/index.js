import React, { useEffect } from "react"
import Canvas from '../components/Canvas';
import Layout from "../components/layout";
import SEO from "../components/seo";
import SetupGame from '../components/SetupGame';

const IndexPage = () => {
  useEffect(() => {
    SetupGame();
  })
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 id='score'> Score: 0</h1>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Canvas />
        <p> Press Spacebar to Start </p>
      </div>
    </Layout>
  )
}
export default IndexPage
