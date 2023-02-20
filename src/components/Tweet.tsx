import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/htdamasio.png" alt="Henrique Tomé"/>
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Henrique Tomé</strong>
          <span>@htdamasio</span>
        </div>

        <p>{props.content}</p>
        
        <div className="tweet-content-footer">
          <button type="button" className="coments">
            <ChatCircle />
            20
          </button>
          <button type="button" className="retweets">
            <ArrowsClockwise />
            20
          </button>
          <button type="button" className="likes">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}