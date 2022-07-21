function calculateTax(income: number, taxYear = 2022) {
  if (taxYear < 2022) return income * 2.2;
  return income * 2.3;
}

calculateTax(10_000);
