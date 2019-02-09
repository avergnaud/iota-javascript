// Require the use of IOTA library
const Iota = require("@iota/core");
const Converter = require("@iota/converter");
//const remoteCurl = require('@iota/curl-remote')

// Create a new instance of the IOTA class object.
// Use 'provider' variable to specify which Full Node to talk to
const iota = Iota.composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

iota
  .getNodeInfo(function (error, success) {
    if (error) {
        // unable to perform getNodeInfo call
        console.error(error);
    } else {
        // result is printed out
        console.log(success);
        
        // Basic check whether node is in sync or not
        // Elementary rule is that "latestMilestoneIndex" should equal to "latestSolidSubtangleMilestoneIndex" or be very close
        if (Math.abs(success['latestMilestoneIndex'] - success['latestSolidSubtangleMilestoneIndex']) > 3) {
            console.log('\r\nNode is probably not synced!');
        } else {
            console.log('\r\nNode is probably synced!');
        }
    }
});
