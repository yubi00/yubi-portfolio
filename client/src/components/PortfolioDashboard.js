import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';
import useOnView from '../hooks/useOnView';
import ProjectList from './ProjectList';
import Header from './Header';
import FooterPage from './FooterPage';

const PortfolioDashboard = ({ loadUser }) => {
  const { ref, visible } = useOnView({
    rootMargin: '0px',
    threshold: 0.15
  });
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div>
      <Header visible={visible} />
      <div className='aboutme' ref={ref}>
        <div className='content-container aboutme-content'>
          <img src='/images/yubi.jpg' className='aboutme-img' alt='' />

          <div className='aboutme__info'>
            <h1 className='aboutme__title'>
              Hi, I'm <strong>Yubi.</strong>
            </h1>
            <p className='aboutme__subtitle'>I am a Full Stack Developer</p>
            <a href='#myworks' className='view-info'>
              View my works
              <span>
                <i className='arrow right'></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <ProjectList />
      <FooterPage visible={visible} />
    </div>
  );
};

export default connect(undefined, { loadUser })(PortfolioDashboard);
