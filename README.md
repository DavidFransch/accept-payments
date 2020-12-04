# Accept Payments using React, Node and Stripe

> A payment POC that allows a user to select and pay for a product.<br/>
> Technologies used:<br/>
> React, Redux, Node and Stripe

## Quick Start (local)

1.  Clone or fork respository

2.  CD into directory

    > cd accept-payments

3.  Initialize packages

    > npm i

    > cd client && npm i

    > cd server && npm i

4.  Run `npm run dev` from root

## Testing payments

Use the card numbers below to test the checkout integration:

- 4242 4242 4242 4242 - Payment succeeds

- 4000 0025 0000 3155 - Payment requires authentication

- 4000 0000 0000 9995 - Payment is declined
