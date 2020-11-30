export default {
  target: 'static',
  generate: {
    async routes() {
      return [{
        route: '/',
        payload: {
          name: 'wibble'
        }
      }]
    }
  }
}
