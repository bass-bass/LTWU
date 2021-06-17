import React from 'react';
import { BsChatDotsFill } from "react-icons/bs"
import { Card,CardColumns,Container,Row,Col } from 'react-bootstrap';

class PostsContainer extends React.Component {

    handleToDate=(date)=>{
        date = new Date(date);
        if(date.getMinutes() < 10){
            date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+date.getHours()+":0"+date.getMinutes()
        } else {
            date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()
        }
        
        return date;
    }

    render(){
        let iconStyles = { float: "right" };
        return(
                    <Col md="4">
                        <Card bg="light" text="dark" className="rounded-3 box-shadow">
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted"><BsChatDotsFill style={iconStyles}  /> name: {this.props.post.name}</Card.Subtitle>
                                <Card.Text>
                                    {this.props.post.content}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Text>
                                    {this.handleToDate(this.props.post.created_at)}
                                </Card.Text>
                            </Card.Footer>
                        </Card>
                    </Col>
        );
    }
}

export default PostsContainer