import axios from 'axios'

export const addProject = (project) => ({
    type:'ADD_PROJECT',
    project
})

export const startAddProject = (project = {}) => {
    return async (dispatch) => {
        try {
            await axios.post('/projects', project)
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
    return async (dispatch) => {
        try {
            await axios.delete(`/projects/${id}`)
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
    return async (dispatch) => {
        try {
            await axios.patch(`/projects/${id}`, updates)
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