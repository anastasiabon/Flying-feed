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
    {
      name: 'pikabu2',
      added: true,
    },
    {
      name: 'bash.org2',
      added: false,
    },
    {
      name: 'dva42',
      added: false,
    },
    {
      name: 'lenta.ru2',
      added: false,
    },
    {
      name: 'rbk2',
      added: true,
    },
    {
      name: 'lepra2',
      added: true,
    },
    {
      name: 'pikabu3',
      added: true,
    },
    {
      name: 'bash.org3',
      added: false,
    },
    {
      name: 'dva43',
      added: false,
    },
    {
      name: 'lenta.ru3',
      added: false,
    },
    {
      name: 'rbk3',
      added: true,
    },
    {
      name: 'lepra3',
      added: true,
    },
    {
      name: 'pikabu4',
      added: true,
    },
    {
      name: 'bash.org4',
      added: false,
    },
    {
      name: 'dva44',
      added: false,
    },
    {
      name: 'lenta.ru4',
      added: false,
    },
    {
      name: 'rbk4',
      added: true,
    },
    {
      name: 'lepra4',
      added: true,
    },
    {
      name: 'pikabu5',
      added: true,
    },
    {
      name: 'bash.org5',
      added: false,
    },
    {
      name: 'dva45',
      added: false,
    },
    {
      name: 'lenta.ru5',
      added: false,
    },
    {
      name: 'rbk5',
      added: true,
    },
    {
      name: 'lepra5',
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