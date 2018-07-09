import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsList from './components/NewsList';
import base from './rebase';

class App extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
	  list: [],
      loading: true,
    };
  }
	
componentWillMount(){
  base.fetch('/v0/newstories', {
    context: this,
    asArray: true,
	  then(data) {
		this.setState({ loading: false, list: data });
	  }
  });
}
	

  render(){
	  return(
		<div className="app__container">
		  	<header className="header">
		  		<div className="header__name">
		  			<a href="/">Hacker News</a>
		  		</div>
		    </header>
			<main className="main">
			  <NewsList items={this.state.list} />
			</main>
		    <footer className="footer"><p>With love</p></footer>
		</div>  
	  )
  }
};

export default App;