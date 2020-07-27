import React from 'react'

const ProjectForm = () => (
    <div>
        <form>
            <input type="text" placeholder="add title" name="title"/>
            <textarea placeholder="add description" name="description">
            </textarea>
            <input type="text" placeholder="github profile link" name="github"/>
            <input type="text" placeholder="public website link" name="site"/>
            <button>Save</button>
        </form>
    </div>
)

export default ProjectForm