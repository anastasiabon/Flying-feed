const appInitial = {
	dataLoaded: true,
	noEntries: false,
	parsedSite: '',
	containerSelector: '',
	bodySelector: '',
	metaSelector: '',
	baseEncoding: '',
}

const appReducer = (state = appInitial, action) => {
	const {reducer, value, type} = action

	if (reducer !== 'appReducer') {
		return state
	}

	switch (type) {
		case 'WAITING_FOR_DATA':
			return {
				...state,
				dataLoaded: false,
			}
		case 'DATA_LOADED':
			return {
				...state,
				dataLoaded: true,
				noEntries: value,
			}
		case 'CHANGE_VALUE':
			return {
				...state,
				[value.id]: value.value
			}
		default:
			return state
	}
}

export default appReducer