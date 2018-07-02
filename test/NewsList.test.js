import React from 'react';
import {shallow} from 'enzyme';
import NewsList from './NewsList';

let mockNews, wrapper;
beforeEach(() => {
  mockNews = [
        {id: 1, score:'1', by: 'Biran', title: 'VAR is kicking the game', text:'This text is so long... i cant think of anything realy'},
        {id: 2, score:'10', by: 'Yeezy', title: 'I am watching the World Cup', text:'This text is so long... i cant think of anything realy'},
        {id: 3, score:'34', by: 'Finely', title: 'Whats a game Kasper Schmichael saves the penalty', text:'This text is so long... i cant think of anything realy'},
  ];
  wrapper = shallow(<NewsList news={mockNews}/>);
});
	
it('should render an <article> element for every news in `props.news`', () => {
  expect(wrapper.find('article').length).toEqual(mockNews.length);
});
it('should display the score in each `<article>` element', () => {
  const firstElement = wrapper.find('article').first();
  expect(firstElement.contains(mockNews[0].score)).toEqual(true);
});
it('should display the author in each `<article>` element', () => {
  const firstElement = wrapper.find('article').first();
  expect(firstElement.contains(mockNews[0].by)).toEqual(true);
});
it('should display the title in each `<article>` element', () => {
  const firstElement = wrapper.find('article').first();
  expect(firstElement.contains(mockNews[0].title)).toEqual(true);
});	
it('should display the text in each `<article>` element', () => {
  const firstElement = wrapper.find('article').first();
  expect(firstElement.contains(mockNews[0].text)).toEqual(true);
});	