# normalize-ssh-url

> Normalize a SSH URL

[![npm version](https://img.shields.io/npm/v/normalize-ssh-url.svg)](https://www.npmjs.com/package/normalize-ssh-url) [![Build Status](https://img.shields.io/travis/zkochan/normalize-ssh-url/master.svg)](https://travis-ci.org/zkochan/normalize-ssh-url)

## Installation

```
npm i -S normalize-ssh-url
```

## Usage

```js
const normalizeSshUrl = require('normalize-ssh-url')

normalizeSshUrl('git@gitlab.domain.tld:myproject/myrepo.git')
//> ssh://git@gitlab.domain.tld:22/myproject/myrepo.git
```

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
