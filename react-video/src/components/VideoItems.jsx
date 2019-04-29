import React from 'react';
import './videoitem.css'
class VideoItems extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {video,onVideoSelect} = this.props;
        
        return (
            <div onClick={()=>{this.props.onVideoSelect(video)}} className="video-item item" >
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt=""/>
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                    {/* <div className="des">{this.props.video.snippet.description}</div> */}
                </div>
                <hr/>
            </div>
        );
    }
}
export default VideoItems;