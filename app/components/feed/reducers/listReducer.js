const listInitial = {
	collapsed: true,
	list: [],
}

const listReducer = (state = listInitial, action) => {
	const {value, reducer, type} = action

	if (reducer !== 'listReducer') {
		return state
	}

	switch (type) {
		case 'DATA_LOADING':
			return {
				...state,
				list: [...state.list, ...value],
			}
		case 'TOGGLE_ITEM':
			const updatedList = state.list.map(item => {
				if (item.id === value) {
					return {...item, isCollapsed: !item.isCollapsed}
				}
				return item
			})
			return {
				...state,
				list: updatedList
			}
		default:
			return state
	}
}

export default listReducer