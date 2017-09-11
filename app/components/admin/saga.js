import {fork} from 'redux-saga/effects';

function* fetchUser() {
  console.log(111)
}

function* saga() {
  document.title = 'Admin page';
  yield [
    fork(fetchUser),
  ];
}

export default saga;
