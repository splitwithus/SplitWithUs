import * as types from '../constants/actionTypes';

const initialState = {
  'video': ['Netflix', 'Hulu'],
  'music': ['Spotify', 'Pandora']
};

const productServices = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        posts: action.posts,
        lastUpdated: action.receivedAt
      });
    case 'TEST':
      console.log('TEST WAS DISPATCH YAY');
      return {
        ...state,
        shopping: ['Amazon', 'eBay']
      };
    default:
      return state;
  }
};

export default productServices;
