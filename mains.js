  new Vue({
    el: '#app',
    data() {
      return {
        info: '',
        logradouro: '',
      }
    },
    methods: {
      buscaCep: function () {
        axios.get('https://jsonplaceholder.typicode.com/users/')
          .then(resp => {
            console.log(resp.data);
            this.logradouro = resp.data.name;
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    mounted() {
      axios
        .get('https://api.sheety.co/63b0f868-ffd5-49a5-834d-7780462e470c')
        .then(response => (this.info = response.data))
    }
  })