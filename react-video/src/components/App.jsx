import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';


class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null,
       
    }
    onTermSubmit = async (term) => {
        const results = await youtube.get('/search',{
            params: {
                q:term
            }
        });
        console.log(results.data.items)
        this.setState({videos:results.data.items});
    }
    onVideoSelect = video => {
        console.log('from app!',video)
        this.setState({selectedVideo:video})
    }
    render(){
        
        console.log('videoDetails:'+this.state.selectedVideo);
        return (
            <div className="ui container">
                <SearchBar onFormsubmit = {this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row" >
                        <div className="eleven wide column">
                            <VideoDetails videodetails={this.state.selectedVideo}/>
                        </div>
                            
                        <div className="five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videoList={this.state.videos}/>
                        </div>
                            
                    </div>
                </div>
                    
            </div>
        )
        
        
    }
}

export default App;