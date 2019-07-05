import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import reply from '../icon/reply.svg';
import heart from '../icon/heart.svg';
import heart_liked from '../icon/heart_liked.png';

const TweetListGuest = (props) => {

	
	const tweetList = props.allTweets.map((tweet) => {

			return(
				<TransitionGroup key={tweet._id} className="tweetList">
				<CSSTransition timeout={500} classNames="fade">
				<ListGroupItem >
					
						<div className="row row-top">
							<div className="col col-3">
								<img alt='user profile' className="user-img" src='https://react.semantic-ui.com/images/wireframe/image.png'/>
							</div>
							<div className="col col-6">
								<p className="tweet-username">{tweet.tweetedBy}</p>
							</div>
							<div className="col col-3">
								<h4 onClick={props.deleteTweet.bind(this, tweet._id)}>...</h4>
								
							</div>
						</div>
						<p className="divider"></p>
						
							<div className="row tweet-main row-middle">
								
								<p>{tweet.main}</p>
							</div>
						
						<div className="row row-bottom">
							<div className="col col-8">
								<p className="tweet-date">{tweet.date}</p>
							</div>
							<div className="col col-4 icons-container">
								<img alt="reply" className="tweet-icon" src={reply} />
								<p>{tweet.reply.length}</p>
								<img alt="reply" className="tweet-icon" src={heart} />
								<p>14</p>
							</div>
						</div>
				
				</ListGroupItem>
				</CSSTransition>
				</TransitionGroup>
			)			
	})
	return(
		<ListGroup>
			<h2>TweetListGuest</h2>
			<div>
				{tweetList}
			</div>
		</ListGroup>
	)	
}


export default TweetListGuest;
