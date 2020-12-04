import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Project from './Project';
import { startSetProjects } from '../actions/projects';

function ProjectList({ projects, startSetProjects }) {
  const [skip, setSkip] = useState(0);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    startSetProjects(skip, limit);
  }, [skip, limit, startSetProjects]);

  const fetchData = () => {
    setSkip((skip) => skip + limit);
  };
  return (
    <div className='content-container list__container' id='myworks'>
      <h2 className='list__title'>My Projects</h2>
      <InfiniteScroll
        dataLength={projects.length}
        next={fetchData}
        hasMore={skip < projects.length}
        loader={<p className='loader'>Loading...</p>}
      >
        <div className='list-body'>
          {projects ? (
            projects.map((project, i) => <Project key={i} project={project} />)
          ) : (
            <div>No projects found</div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSetProjects: (skip, limit) => dispatch(startSetProjects(skip, limit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
