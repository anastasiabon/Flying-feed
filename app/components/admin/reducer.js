const fakeData = [
  {
    parsedSite: 'pikabu',
    containerSelector: 'div',
    bodySelector: 1,
    metaSelector: 2,
    baseEncoding: 3,
  },
  {
    parsedSite: 'bash.org',
    containerSelector: 'span',
    bodySelector: 12,
    metaSelector: 22,
    baseEncoding: 32,
  },
  {
    parsedSite: 'dva4',
    containerSelector: 'div',
    bodySelector: 13,
    metaSelector: 23,
    baseEncoding: 33,
  },
  {
    parsedSite: 'lepra',
    containerSelector: 'p',
    bodySelector: 14,
    metaSelector: 24,
    baseEncoding: 34,
  },
]

const appInitial = {
  data: fakeData,
  value: {
    parsedSite: '',
    containerSelector: '',
    bodySelector: '',
    metaSelector: '',
    baseEncoding: '',
  },
  selected: '',
  siteIsAdding: false,
  isChanged: false,
}

const reducer = (state = appInitial, action) => {
  const {value, type} = action;

  switch (type) {
    case 'SELECT':
      return {
        ...state,
        selected: value,
        siteIsAdding: false,
      }
    case 'CHANGE_VALUE':
      if (state.siteIsAdding) {
        return {
          ...state,
          value: {
            ...state.value,
            [value.id]: value.value,
          },
          isChanged: true,
        }
      }
      return {
        ...state,
        selected: {
          ...value.site,
          [value.id]: value.value,
        },
        isChanged: true,
      }
    case 'ADD_SITE':
      return {
        ...state,
        siteIsAdding: true,
      }
    case 'SUBMIT':
      return {
        ...state,
        isChanged: false,
      }
    default:
      return state;
  }
};

export default reducer;
