import React, {useState} from 'react';
import {newsArticles} from './mockAPI';
import Card from 'react-bootstrap/Card'

export default function NewsArticle ({ article }) {
    const style = {
        width: 100,
    };

    return (
        // <Card>
        //   <Card.Img>
            
        //   </Card.Img>
        //   <Card.body>
        //     <Card.Title> 
        //       //Title of Article
        //     </Card.Title>
        //     <Card.Subtitle>
        //       //Name of Publisher/Site
        //     </Card.Subtitle>
        //     <Card.text>
        //       //Description/Summary of Article
        //     </Card.text>
        //   </Card.body>
        // </Card>

        <Card>
        <img style = {style} src={ article && article.urlToImage } ></img>
        <a href={ article && article.url }>{ article && article.title }</a>
        <p>{ article && article.description }</p>
        </Card>
    )
}