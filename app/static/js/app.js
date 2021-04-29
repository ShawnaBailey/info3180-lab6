/* Add your Application JavaScript */
const app = Vue.createApp({
  data() {
    return {
      welcome: 'Hello World! Welcome to VueJS'
    }
  }
});



app.component('news-list', {
  name: 'news-list',
  template: `
      <div class="news">
        <h2>News</h2>
          <ul class="news__list">
            <li class="news__item">News item 1</li>
            <li class="news__item">News item 2</li>
            <li class="news__item">News item 3</li>
          </ul> 
  </div>
  `,
  created() {
    fetch('https://newsapi.org/v2/top-headlines?country=us',
{
  headers: {
    'Authorization': 'Bearer 4c88291110a640418ddfc60c898e90a6'
  }
})
      .then(function(response) {
      return response.json();
      })
      .then(function(data) {
      console.log(data);
      });
  }
});







app.component('app-header', {
  name: 'AppHeader',
  template: `
      <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <a class="navbar-brand" href="#">VueJS App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
              </ul>
            </div>
          </nav>
      </header>    
  `,
  data: function() {
    return {};
  }
});

app.component('app-footer', {
  name: 'AppFooter',
  template: `
      <footer>
          <div class="container">
              <p>Copyright &copy {{ year }} Flask Inc.</p>
          </div>
      </footer>
  `,
  data: function() {
      return {
          year: (new Date).getFullYear()
      }
  }
})

app.mount('#app');