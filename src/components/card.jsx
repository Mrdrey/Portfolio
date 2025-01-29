import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/CardProject.css';

function CardProject({ title, text, link, image }) {
  return (
    <Card className="card-project" style={{ width: '18rem', margin: 10, backgroundColor: 'white', borderRadius: 10 }}>
      <Card.Img variant="top" src={image} style={{ height: 150 }} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" href={link} target='Blank' style={{ backgroundColor: 'black', borderColor: 'black' }}>Visit</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProject;
