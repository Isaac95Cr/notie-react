import React from react;

class IconButton extends React.Content{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button type="button" name="button">
                <i className="fa fa-sticky-note" aria-hidden="true"></i>
            </button>
        )
    }
}