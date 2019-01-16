// Require the use of IOTA library
const Iota = require('@iota/core')
const Converter = require('@iota/converter')
require("dotenv").config()

// Create a new instance of the IOTA class object.
// Use 'provider' variable to specify which Full Node to talk to
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
})
const seed = process.env.SEED

// Call the 'getNodeInfo call to check that the node is working
iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(err => {})

    const address =
    'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDD'
    const message = Converter.asciiToTrytes('Hello World!')
  
  const transfers = [
    {
      value: 0,
      address: address,
      message: message
    }
  ]
  
  iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, 3, 9))
    .then(bundle => {
      console.log(bundle)
    })
    .catch(err => {
      // catch any errors
      console.log(err)
    })