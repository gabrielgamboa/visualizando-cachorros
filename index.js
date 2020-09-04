const numDogs = window.prompt("Digite o número de cachorros que deseja ver")

new Vue({
    el: '#app',
    data: {
      dogs: []
    },
    created: function() {
      const self = this;
    
      axios.get(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
          .then(response => response.data)
          .then(data => self.dogs = data.message)
    }
  })