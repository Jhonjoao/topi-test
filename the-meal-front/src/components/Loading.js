import React from 'react';

class Loading extends React.Component {
    render() {
		return (
            <div className="slds-icon-eq slds-is-animated" title="Description of the icon when needed">
                <div className="slds-icon-eq__bar"></div>
                <div className="slds-icon-eq__bar"></div>
                <div className="slds-icon-eq__bar"></div>
                <span className="slds-assistive-text">Text alternative when needed</span>
            </div>
        )
    }
}

export default Loading;