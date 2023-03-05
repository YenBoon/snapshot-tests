import React from 'react';
import Card from 'react-bootstrap/Card';
import IronCat from './IronCat.jpg';

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={IronCat.jpg} />
                <Card.Body>
                    <Card.Title>Iron Cat</Card.Title>
                    <Card.Text>
                        I am IronCat.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard