import React, { useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Landing = () => {
  useEffect(() => {
    // Check if the script is already present
    if (!document.getElementById('botpress-inject')) {
      const injectScript = document.createElement('script');
      injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
      injectScript.id = 'botpress-inject';
      document.body.appendChild(injectScript);
    }

    if (!document.getElementById('botpress-bot')) {
      const botScript = document.createElement('script');
      botScript.src = 'https://files.bpcontent.cloud/2025/03/09/02/20250309022647-N3JPSPMP.js';
      botScript.id = 'botpress-bot';
      document.body.appendChild(botScript);
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Landing;
