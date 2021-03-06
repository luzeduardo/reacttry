// Todo actions
import AppDispatcher from '../dispatcher/AppDispatcher';
import { TodoConstants } from '../constants/TodoConstants';
import { getLooApi } from '../utils/LooAPI';

export function sendCvv() {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.SEND_CVV,
  });
}

export function addItem() {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.NEW_ITEM,
  });
}

export function saveItem(text) {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.SAVE_ITEM,
    text: text,
  });
}

export function removeItem(index) {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.REMOVE_ITEM,
    index: index,
  });
}

export function getRandom() {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.GET_RANDOM,
  });

  getLooApi();
}

