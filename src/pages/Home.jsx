import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CarouselFadeExample from 'src\components\Carrusel.jsx';


export default function Home(){
return (
<Container>
<Row className="mb-4">
<Col>
<h1 className="page-title">TCG Project</h1>
<p className="muted">Videojuegos y artículos de computación con atención profesional.</p>
</Col>
</Row>
<Row>
<Carousel fade>
<Carousel.Item>
<ExampleCarouselImage text="First slide" />
<Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<ExampleCarouselImage text="Second slide" />
<Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<ExampleCarouselImage text="Third slide" />
<Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
</Carousel.Caption>
</Carousel.Item></Carousel>
<Col md={4} className="mb-3">
<Card>
<Card.Body>
<Card.Title>Periféricos</Card.Title>
<Card.Text>Mouse, teclados y auriculares para un setup profesional.</Card.Text>
</Card.Body>
</Card>
</Col>
<Col md={4} className="mb-3">
<Card>
<Card.Body>
<Card.Title>Hardware</Card.Title>
<Card.Text>Componentes para potenciar tu PC gamer.</Card.Text>
</Card.Body>
</Card>
</Col>
<Col md={4} className="mb-3">
<Card>
<Card.Body>
<Card.Title>Videojuegos</Card.Title>
<Card.Text>Títulos destacados y lanzamientos recientes.</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
)

}