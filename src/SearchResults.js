import React from 'react'
import Card from 'react-bootstrap/Card'


const SearchResults = (props) => {
    const style = {
        width: 100,
    }
    return (
        <Card>
          <Card.Body>
          <Card.Img variant="top" style={style} src={ props && props.results.urlToImage } />
            <Card.Title> 
              { props && props.results.title }
            </Card.Title>
            <Card.Subtitle>
              { props && props.results.description }
            </Card.Subtitle>
            <Card.Text>
            </Card.Text>
            <Card.Link href={ props && props.results.url }>Link to props</Card.Link>
          </Card.Body>
        </Card>
    )
}


export default SearchResults