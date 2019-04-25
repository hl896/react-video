import React from 'react';

import VideoItems from './VideoItems';
class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        const videoList = this.props.videoList;
        const renderList = videoList.map( 
            (video)=>{
                return <VideoItems onVideoSelect={this.props.onVideoSelect} video={video}/>
            }
        )
        return (
            <div className="ui relaxed divided list" >{renderList}</div>
        );
    }
}

export default VideoList;