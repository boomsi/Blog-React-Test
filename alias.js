const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

export const alias = {
  "@pages": resolve('./src/pages'),
  "@api": resolve('./api'),
  "@components": resolve('./src/components'),
  "@untils": resolve('./untils'),
}