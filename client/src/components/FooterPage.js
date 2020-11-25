import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterPage = () => (
  <div className='footer'>
    <div className='footer__socials'>
      <a
        href='https://github.com/yubi00'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon fontSize='large' style={{ color: 'white' }} />
      </a>
      <a
        href='https://www.linkedin.com/in/ubrajkhadka/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedInIcon fontSize='large' style={{ color: 'white' }} />
      </a>
    </div>
    <h3 className='footer-content'>Copyright &copy; 2020 Yubi Khadka</h3>
  </div>
);

export default FooterPage;
