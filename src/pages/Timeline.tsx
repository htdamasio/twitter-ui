import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Timeline.css'

export function Timeline() {

  const [tweets, setTweets] = useState([
    'A simple tweet!',
    'It seams that this works',
    'Just a simple test'
  ]);

  const [newTweet, setNewTweet] = useState('');

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    if (newTweet != '') {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      if (newTweet != '') {
        setTweets([newTweet, ...tweets]);
        setNewTweet('');
      }
    }
  }
  
  return (
    <main className="timeline">
      <Header title="Home"/>
      
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/htdamasio.png" alt="Henrique Tomé"/>
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {setNewTweet(event.target.value)}}  
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  );
}