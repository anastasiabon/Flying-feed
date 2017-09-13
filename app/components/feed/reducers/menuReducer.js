const menuInitial = {
  sources: [
    {
      name: 'pikabu',
      added: true,
    },
    {
      name: 'bash.org',
      added: false,
    },
    {
      name: 'dva4',
      added: false,
    },
    {
      name: 'lenta.ru',
      added: false,
    },
    {
      name: 'rbk',
      added: true,
    },
    {
      name: 'lepra',
      added: true,
    },
  ],
}

const menuReducer = (state = menuInitial, action) => {
  const {value, reducer, type} = action

  if (reducer !== 'menuReducer') {
    return state
  }

  switch (type) {
    case 'TOGGLE_CHECKBOX':
      const updatedSources = state.sources.map(item => {
        if (item.name === value) {
          return {...item, added: !item.added}
        }
        return item
      })
      return {
        ...state,
        sources: updatedSources
      }
    default:
      return state
  }
}

export default menuReducer