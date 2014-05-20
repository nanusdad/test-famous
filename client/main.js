// ------------------ templates -------------------

Template.home.events({
    click: function() {
        Router.go('about');
    }
});

Template.about.events({
    click: function() {
        Router.go('home');
    }
});

Template.about.val = function() {
    if (Pets.findOne()) {
    return Pets.findOne({}).name;

    }
    else {
        return 'Chiku';
    }
};

// setup famous sections from templates
Meteor.startup(function() {
    Meteor.subscribe("pets");
    Application.addSection('home', Template.home);
    Application.addSection('about', Template.about, {
        content: 'Example data'
    });
});

// ------------------ routing -------------------

Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'blank',
        onBeforeAction: function() {
            Application.show('home');
        }
    });

    this.route('about', {
        path: '/about',
        template: 'blank',
        onBeforeAction: function() {
            Application.show('about');
        }
    });
});