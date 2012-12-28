    // We subclass Parse.Object so we can introspect the objects the 
    // user creates by saving them all in a global array. Pretty hacky,
    // but this entire codecademy thing is pretty hacky o_O
    window._parsePostObjects = [];
    Parse.Object.extend('Post', {
        initialize: function() {
            window._parsePostObjects.push(this);
        }
    });
    window._parseCommentObjects = [];
    Parse.Object.extend('Comment', {
        initialize: function() {
            window._parseCommentObjects.push(this);
        }
    });
    window._parseUserObjects = [];
    Parse.User.extend({
        initialize: function() {
            window._parseUserObjects.push(this);
        }
    });