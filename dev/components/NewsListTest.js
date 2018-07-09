import React from 'react';
function NewsListTest (props) {
  return (
    <div>
      {
        props.news.map(data => {
          <article key={data.id}>
            {data.title}
          </article>
	  });
      }
    </div>
  )
}

NewsListTest.propTypes = {
  news: React.PropTypes.array.isRequired
};

export default NewsListTest;