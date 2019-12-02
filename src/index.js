import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail'

const App = () => {
return (
<div className="ui container comments">
<CommentDetail author="SAm" />
<CommentDetail author="Alex" />
<CommentDetail author="Jane" />
</div>
);
};
ReactDOM.render(<App />,document.querySelector('#root'));