import React, {Component} from 'react';
import './App.scss';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nutri: []
    }
  }

  componentDidMount(){
    let state = this.state;
    let url = "http://www.sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
      .then(
        (response) =>{
          if(response.status !== 200){
            console.log('error')
            return;
          }
          response.json().then((data)=>{
            console.log(data);
            state.nutri = data;
            this.setState(state);
          }) 
        }
      )
      .catch((err)=>{
        console.log('Erro ao fetch')
      })
  }

  render(){
    return(
      <div className="container">
        <header><strong>React Nutri API</strong></header>
        {this.state.nutri.map((item) => {
          return(
            <article key={item.id} className="post">
                <strong className="titulo">{item.titulo}</strong>
                <img src={item.capa} className="capa" alt={item.categoria}/>
                <p className="subtitulo">{item.subtitulo}</p>
                <button className="botao" href="#">Acessar</button>
            </article>
          );
        })}
      </div>
    )
  }
}

export default App;