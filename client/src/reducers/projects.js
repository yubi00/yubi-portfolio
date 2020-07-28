const projectsReducerDefaultState = [
    {
        _id: 'project1',
        title: "Kryptovote",
        description: "A blockchain based voting system",
        github: "https://github.com/yubi00/kryptovote",
        site: "https://kryptovote.com.au",
        createdAt: 134343434,
        completed: true
    },
    {
        _id: 'project2',
        title: "Yubi messenger",
        description: "socket.io based chat app",
        github: "https://github.com/yubimessenger",
        site: "https://yubimessenger.com.au",
        createdAt: 134343434,
        completed: false
    },
    {
        _id: 'project3',
        title: 'budget app',
        description: 'manage your expenses',
        github: 'https://github.com/expensify',
        site: 'https://expensify.com',
        createdAt: 2343434
    }
]

const projectsReducer = (state = projectsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, action.project]
        
        case 'EDIT_PROJECT':
            return state.map((project) => {
                if(project._id === action.id) {
                    return {...project, ...action.updates}
                }
                return project
            })
        case 'REMOVE_PROJECT':
            return state.filter((project) => project._id !== action.id)
        default:
            return state
    }
}

export default projectsReducer