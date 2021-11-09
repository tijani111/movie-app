import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Rate from './Rate';

export default function MovieCard({film}) {
    return (
        <div >
             <Card style={{width:"18rem"}}>
    <Card.Img variant="top" src={film.img} className="imag"/>
    <Card.Body>
      <Card.Title> {film.titre}</Card.Title>
      <Card.Text>
        {film.description}
      </Card.Text>
      <Rate rate={film.rate}/>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{film.Rate}</small>
    </Card.Footer>
  </Card>
        </div>
    )
}
