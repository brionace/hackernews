import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import ArrowGif from '../images/grayarrow2x.gif';

function txt(text){
	return {__html: text}
}

function stripHtml(html){
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

class Item extends React.Component{
	
  constructor(props) {
    super(props);
    this.state = {
	  id: null,
	  content: [],
	  active: false
    };	  
  }	
	
	componentWillMount(){
		this.setState({
		  id: this.props.item
		});			
	}
	
	getItem(item){	  
		fetch('https://hacker-news.firebaseio.com/v0/item/'+item+'.json')
		  .then((response) => response.json())
		  .then((responseJson) => {
			this.setState({
			  content: responseJson
			});	
		  })
		  .catch((error) =>{
			console.error(error);
		  });		
	}	
	
	componentDidMount(){
		let item = this.props.item;
		this.getItem(item);
	}	
	
	handleClick(e,id) {
    e.preventDefault();
    	this.props.handleClick(id);		
		this.setState({active: !this.state.active});
  	}	
	
	
  render(){
	const {active,content,id} = this.state;
	if(!content) return null
	
	let cnt = '';
	cnt = content;
	
	let text = '';  
	text = cnt.text ? stripHtml(cnt.text) : '';
	
	let showTitle = '';
	let title = <LinesEllipsis text={cnt.title} maxLine='2' ellipsis='...' trimRight basedOn='letters'/>
	showTitle = (active) ? cnt.title : title;
	  
	let showAuthor = '';
	let author = <LinesEllipsis text={"By "+cnt.by} maxLine='1' ellipsis='...' trimRight basedOn='letters'/>
	showAuthor = (active) ? "By "+cnt.by : author;	  
	
	let showContent = '';
	let _content = <LinesEllipsis text={text} maxLine='4' ellipsis='...' trimRight basedOn='letters' className="article__content"/>
	showContent = (active) ? <div dangerouslySetInnerHTML={txt(cnt.text)} /> : _content;
	
	let anchor  = (active) ? <p className="article__externalUrl">{cnt.url}</p> : '';
	
    return (
		<article onClick={(e) => this.handleClick(e,cnt.id)} className={ active ? "article active" : "article" }>
			<span className="article__score"><img src={ArrowGif} />{cnt.score}</span>	 
			<div className="article__wrapper">
				<div className="article__title"><h3>{showTitle}</h3></div>	
				{cnt.by ? <div className="article__author">{showAuthor}</div>: ''}
				<div className="article__content">{showContent}</div>
				{anchor}
			</div>
		</article>
    )
	
  }
};

export default Item;