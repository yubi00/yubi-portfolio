import axios from 'axios'
import { tokenConfig } from './auth'
 
export const addProject = (project) => ({
    type:'ADD_PROJECT',
    project
})

export const startAddProject = (project = {}) => {
    return async (dispatch, getState) => {
        try {
            await axios.post('/projects', project, tokenConfig(getState))
            dispatch(addProject(project))
        }catch(e) {
            console.log(e)
        }
    }
}

export const removeProject = ({id} = {}) => ({
    type: 'REMOVE_PROJECT',
    id
})

export const startRemoveProject = ({ id } = {}) => {
    return async (dispatch, getState) => {
        try {
            await axios.delete(`/projects/${id}`, tokenConfig(getState))
            dispatch(removeProject({ id }))
        }catch(e) {
            console.log(e)
        }
    }
}

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
})

export const startEditProject = (id, updates) => {
    return async (dispatch, getState) => {
        try {
            await axios.patch(`/projects/${id}`, updates, tokenConfig(getState))
            dispatch(editProject(id, updates))
        } catch(e) {
            console.log(e)
        }
    }
}

export const setProjets = (projects) => ({
    type: 'SET_PROJECTS',
    projects
})

export const startSetProjects = () => {
    return (dispatch) => {
       axios.get('/projects')
        .then((response) => {
            const projects = response.data.projects
            dispatch(setProjets(projects))
        })
    }
}