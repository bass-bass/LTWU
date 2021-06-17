import React from 'react';
import './App.css';
import axios from 'axios'
import PostsContainer from './components/PostsContainer'
import FormContainer from './components/FormContainer'
import JumbotronContainer from './components/JumbotronContainer'
import update from 'react-addons-update';
import { Container,Row,CardColumns,Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      createForm:{
        name:"",
        content:"",
      }
      
    }
    /*
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    */
  }
  
  get axios() {
    const axiosBase = require('axios');
    return axiosBase.create({
        baseURL: 'https://ltwu-back.herokuapp.com/posts',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'
    });
}
  

  componentDidMount(){
    this.axios.get('https://ltwu-back.herokuapp.com/posts')
    .then(results => {
      this.setState({
        posts: results.data
      });
    })
    .catch(data => {
      console.log(data)
    });
  }

  componentDidUpdate(){
    this.axios.get('https://ltwu-back.herokuapp.com/posts')
    .then(results => {
      this.setState({
        posts: results.data
      });
    })
    .catch(data => {
      console.log(data)
    });
  }

  createPost = (form)=>{
    this.axios.post("https://ltwu-back.herokuapp.com/posts", form)
    .then((response) => {
      const newData = update(this.state.posts, {$push:[response.data]})
      this.setState({posts: newData})
    })
    .catch((error) => {
      if (error.response) {
        // このリクエストはステータスコードとともに作成されます
        // 2xx系以外の時にエラーが発生します
        console.log(error.response.data);
        console.log("data");
        console.log(error.response.status);
        console.log("status");
        console.log(error.response.headers);
        console.log("headers");
      } else if (error.request) {
        // このリクエストはレスポンスが返ってこない時に作成されます。
        // `error.request`はXMLHttpRequest のインスタンスです。
        console.log(error.request);
        console.log("request");
      } else {
        //それ以外で何か以上が起こった時
        console.log('Error', error.message);
      }
        console.log(error.config);
        console.log("config");
    });
  }
  

  render(){
    return(
      <>
        <FormContainer 
          createPost = {this.createPost}
        />
        <JumbotronContainer />
        
        <Container>
          <Row>
        {this.state.posts.map((post) => {
          return(
                  <PostsContainer post={post} key={post.id} /> 
          )
        })}
          </Row>
        </Container>
          
        
        
        
      </>
    );
  }

}

export default App;
