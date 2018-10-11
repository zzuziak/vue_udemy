new Vue({
        el: '#exercise',
        data: {
            value: " ",
        },
        methods: {
        	alert: function() {
          	alert('Hello!');
          },
          setValue: function(event) {
          	this.value = event.target.value;
          }
        }
    });
