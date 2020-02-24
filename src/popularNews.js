import React, {useState} from 'react';
import {newsArticles} from './mockAPI';
import NewsArticle from './NewsArticle';
import { PrimaryButton } from 'office-ui-fabric-react';


const PopularNews = ({ index }) => {
    const [article, setArticle] = useState([]);

    const displayData = async event => {
            const result = await newsArticles();
            setArticle(result.articles);
    }
     

    return (
        <div>
            <button onClick={displayData}> Click to see news</button>
            <NewsArticle article = {article[0]}/>
            <NewsArticle article = {article[1]}/>
            <NewsArticle article = {article[2]}/>
            <NewsArticle article = {article[3]}/>
        </div>
    )
}

export default PopularNews;