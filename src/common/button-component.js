import React, { Component } from 'react'
class Button extends Component {
    state = {  } 
    render() { 
        const {className,text,event,disabled} = this.props;
        return (
            <button
            onClick={event}
            className={className}
            disabled={disabled}
            >
            {text}

            </button>
         
        
        );
    }
}
 
export default Button;