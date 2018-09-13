import React from 'react';

export class Todo extends React.Component {

    render() {
        return (  
          <p>
              <b>Text: </b> {this.props.text.toString()} , <b>Priority: </b> {this.props.priority.toString()} , <b>Due Date: </b> {this.props.dueDate.toString()}
          </p>
        );
    }

}