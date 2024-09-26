// Lorem ipsum dolor sit amet

describe('Проверка вводных данных', () => {
  it('Много пробелов', () => {
    const result = wordStat('  Lorem    ipsum   dolor sit    amet  ')
    assert.deepEqual(result,
      [
        {word: "Lorem", sum: 511},
        {word: "ipsum", sum: 558},
        {word: "dolor", sum: 544},
        {word: "sit", sum: 336},
        {word: "amet", sum: 423}
      ]
    )
  })
  it('Пустая строка', () => {
    const result = wordStat('')
    assert.equal(result, 'Пустая строка')
  })
  it('Проверка на булеан значение', () => {
    const result = wordStat(true)
    assert.equal(result, 'Invalid')
  })
  it('Проверка на число', () => {
    const result = wordStat(55)
    assert.equal(result, 'Invalid')
  })
})