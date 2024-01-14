import React from 'react'
import './Work.css'
import work1 from './images/work1.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Work () {
    
    return (
        <div className='works' id='work'>
            <h1>My Works</h1>
                <div className='container'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={work1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={work1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                            
                        </Card.Body>
                    </Card>
                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={work1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            
        </div>
    )
}

 