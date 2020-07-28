export const addProject = (project) => ({
    type:'ADD_PROJECT',
    project
})

export const removeProject = ({id} = {}) => ({
    type: 'REMOVE_PROJECT',
    id
})

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
})