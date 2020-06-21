describe('Testing ships and shipyards', () => {
  it('Correct name of ship', () => {
    result = typeof ship1.name
    assert.equal(result, 'string')
  });
  it('Correct name of ship', () => {
    ship1.name = 12
    result = typeof ship1.name
    assert.equal(result, 'string', 'Invalid name of ship')
  });
  it('Check building MotorShip in Motorshipyard', () => {
    result = shipyard1.build(ship1)
    assert.equal(result, true)
  });
  it('Check building Sailship in Motorshipyard', () => {
    result = shipyard1.build(ship2)
    assert.equal(result, true)
  });
  it('Check repair MotorShip in Motorshipyard', () => {
    result = shipyard1.repairs(ship1)
    assert.equal(result, true)
  });
  it('Check repair Sailship in Motorshipyard', () => {
    result = shipyard1.repairs(ship2)
    assert.equal(result, true)
  });
  it('Check painting MotorShip in Motorshipyard', () => {
    result = shipyard1.painting(ship1)
    assert.equal(result, true)
  });
  it('Check painting Sailship in Motorshipyard', () => {
    result = shipyard1.painting(ship2)
    assert.equal(result, true)
  });
  it('Check swaping a Motorship for a Sailship in Motorshipyard', () => {
    result = shipyard1.change(ship1, ship2)
    assert.equal(result, true)
  });
  it('Check swaping a Motorship for a Motorship in Motorshipyard', () => {
    result = shipyard1.change(ship1, ship3)
    assert.equal(result, true)
  });
});