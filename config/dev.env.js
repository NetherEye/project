'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // TOKENAPI: '"http://172.16.2.188:8090"',
  // LOCALTOKEN: false
})
