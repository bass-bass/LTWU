import React from 'react';
import { Jumbotron,Container } from 'react-bootstrap';

class JumbotronContainer extends React.Component {
    render(){
        return(
            <Jumbotron fluid>
                <Container>
                    <h1>L T W U</h1>
                    <p>
                        <br />Let's  Talk  With  Us  in  English.   You  can  click  "New Post"  above  and  post  whatever  you  think.<br />
                        This  is  for  every  one  of  you.  Let  us  know  what  you  feeling  now.  Just  take  it  easy...
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default JumbotronContainer;