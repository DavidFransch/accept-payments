export const calcUSD = (amount) => {
  const amountInUSD = (amount / 100).toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  })
  return amountInUSD
}
