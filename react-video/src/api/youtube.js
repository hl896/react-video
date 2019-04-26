import axios from 'axios';

const KEY = 'AIzaSyAE0bCZVII_1Gb-5x3axfW21EDlk1JDdpc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});