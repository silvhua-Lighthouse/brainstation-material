/*
Currently we are defining all our html as one big 
HTML string returned by the Main function.
We're going to refactor this into smaller components.

2. Currently our HTML is rendered as one big string in script.js. Let’s turn this into separate components: Header, Hero, MainContent and Footer.
*/
const Main = () => {
  return `
      <div>
        <header id="header">
        <nav id="nav-bar" class="header-item header-left">
          <a>Home</a> |
          <a>About</a> |
          <a>Contact</a>
        </nav>
        <div class="header-item logo">
          Logo
        </div>
        <div class="header-item header-right">
          User:
          <a>John Smith</a> |
          <a>Logout</a>
        </div>
      </header>
      <section class="hero">
        <div>
          <h2 class="hero-title">Hero Title</h2>
          <h3 class="hero-tagline">Tag Line</h3>
        </div>
      </section>
      <main>
        <section class="card-list">
          <div class="card">
            <div class="card__content">
              Content
            </div>
            <h4 class="card__title">
              Title
            </h4>
          </div>
        </section>
        <section class="activity-list">
          <div>
            <h3>Activity Feed</h3>
            <div class="activity">
              Activity
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section class="footer footer-left">
          Left Footer
        </section>
        <section class="footer footer-center">
          Center Footer
        </section>
        <section class="footer footer-right">
          Right Footer
        </section>
      </footer>
    </div>
    `;
}

let root = document.getElementById('main');
root.innerHTML = Main();