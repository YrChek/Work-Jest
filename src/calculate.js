export default function calculateTotal(purchasses, applyDiscount) {
  const sum = purchasses.reduce((total, item) => total + (item.count * item.price), 0);
  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
