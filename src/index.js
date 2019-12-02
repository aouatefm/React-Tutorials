import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="SAm"
                    timeAgo="Today At 6:00PM"
                    content="Nice Blog Post !"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today At 5:00AM"
                content="Nice Comment !"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Today At 7:00PM"
                content="Good !"
                avatar={faker.image.avatar()} />
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));