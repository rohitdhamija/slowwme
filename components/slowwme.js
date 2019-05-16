'use strict';
var sleep = require('thread-sleep');
module.exports = {
  metadata: () => ({
    name: 'slowwme',
    properties: {
      sleepduration: { required: true, type: 'int' },
    }
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    const { sleepduration } = conversation.properties();
    var start = Date.now();
    var res = sleep(sleepduration);
    var end = Date.now();
    var diff = end - start;  
    // reply
    conversation.logger().info(`I slept for ~${diff} milliseconds`);
    conversation.reply(`I slept for ~${diff} milliseconds`);  
    conversation.transition();
    conversation.keepTurn(true);  
    done();
  }
};
