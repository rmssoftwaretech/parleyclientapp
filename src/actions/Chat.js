import ChatUserApi from '../api/mockChatUsersApi';
import ConversationListApi from '../api/mockConversationListApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

import {
  FETCH_ALL_CHAT_USER,
  FETCH_ALL_CHAT_USER_CONVERSATION,
  FETCH_ALL_CHAT_USER_CONVERSATION_SUCCESS,
  FETCH_ALL_CHAT_USER_SUCCESS,
  FILTER_CONTACT,
  FILTER_USERS,
  ON_HIDE_LOADER,
  ON_SELECT_USER,
  ON_TOGGLE_DRAWER,
  SHOW_MESSAGE,
  SUBMIT_COMMENT,
  UPDATE_MESSAGE_VALUE,
  UPDATE_SEARCH_CHAT_USER,
  USER_INFO_STATE
} from 'constants/ActionTypes';

export const fetchChatUser = () => {
   return function (dispatch) {
    dispatch(beginAjaxCall());
    return ChatUserApi.fetchChatUser().then(chatUsers => {
      dispatch(fetchChatUserSuccess(chatUsers));
    }).catch(error => {
      throw(error);
    });
  };
};

export const fetchChatUserConversation = () => {
   return function (dispatch) {
    dispatch(beginAjaxCall());
    return ConversationListApi.fetchChatUserConversation().then(chatUserConversation => {
      dispatch(fetchChatUserConversationSuccess(chatUserConversation));
    }).catch(error => {
      throw(error);
    });
  };
};


export const fetchChatUserSuccess = (chatUsers) => {
  return {
    type: FETCH_ALL_CHAT_USER_SUCCESS,
    payload: chatUsers
  }
};
export const fetchChatUserConversationSuccess = (chatUserConversation) => {
  return {
    type: FETCH_ALL_CHAT_USER_CONVERSATION_SUCCESS,
    payload: chatUserConversation
  }
};

export const showChatMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};

export const filterContacts = (userName) => {
  return {
    type: FILTER_CONTACT,
    payload: userName
  };
};

export const filterUsers = (userName) => {
  return {
    type: FILTER_USERS,
    payload: userName
  };
};


export const onSelectUser = (user) => {
  return {
    type: ON_SELECT_USER,
    payload: user
  };
};

export const submitComment = () => {
  return {
    type: SUBMIT_COMMENT,
  };
};

export const hideLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};

export const userInfoState = (state) => {
  return {
    type: USER_INFO_STATE,
    payload: state
  };
};

export const updateMessageValue = (message) => {
  return {
    type: UPDATE_MESSAGE_VALUE,
    payload: message
  };
};


export const updateSearchChatUser = (userName) => {
  return {
    type: UPDATE_SEARCH_CHAT_USER,
    payload: userName
  };
};
export const onChatToggleDrawer = () => {
  return {
    type: ON_TOGGLE_DRAWER
  };
};