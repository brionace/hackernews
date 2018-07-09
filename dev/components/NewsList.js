import React from 'react';
import Item from './News';

class List extends React.Component{
	
  constructor(props) {
    super(props);
    this.state = {
	  active: null,
	  limit: 24,
	  max: 500,
      loading: false,
	  btn: 'loading...'	
    };
  }
	
	componentDidMount(){
        this.setState({
            btn: this.moreButton()
        });		
	}

	handleClick = (id) => {
		this.setState({ active: id });			
	}	
	
	moreButton(){
		return <button onClick={this.onLoadMore} className="articles-more__button">Load More</button>;
	}
	
    onLoadMore = () => {
        this.setState({
            limit: this.state.limit + 24
        });
    }

  render(){
	  
	const { limit, loading, max, active } = this.state; 
	const { items } = this.props;
	console.log(items)
		  
	let display = items.slice(0,limit).map((item, index) => {
		return <Item key={item} item={item} handleClick={this.handleClick} />
	});
	  
	let more = ( limit < max ) ? this.moreButton() : <p>Thats it!</p>;  
	
	if( !items ) return <p className="loading">loading...</p>  

    return (
      <section className="articles__wrapper">
        <div className="articles">
			{display}
        </div>
		<div className="articles-more">{this.state.btn}</div>
      </section>
    )
  }
};

export default List;