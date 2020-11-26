# Accept Payments using React, Node and Stripe

> A payment POC that allows a user to select and pay for a product.<br/>
> Technologies used:<br/>
> React, Redux, Node and Stripe

## Quick Start (local)

1.  Clone or fork respository
2.  Initialize packages
    > cd accept-payments && npm i
    > cd accept-payments/client && npm i
    > cd accept-payments/server && npm i
3.  Run `npm run dev` from root

## Testing payments

Use the card numbers below to test the checkout integration:

- 4242 4242 4242 4242 - Payment succeeds

- 4000 0025 0000 3155 - Payment requires authentication

- 4000 0000 0000 9995 - Payment is declined
