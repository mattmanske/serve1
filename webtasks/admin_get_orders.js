"use latest"

//-----------  Imports  -----------//

const Stripe = require('stripe@4.14.0')

//-----------  Export  -----------//

module.exports = (ctx, cb) => {

  const { STRIPE_SECRET_KEY } = ctx.data

  //-----------  Processing  -----------//

  return Stripe(STRIPE_SECRET_KEY).orders.list({}, (err, orders) => {
    return (err) ? cb(err) : cb(null, orders)
  })
}
