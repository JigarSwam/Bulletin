import React, {useState} from 'react';
import {newsArticles} from './mockAPI';
import Card from 'react-bootstrap/Card'

export default function NewsArticle ({ article }) {
    const style = {
        width: 100,
    };

    return (
        <Card style={{ width: '90rem' }} href={ article && article.url }>
          <Card.Body>
          <Card.Img variant="left" style={style} src={ article && article.urlToImage } />
            <Card.Title> 
              { article && article.title }
            </Card.Title>
            <Card.Subtitle>
              { article && article.name }
            </Card.Subtitle>
            <Card.Text>
              { article && article.description }
            </Card.Text>
          </Card.Body>
        </Card>

        // <Card>
        // <img style = {style} src={ article && article.urlToImage } ></img>
        // <a href={ article && article.url }>{ article && article.title }</a>
        // <p>{ article && article.description }</p>
        // </Card>
    )
}