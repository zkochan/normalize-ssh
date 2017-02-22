'use strict'
const test = require('tape')
const normalizeSshUrl = require('.')

test('normalize-ssh-url', t => {
  t.equal(normalizeSshUrl('someone@quz.com:foo/bar'), 'ssh://someone@quz.com:22/foo/bar')
  t.equal(normalizeSshUrl('ssh://someone@quz.com:foo/bar'), 'ssh://someone@quz.com:22/foo/bar')
  t.equal(normalizeSshUrl('ssh://someone@quz.com:66/foo/bar'), 'ssh://someone@quz.com:66/foo/bar')
  t.equal(normalizeSshUrl('ssh://git@github.com/kaelzhang/node-ssh-url.git'), 'ssh://git@github.com:22/kaelzhang/node-ssh-url.git')
  t.end()
})

test('throw error if invalid SSH URL passed in', t => {
  t.throws(() => normalizeSshUrl('https://github.com'), /Invalid SSH URL/)
  t.end()
})
