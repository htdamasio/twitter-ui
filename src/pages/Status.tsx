import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Status.css'
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [answers, setAnswers] = useState([
    'Agreed...',
    'It really makes sense!',
    'wow, this looks amazing'
  ]);

  const [newAnswer, setNewAnswer] = useState('');

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    if (newAnswer != '') {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      if (newAnswer != '') {
        setAnswers([newAnswer, ...answers]);
        setNewAnswer('');
      }
    }
  }

  return (
    <main className="status">
      <Header title="Tweet"/>
      
      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos reiciendis rem aut eum amet quaerat ab iure, ipsum nihil minima vel animi repellat, sapiente aspernatur deleniti blanditiis explicabo possimus non."/>
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/htdamasio.png" alt="Henrique Tomé"/>
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {setNewAnswer(event.target.value)}}  
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>
            Answer
          </span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  );
}