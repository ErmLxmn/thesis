const path = require('path')

function render(view) {
  return path.resolve(__dirname, '../public/views/', view)
}

module.exports = render
