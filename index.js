'use strict'
const parseUrl = require('parse-url')

module.exports = function (ssh) {
  const parsedUrl = parseUrl(ssh)
  const port = parsedUrl.port || '22'
  return `${parsedUrl.protocol}://${parsedUrl.user}@${parsedUrl.resource}:${port}${parsedUrl.pathname}`
}
