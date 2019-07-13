import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

const md5 = require('md5');

const publicKey = '581485a60352d0ac3a97721811a1853e';
const privateKey = 'a170d6850fdf8247adbfe678b6594248568c7b66';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

class App extends Component {

  state = {
    heroes: [],
  }

  async componentDidMount(){
    const resp = await axios.get(url)
      .then((resp) => {
        return resp.data;
      })
      .catch((erro) => {
        console.log(erro);
      })
    console.log(resp);
    const heroes = resp.data.results;
    this.setState({ heroes });
  }

  render(){
    return (
      <div className="App">
         <h1>Marvel Heroes</h1>
        {
          this.state.heroes.map((hero) => (
            <Card 
              key= {hero.id}
              hero= {hero}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
