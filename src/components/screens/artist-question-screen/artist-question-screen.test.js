
import React from 'react';
import renderer from "react-test-renderer";
import ArtistQuestionAcreen from './artist-question-screen';

const questionMock = {
  "type": `artist`,
  "song": {
    "artist": `Quincas Moreira`,
    "src": `https://downloader.disk.yandex.ru/disk/708f2a39b61cd9a01b7e2e6d49de9ffaa831a0dff078d56282d4d1bbc808f5af/5dbb2828/HHdTyAxfdGq5Yrm8EzXG0xdM-9jC3-mWA5TCAiWJUkPDNyuCrmoIZArc2TYKYtAyHH3NeQQjZBMKbim3SfUI6g%3D%3D?uid=0&filename=Three%20Days%20Grace%20-%20Animal%20I%20Have%20Become.mp3&disposition=attachment&hash=xQM7/CqqnBR9OF/Ar/mH91rH8K8v/mxWWsUgMW2U9LQj2urSoX7HiIRCyh3cFSOzq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=audio%2Fmpeg&owner_uid=25986678&fsize=9343104&hid=5d4ec3ef32a9b2630887c70fc9bb8449&media_type=audio&tknv=v2`
  },
  "answers": [
    {
      "id": `1`,
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg`,
      "artist": `Quincas Moreira`
    },
    {
      "id": `2`,
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Density_n_Time.jpg`,
      "artist": `Density & Time`
    },
    {
      "id": `3`,
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Endless_Love.jpg`,
      "artist": `Endless Love`
    }
  ]
};


it(`ArtistQuestionAcreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<ArtistQuestionAcreen
    question={questionMock}
    screenIndex={0}
    onAnswer={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
