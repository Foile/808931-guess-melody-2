import React from 'react';
import renderer from "react-test-renderer";
import GenreQuestionScreen from './genre-question-screen';

const questionMock = {
  "type": `genre`,
  "genre": `reggae`,
  "answers": [
    {
      "id": `1`,
      "src": `https://downloader.disk.yandex.ru/disk/7b0265f331c834144c33df73c550ac137ac2b65d5d4a03b74d96583d2e9cf45c/5dbb40bb/D75tJ8SswLxGnB1pK1Ggh8lohoIhJaDKjXUeyjW81sgdeVvckTpoZM5cmbdWzHgVxrMyDam1YxCud4B0brKbcw%3D%3D?uid=0&filename=Rag%27n%27Bone%20Man%20-%20Human.mp3&disposition=attachment&hash=csthsKBvhExWKv2l5XLuQcKxx568txk6duccdRVY7OJo6lJ/ru0gzNUNrCHmOfHCq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=audio%2Fmpeg&owner_uid=25986678&fsize=4849462&hid=cad1e790ef4a7ccb469643623399a07f&media_type=audio&tknv=v2`,
      "genre": `reggae`
    },
    {
      "id": `2`,
      "src": `https://downloader.disk.yandex.ru/disk/9ca0c3b081820af1c622db364de558212d933ef5b21afc36e4c8522cf5b55fd9/5dbb4070/D75tJ8SswLxGnB1pK1Ggh0YigNy-LtnFLxYDjuyaW1l_wCCJTW6BZ6Qke27T4ocImTdDut64f_niPZpeNhDHcA%3D%3D?uid=0&filename=Billie%20Eilish%20-%20bad%20guy.mp3&disposition=attachment&hash=K3JGpfeYL7QnBpyJRsr8uIkZxW7Axw4ff4sHq6GwSbuUP1Et83QfPcuTGnlTA5vxq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=audio%2Fmpeg&owner_uid=25986678&fsize=4682015&hid=3b933735568a7212275ae2b2f92029bc&media_type=audio&tknv=v2`,
      "genre": `electronic`
    },
    {
      "id": `3`,
      "src": `https://downloader.disk.yandex.ru/disk/9c28dd9f5c8c21dfa5e5ff875ed35451bdc4776445d929afc0a4ac04b2ee071e/5dbb3fed/D75tJ8SswLxGnB1pK1Ggh9154vhLB-f6YrSWrC7D81_oWEBpbpz7gYy47xLk5qzzWI_Yvp2cTCWqBUeB7WzcSg%3D%3D?uid=0&filename=Amy%20Macdonald%20-%20This%20Is%20The%20Life.mp3&disposition=attachment&hash=0qzv7bT9iV3yvtlnw0R0BWPZyNMGcvHbjCpCVmmuUtzT/3ivBIGNuDquSamQzVmZq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=audio%2Fmpeg&owner_uid=25986678&fsize=4506193&hid=354ba3ad2f3fadc3330c6c34768e6dbe&media_type=audio&tknv=v2`,
      "genre": `country`
    },
    {
      "id": `4`,
      "src": `https://downloader.disk.yandex.ru/disk/04cc81f31db2153e5b178fdaf2d388b08d7f9b0bcf8b1862249c18a62925137d/5dbb4040/q_BeN-hx039Nx_tW2a0-9l2FPkm7wiODWzFd1XI1K6oRTNOOBDUxAsotZyQLFMjMyr-Mln4wp_pRXUCP2mWH4Q%3D%3D?uid=0&filename=Barns%20Courtney%20-%20Glitter%20%26%20Gold.mp3&disposition=attachment&hash=nLygC6c8Rxe/J08DyfRdqmXZlsPknN/AEHiZWcsA/rCGevfWTinOB7tahcLdVo8Zq/J6bpmRyOJonT3VoXnDag%3D%3D&limit=0&content_type=audio%2Fmp3&owner_uid=25986678&fsize=4290846&hid=ff7c5ea6f399c7f3828c2064f728923e&media_type=audio&tknv=v2`,
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
