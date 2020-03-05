import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'

export default function NewsArticle ({ article }) {
    const style = {
        width: 100,
    };

    return (
        <Card>
          <Card.Body>
          <Card.Img variant="top" style={style} src={ article && article.urlToImage } />
            <Card.Title> 
              { article && article.title }
            </Card.Title>
            <Card.Subtitle>
              { article && article.description }
            </Card.Subtitle>
            <Card.Text>
            </Card.Text>
            <Card.Link href={ article && article.url }>Link to Article</Card.Link>
          </Card.Body>
        </Card>
    )
}