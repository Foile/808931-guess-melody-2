import React from 'react';
import renderer from "react-test-renderer";
import GenreQuestionScreen from './genre-question-screen';

const questionMock = {
  "type": `genre`,
  "genre": `reggae`,
  "answers": [
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Addis_Ababa.mp3`,
      "genre": `reggae`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Azure.mp3`,
      "genre": `electronic`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Whaling_City.mp3`,
      "genre": `country`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Skanada.mp3`,
      "genre": `reggae`
    }
  ]
};

it(`GenreQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GenreQuestionScreen
    question={questionMock}
    screenIndex={0}
    onAnswer={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
