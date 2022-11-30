# purescript-bignumber

Bindings to [bignumber.js](https://github.com/MikeMcl/bignumber.js/).

Forked version that is used in `purescript-aeson`. Changes:

- removed global configuration options (`ConfigParams`) (they break referential transparency)
- Removed use of `native-tuples` (outdated package)
