import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.project ? props.project.title : '',
            description: props.project ? props.project.description : '',
            github: props.project ? props.project.github : '',
            site: props.project ? props.project.site : '',
            calenderFocused: false,
            createdAt: props.project ? moment(props.project.createdAt): moment(),
            error: ''
        }
    }

    onTitleChange = (e) => {
       this.setState({ title: e.target.value })
       this.setState(() => ({ error: '' }))
    }

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value})
        this.setState(() => ({ error: '' }))
    }

    onGithubChange = (e) => {
        this.setState({ github: e.target.value})
    }

    onSiteChange = (e) => {
        this.setState({ site: e.target.value})
    }

    onDateChange = (createdAt) => {
       if(createdAt) {
           this.setState(() => ({ createdAt }))
       }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.title || !this.state.description) {
            this.setState(() => ({ error: 'Please provide title and description of the project'}))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                github: this.state.github,
                site: this.state.site,
                createdAt: (this.state.createdAt.valueOf())/1000
            })
        }
    }

    render(){
        return  (
            <div className="content-container">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="form">
                    <input className="text-input" type="text" placeholder="add title" name="title" onChange={this.onTitleChange} value={this.state.title} />
                    <textarea className="textarea" placeholder="add description" name="description" value={this.state.description} onChange={this.onDescriptionChange}>
                    </textarea>
                    <input type="text" className="text-input" placeholder="github profile link" name="github" value={this.state.github} onChange={this.onGithubChange}/>
                    <input type="text" className="text-input" placeholder="public website link" name="site" value={this.state.site} onChange={this.onSiteChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <div className="button-group">
                        <button className="button">Save</button>
                        {this.props.editing && <button className="button remove-button" onClick={this.props.handleRemove}>Remove</button>}
                    </div>
                </form>
            </div>
        )
    }
}

   

export default ProjectForm