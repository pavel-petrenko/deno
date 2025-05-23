// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
const common = require('../common');
const fixtures = require('../common/fixtures');
const assert = require('assert');
const fs = require('fs');
const filepath = fixtures.path('x.txt');
const fd = fs.openSync(filepath, 'r');
const bufferAsync = Buffer.alloc(0);
const bufferSync = Buffer.alloc(0);

fs.read(fd, bufferAsync, 0, 0, 0, common.mustCall((err, bytesRead) => {
  assert.strictEqual(bytesRead, 0);
  assert.deepStrictEqual(bufferAsync, Buffer.alloc(0));
}));

const r = fs.readSync(fd, bufferSync, 0, 0, 0);
assert.deepStrictEqual(bufferSync, Buffer.alloc(0));
assert.strictEqual(r, 0);
