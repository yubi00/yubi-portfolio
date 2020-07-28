import React from 'react'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calenderFocused: false,
            createdAt: moment()
        }
    }

    onDateChange = (createdAt) => {
       if(createdAt) {
           this.setState(() => ({ createdAt }))
       }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    render(){
        return  (
            <div>
                <form>
                    <input type="text" placeholder="add title" name="title"/>
                    <textarea placeholder="add description" name="description">
                    </textarea>
                    <input type="text" placeholder="github profile link" name="github"/>
                    <input type="text" placeholder="public website link" name="site"/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

   

export default ProjectForm