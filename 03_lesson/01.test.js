describe('Проверка функции сложения положительных чисел в массиве', () => {
  it('Array correct', () => {
    result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58])
    assert.deepEqual(result, {count: 5, sum: 357})
  });
  it('String in Array', () => {
    result = sumOfPositive([-91, -93, -45, 67, 'a', 40, -34, 96, -42, 58])
    assert.equal(result, 'Invalid')
  });
  it('Boolean in Array', () => {
    result = sumOfPositive([-91, -93, -45, 67, true, 40, -34, 96, -42, 58])
    assert.equal(result, 'Invalid')
  });
  it('Array is empty', () => {
    const result = sumOfPositive([])
    assert.equal(result, 'Invalid')
  });
  it('Array?', () => {
    const result = sumOfPositive('a')
    assert.equal(result, 'Invalid')
  });


});