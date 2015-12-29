/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationAction
 * @flow
 */
'use strict';

var NavigationStack = require('./NavigationStack');

class NavigationAbstractAction {}

class NavigationPushAction extends NavigationAbstractAction {
  _route: any;
  constructor(route: any) {
    super();
    this._route = route;
  }
  getRoute(): any {
    return this._route;
  }
}

class NavigationPopAction extends NavigationAbstractAction {}

class NavigationJumpToAction extends NavigationAbstractAction {
  _route: any;
  constructor(route: any) {
    super();
    this._route = route;
  }
  getRoute(): any {
    return this._route;
  }
}

class NavigationResetAction extends NavigationAbstractAction {
  _stack: NavigationStack;
  constructor(stack: NavigationStack) {
    super();
    this._stack = stack;
  }
  getStack(): NavigationStack {
    return this._stack;
  }
}

class NavigationOnRouteNavigationStackAction extends NavigationAbstractAction {
  _action: NavigationAbstractAction;
  _route: any;
  constructor(route: any, action: NavigationAbstractAction) {
    super();
    this._route = route;
    this._action = action;
  }
  getRoute(): any {
    return this._route;
  }
  getAction(): NavigationAbstractAction {
    return this._action;
  }
}

var NavigationAction = {};
NavigationAction.Abstract = NavigationAbstractAction;
NavigationAction.Push = NavigationPushAction;
NavigationAction.Pop = NavigationPopAction;
NavigationAction.JumpTo = NavigationJumpToAction;
NavigationAction.Reset = NavigationResetAction;
NavigationAction.OnRouteNavigationStack = NavigationOnRouteNavigationStackAction;

module.exports = NavigationAction;
