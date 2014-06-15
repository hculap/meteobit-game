Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('game', {
        onBeforeAction: function(pause) {
            if (!Meteor.user()) {
                alert("Please sign in!");
                Router.go('home');
                pause();
            }
        }
    });
    this.route('results');
});