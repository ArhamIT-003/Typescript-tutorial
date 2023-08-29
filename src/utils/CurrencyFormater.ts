const currency_formatter = new Intl.NumberFormat(undefined, {
  currency: "PKR",
  style: "currency",
});
export const formatCurrency = (number: number) => {
  return currency_formatter.format(number);
};
