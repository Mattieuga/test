/*
  @class Async Tester
  This object is used to queue up multiple async events and wait on all of them before
  completing the exercise. A failed event will short circuit the evaluation.
*/
var AsyncTest = {
    logger: true, // turn off in prod
    internalEvent: 'parse_event',
    waitEvents: [],
    forceFailEvent: 'parse_fail_event',
    resultsText: 'All done!',
  
    // Add event to queue. All events added must be triggered with a pass before the 
    // exercise is completed.
    waitOn: function(eventName) {
        this.waitEvents.push(eventName);
        if (this.logger) { console.log('Will wait on event ' + eventName); }
    },

    // Call at the end of submission test, will start the waiting loop
    startWaiting: function() {
        var self = this;

        // Don't wait if no events are left
        if (this.waitEvents.length > 0) {
            if (this.logger) { console.log('Waiting on ' + this.waitEvents.length + ' events'); }
            // Test Completion Handler
            $expect(window).on(this.internalEvent, function(event, externalEvent, passed, message) {
                if (this.logger) { console.log('Event \'' + externalEvent + '\' triggered with: ' + passed + ', ' + message); }
            
                // A fail short circuits the evaluation
                if (!passed || event === this.forceFailEvent) {
                    // Force a fail and show custom message
                    if (this.logger) { console.log('Event ' + externalEvent + ' failed!'); }
                    $(".loading").hide();
                    $('.step3').fadeTo(500, 0.2);
                    $('.step1').fadeTo(500, 1.0);
                    $expect('html').to.be.empty(message);
                } else {
                    // If passed, remove event and see if we are waiting on anything else
                    var index = $.inArray(externalEvent, self.waitEvents);
                    if (index >= 0) {
                        self.waitEvents.splice(index, 1);
                    }
                    self.startWaiting();
                }
            }); 
        } else {
            $(".loading").hide();
            $(".resultsText").html(self.resultsText);
            if (this.logger) { console.log('All events triggered!'); }
        }
    },

    // Trigger an event with a given name and provide whether the test passed and the message to show.
    // (message for failure only)
    triggerEvent: function(eventName , passed, message) {
        if (typeof(message) === 'undefined') {
            message = '';
        }
        // Trigger the event
        $(window).trigger(this.internalEvent, [eventName, passed, message]);
    },
  
    fail: function(message) {
        if (typeof(message) === 'nil') {
            message = 'Looks like something went wrong on our end. Try reloading the page.';
        }
        // Fail this exercise
        $(window).trigger(this.internalEvent, [this.forceFailEvent, false, message]);
    }
};

// Step label sequence
$('.step1').fadeTo(500, 0.2);
$('.step2').fadeTo(500, 1.0);
$('.submit_button').removeClass('disabled').removeAttr('disabled');

$('.submit_button').click(function(e) {
    $('.step2').fadeTo(500, 0.2);
    $('.step3').fadeTo(500, 1.0); 
    $('.submit_button').addClass('disabled').attr('disabled','disabled');
});