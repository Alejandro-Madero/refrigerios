export const formatNumber = (...nums) => {
  return nums.map(num => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ars',
    }).format(num);
  });
};
