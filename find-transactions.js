const Iota = require("@iota/core");



const iota = Iota.composeAPI({
    provider: "https://nodes.thetangle.org:443"
  });

  iota.findTransactionObjects({ addresses: ['GHLEMUXUIYJK9SKXOUMNEKZBRDHZVFUURXOYMQQODSWEGYRROOGGILVYTGTCCLOYDCETCKHUT9LRXJMMD'] })
  .then(transactions => {
      console.log(transactions)
  })
  .catch(err => {
      console.log(err)
  })