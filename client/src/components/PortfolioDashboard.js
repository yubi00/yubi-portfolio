import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';
import ProjectList from './ProjectList';
import Header from './Header';
import FooterPage from './FooterPage';

class PortfolioDashboard extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='aboutme'>
          <div className='content-container aboutme-content'>
            <img src='/images/yubi.jpg' className='aboutme-img' alt='' />

            <div className='aboutme__info'>
              <h1 className='aboutme__title'>
                Hi, I'm <strong>Yubi.</strong>{' '}
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
        <FooterPage />
      </div>
    );
  }
}

export default connect(undefined, { loadUser })(PortfolioDashboard);
