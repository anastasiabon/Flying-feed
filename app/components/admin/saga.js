import {fork} from 'redux-saga/effects';

function* fetchUser() {
  console.log(111)
}

function* saga() {
  document.title = 'fgfgfgfgf';
  yield [
    fork(fetchUser),
  ];
}

export default saga;
