import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SearchEngineOptimization from '../components/search-engine-optimization'
import {StaticImage} from "gatsby-plugin-image";
import siteConfig from '../../data/siteConfig'


const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Icon = styled.div`
  width: 150px;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: center;
`

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout headerLinks={siteConfig.headerLinks} location={this.props.location} noCover={true}>
        <SearchEngineOptimization title="Page Not Found" />
        <Hero
          heroImg='/images/404.jpeg'
          title='404'
        />
        <Wrapper>
          <MainTitle>404 Page Not Found</MainTitle>
          <Icon>
            <StaticImage src='/images/ufo-and-cow.svg' alt='ufo and cow' />
          </Icon>
          <Text>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </Text>
        </Wrapper>
      </Layout>
    )
  }
}

export default NotFoundPage
