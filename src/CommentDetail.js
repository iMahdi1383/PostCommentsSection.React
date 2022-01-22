import React from "react";

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                {/* use this instead of 'faker.image.avatar()' */}
                {/* <img alt="avatar"  src="https://source.unsplash.com/random/50x50/?avatar" /> */}
                <img alt="avatar" src="https://i.pravatar.cc/50" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Mahdi
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};

export default CommentDetail;
