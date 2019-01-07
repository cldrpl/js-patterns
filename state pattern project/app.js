// creating different simple pages without having to make new files for about us or contact us pages
// a closer real world example would be using an edit state, or dev, something before you push it live to Prod

const PageState = function() {
    //this is referencing the function above
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home State
const homeState = function(page) {
    // don't want text to show up
    document.querySelector('#heading').textContent = null;

    // I need to find the location of Bootstrap's Jumbotron example, they changed their site from the course!

    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-3">Hey, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
    `;
};

// About State 
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
`;
}

// Contact State 
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
        <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
        </div>
        <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
`;
}

// Instatiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home, calling change state from above
home.addEventListener('click', (e) => { 
    page.change(new homeState);

    e.preventDefault();
});

// About
about.addEventListener('click', (e) => { 
    page.change(new aboutState);

    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => { 
    page.change(new contactState);

    e.preventDefault();
});