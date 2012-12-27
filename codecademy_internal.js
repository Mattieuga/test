function createCookie(name,value,days) {
    var expire;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
 
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0 ; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) ==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

$(function() {  
    Parse.initialize("SxFNoJ5hdkjrOKLYbM47Fi7Jz2z6FLmSHJNStnhA", "b5Lmg2h6gAgYNL51GbXl3Uya9Jxiocn2hxQrHmc8");

    // Initialize user
    var hash = readCookie('parse_codecademy');
    if (hash === null) {
        hash = Math.random().toString(36).slice(2);
        createCookie('parse_codecademy', hash, 9000);
        var user = new Parse.User();
        user.set("username", hash);
        user.set("password", hash);
        user.signUp(null, {
            success: function(user) {

            },
            error: function(user, error) {
                alert("Something went wrong :( Try reloading the page.");
            }
        });
    } else {
        if (!Parse.User.current()) {
            Parse.User.logIn(hash, hash, {
                success: function(user) {

                },
                error: function(user, error) {
                    alert("Something went wrong :( Try reloading the page.");
                }
            });
        }
    }
  
    // We subclass Parse.Object so we can introspect the objects the 
    // user creates by saving them all in a global array. Pretty hacky,
    // but this entire codecademy thing is pretty hacky o_O
    window._parseObjects = [];
    Parse.Object.extend('Post', {
        initialize: function() {
            window._parseObjects.push(this);
        }
    });
});