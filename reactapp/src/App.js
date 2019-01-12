import React, { Component } from 'react';
import './App.css';
import Amiibo from './components/amiibo';
import { connect } from 'react-redux';
import { getAmiiboCards } from './actions/getamiiboaction';
import { getTotalCardsNumber } from './actions/gettotalaction'
import axios from 'axios';


let backend;
if(process.env.REACT_APP_SAME_HOST) backend = '';
else if(process.env.REACT_APP_API) backend = process.env.REACT_APP_API;
else backend = 'http://localhost:8080';

class App extends Component {


  handleChange=(e)=>
  {
    if(e.target.value !== '')
    {
      this.search(e.target.value);
    }else
    {
      this.getAmiiboCards();
    }

  }

  getAmiiboCards=()=>
  {
    axios.get(`${backend}/amiibo/`).then(res=>{
        this.props.getAmiiboCards(res.data.data.docs);
        this.props.getTotalCardsNumber(res.data.data.total);

      }).catch((err)=>{
        console.log('ERRROR',err);
      });
  }


  search=(search)=>
  {
    axios.get(`${backend}/amiibo/search?search=${search}`).then(res=>{
         this.props.getAmiiboCards(res.data.data.docs);
         this.props.getTotalCardsNumber(res.data.data.total)
      }).catch((err)=>{
        console.log('ERRROR',err);
      });
  }

  componentDidMount(){
    this.getAmiiboCards();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="topnav">
          <h3>AMIIBOS</h3>
            <div className="search-container">
            <input type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
            </div>
          </div>
        </header>
        <div className="sidenav">
           User Data
           <h3>Mario</h3>
           <h4>Total Cards : {this.props.total}</h4>
           <h4>Visible Cards :{this.props.amiibos.length}</h4>
        </div>
        {
          this.props.amiibos.length === 0 ? <h4>No cards match search </h4> :
          this.props.amiibos.map(amiibo =>{
           return <Amiibo key={amiibo._id} amiibo={amiibo}/>
          })
        }


      </div>
    );
  }
}

const mapStateToProps=(state)=>{
 return {
   amiibos: state.amiibos,
   total: state.total
 }
};


const mapDispatchToProps = (dispatch) => ({
  getAmiiboCards: (cards) => dispatch(getAmiiboCards(cards)),
  getTotalCardsNumber:(num)=>dispatch(getTotalCardsNumber(num))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
