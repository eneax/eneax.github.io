import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ExternalLink } from '../utils/hyperLinks';

// styles
const UsesContainer = styled.div`
  margin-bottom: 3rem;
`;

const Uses = () => (
  <Layout>
    <SEO title="Uses" />

    <h1>Uses</h1>

    <UsesContainer>
      <h2>Hardware</h2>
      <ul>
        <li>MacBook Pro (15-inch, 2016)</li>
        <li>Google Pixel 3a</li>
        <li>Google Stadia Controller</li>
        <li>Sony Noise Cancelling Headphones (WH1000XM3)</li>
        <li>Kindle Paperwhite (10th Generation)</li>
      </ul>

      <h2>Apps</h2>
      <ul>
        <li>
          <ExternalLink href="https://www.google.com/chrome/">
            Google Chrome
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://code.visualstudio.com/">
            Visual Studio Code
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://hyper.is/">Hyper.js</ExternalLink> with "
          <ExternalLink href="https://ohmyz.sh/">Oh My ZSH!</ExternalLink>"
        </li>
        <li>
          You can see my config files over at my{' '}
          <ExternalLink href="https://github.com/eneax/dotfiles">
            Dot Files
          </ExternalLink>{' '}
          repo
        </li>
        <li>
          <ExternalLink href="https://www.alfredapp.com/">
            Alfred App
          </ExternalLink>
        </li>
      </ul>

      <h2>Chrome Extensions</h2>
      <ul>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg">
            Link to Text Fragment
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc">
            VisBug
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl">
            GoFullPage
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=chrome-ntp-icon">
            React Developer Tools
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?utm_source=chrome-ntp-icon">
            uBlock Origin
          </ExternalLink>
        </li>
      </ul>
    </UsesContainer>
  </Layout>
);

export default Uses;
