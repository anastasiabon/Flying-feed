import {fork, put, takeLatest, select} from 'redux-saga/effects'

const limit = 30

const getData = (url, method) => fetch(url, method).then(res => res.json())
const postAdmin = (body) => {
	const data = new FormData();
	data.append('parsedSite', body.parsedSite)
	data.append('containerSelector',  body.containerSelector)
	data.append('bodySelector', body.bodySelector)
	data.append('metaSelector', body.metaSelector)
	data.append('baseEncoding', body.baseEncoding)

	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'http://192.168.1.5:5001/api/values', true)
	xhr.onload = function () {
	    // do something to response
	    // console.log(this.responseText);
	}
	xhr.send(data)
}

function* fetchData() {
	yield put({
		type: 'WAITING_FOR_DATA',
		reducer: 'appReducer'
	})

	const currentList = yield select(state => state.listReducer.list)
	const startIndex = currentList.length + 1
	const lastIndex = currentList.length + limit
	const method = {method: 'GET'}
	const result = yield getData(`http://192.168.1.5:5001/api/values?startIndex=${startIndex}&lastIndex=${lastIndex}`, method)

	const list = result.map((item, index) => {
		const entry = {
			...item,
			id: index + currentList.length,
			isCollapsed: true
		}
		return entry
	})
	yield put({
		type: 'DATA_LOADING',
		value: list,
		reducer: 'listReducer'
	})
	yield put({
		type: 'DATA_LOADED',
		value: list.length < limit,
		reducer: 'appReducer'
	})
}

function* submitAdmin() {
	const {
		parsedSite,
		containerSelector,
		bodySelector,
		metaSelector,
		baseEncoding
	} = yield select(state => state.appReducer)
	const body = {
		parsedSite,
		containerSelector,
		bodySelector,
		metaSelector,
		baseEncoding
	}
	const request = yield postAdmin(body)
}

function* saga() {
	yield [
		fork(fetchData),
		takeLatest('LOAD_ENTRIES', fetchData),
		takeLatest('SUBMIT', submitAdmin),
	]
}

export default saga