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
        const videoSrc= `https://www.youtube.com/embed/${this.props.videodetails.id.videoId}`
        return(
            <div>
                <div className="ui embed" >
                    <iframe src={videoSrc} frameborder="0"></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.videodetails.snippet.title}</h4>
                    <p>{this.props.videodetails.snippet.description}</p>
                </div>
            </div>
                
        );
        
        
    }
}


export default VideoDetails;