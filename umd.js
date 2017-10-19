(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD Module
    define(factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node Module
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    root.css = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // body...

  return {}
}))
