/*jslint node: true */
"use strict";

var spark = require('spark');

spark.on('login', function() {
  var publishEventPr = spark.publishEvent('test', {});

  publishEventPr.then(
    function(data) {
      if (data.ok) { console.log("Event published succesfully"); }
    },
    function(err) {
      console.log("Failed to publish event: " + err);
    }
  );
});

// Login as usual
spark.login({ username: 'email@example.com', password: 'password'});
//spark.login({ accessToken: '012345' });
