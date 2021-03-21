const { ModuleResolutionKind } = require('typescript')

require('dotenv').config()

ModuleResolutionKind.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  }
}