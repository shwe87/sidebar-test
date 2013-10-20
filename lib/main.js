var data = require("sdk/self").data;
const { Sidebar } = require('sdk/ui');

let sidebar = Sidebar({
    id: 'twitter-sidebar',
    url: data.url('twitter.html'), // Has access to a `addon` global to communicate with the addon
    title: 'Twitter'
});
sidebar.on('attach', function(worker) {
    worker.port.on('message', function(msg) {
      console.log(msg); // Logs 'Hello World!'
    });
    worker.port.emit('message', 'Hello');
});
sidebar.show(); // shows in most recent window
sidebar.hide();  // hides in most recent window





