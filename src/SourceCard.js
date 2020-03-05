import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'

export default function SourceCard ({ article }) {
    const style = {
        width: 100,
    };

    return (
        <Card>
          <Card.Body>
            <Card.Title> 
              { article && article.name }
            </Card.Title>
            <Card.Subtitle>
              { article && article.description }
            </Card.Subtitle>
            <Card.Text>
            </Card.Text>
            <Card.Link href={ article && article.url }>Link to Source Site</Card.Link>
          </Card.Body>
        </Card>
    )
}