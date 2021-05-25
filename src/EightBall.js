import React, { useState } from 'react';
import { getRandom } from './randomNum';
import './EightBall.css';

/** EightBall
 *
 * Props:
 * - answers
 *
 * State:
 * - answer
 * - color
 *
 * App -> EightBall
 */
function EightBall(props) {
  const { answers } = props;

  const [answer, setAnswer] = useState('Think of a question');
  const [color, setColor] = useState('black');
  //console.log("getrandom= ", typeof getRandom)
  function handleClick() {
    console.log('clicked');

    let randomIdx = getRandom(answers.length);
    setAnswer(answers[randomIdx].msg); //
    setColor(answers[randomIdx].color);
  }

  return (
    <div className="EightBall-container">
      <div
        className="Eight-ball"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <h2>{answer}</h2>
      </div>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: 'It is certain.', color: 'green' },
    { msg: 'It is decidedly so.', color: 'green' },
    { msg: 'Without a doubt.', color: 'green' },
    { msg: 'Yes - definitely.', color: 'green' },
    { msg: 'You may rely on it.', color: 'green' },
    { msg: 'As I see it, yes.', color: 'green' },
    { msg: 'Most likely.', color: 'green' },
    { msg: 'Outlook good.', color: 'green' },
    { msg: 'Yes.', color: 'green' },
    { msg: 'Signs point to yes.', color: 'goldenrod' },
    { msg: 'Reply hazy, try again.', color: 'goldenrod' },
    { msg: 'Ask again later.', color: 'goldenrod' },
    { msg: 'Better not tell you now.', color: 'goldenrod' },
    { msg: 'Cannot predict now.', color: 'goldenrod' },
    { msg: 'Concentrate and ask again.', color: 'goldenrod' },
    { msg: "Don't count on it.", color: 'red' },
    { msg: 'My reply is no.', color: 'red' },
    { msg: 'My sources say no.', color: 'red' },
    { msg: 'Outlook not so good.', color: 'red' },
    { msg: 'Very doubtful.', color: 'red' },
  ],
};

export default EightBall;
