import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import SourceCard from './SourceCard';

const Sources = ({ index }) => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const API_KEY = `&apiKey=7c33092ea64d4e8990ae75778715703e`;
        const URL = `http://newsapi.org/v2/sources?language=en&country=us`;
        let req = `${URL}${API_KEY}`;
        fetch(req).then(r => r.json()).then(r => setFeed(r));
      }, []);
      
    return (
        feed.sources ? (
        <div>
            {feed.sources.map(article =>  <SourceCard article= {article}></SourceCard>)}
        </div>) : ""
    )
}

export default Sources;
