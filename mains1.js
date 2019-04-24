  new Vue({
    el: '#app',
    data() {
      return {
        info: '',
        produto: '',
      }
    },
    methods: {
      buscaProduto: function () {
        axios.get('http://sandbox-api.lomadee.com/v2/1548274999869d74cbd8d/product/_search?sourceId=35561801&keyword=' + this.produto)
        .then(response => (this.info = response.data.products))
      }
    }
  })
