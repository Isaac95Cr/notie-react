import React from 'react';


class IconButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return(
            <button type="button" name="button" className={classes.buttonClass}>
                <i className={`fa ${classes.iconClass}`} aria-hidden="true"></i>
            </button>
        )}
}
export default IconButton;