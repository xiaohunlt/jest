/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

jest.mock('../');

const importedFn = require('../');
const localFn = jest.fn(() => 'abcd');

describe('without an explicit reset', () => {
  test('first test', () => {
    importedFn();
    expect(localFn()).toEqual('abcd');

    expect(importedFn.mock.calls.length).toBe(1);
    expect(localFn.mock.calls.length).toBe(1);
  });

  test('second test', () => {
    importedFn();
    expect(localFn()).toEqual('abcd');

    expect(importedFn.mock.calls.length).toBe(2);
    expect(localFn.mock.calls.length).toBe(2);
  });
});

describe('with an explicit reset', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('first test', () => {
    importedFn();
    expect(localFn()).toEqual('abcd');

    expect(importedFn.mock.calls.length).toBe(1);
    expect(localFn.mock.calls.length).toBe(1);
  });

  test('second test', () => {
    importedFn();
    expect(localFn()).toEqual('abcd');

    expect(importedFn.mock.calls.length).toBe(1);
    expect(localFn.mock.calls.length).toBe(1);
  });
});
