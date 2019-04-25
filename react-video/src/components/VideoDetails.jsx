import React from 'react';

class VideoDetails extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        
        
        
        if(!this.props.videodetails){
            return(
                <div>
                    isloading...
                </div>
            )
        }
        // const details= video.snippet.title;
        console.log(this.props.videodetails.snippet.title)
        return(
            <div>
                {this.props.videodetails.snippet.title}
            </div>
        );
        
        
    }
}


export default VideoDetails;