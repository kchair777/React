import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  "id": 1,
  "image":'https://fastly.picsum.photos/id/670/200/300.jpg?hmac=Ib58hZuwIQfcFZjEvKKi0p-j4GN1BGIkE7wLsa95Xk4',
  'name': '김천호',
  'birthday': '961212',
  'gender': '남자',
  'job': '디자이너'

  },
   {
  "id": 2,
  "image":'https://fastly.picsum.photos/id/981/200/300.jpg?hmac=H3LDLzNJiLGQYdx_Q7g_Us-x8VxR-aK5TglLyGlQHDk',
  'name': '장미옥',
  'birthday': '961212',
  'gender': '여자',
  'job': '디자이너'

  },
   {
  "id": 3,
  "image":'https://fastly.picsum.photos/id/670/200/300.jpg?hmac=Ib58hZuwIQfcFZjEvKKi0p-j4GN1BGIkE7wLsa95Xk4',
  'name': '김희영',
  'birthday': '961212',
  'gender': '남자',
  'job': '디자이너'

  }
]



class App extends Component {
  render(){
    return(
      <div>
       { customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})} 
      </div>
      
    );
  }
}



export default App;
