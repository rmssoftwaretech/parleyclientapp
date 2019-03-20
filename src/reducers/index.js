import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import ChatData from './Chat';
import Settings from './Settings';


export default (history) => combineReducers({
  chatData: ChatData,

  router: connectRouter(history),
  settings: Settings,

});
