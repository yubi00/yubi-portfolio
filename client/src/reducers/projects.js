const projectsReducerDefaultState = [];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];

    case 'EDIT_PROJECT':
      return state.map((project) => {
        if (project._id === action.id) {
          return { ...project, ...action.updates };
        }
        return project;
      });
    case 'REMOVE_PROJECT':
      return state.filter((project) => project._id !== action.id);
    case 'SET_PROJECTS':
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
