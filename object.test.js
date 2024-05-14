const cloneObject = require('./object')

describe('run some tests', () => {
  it('Should clone an object', () => {
    const person = { name: 'Imran' }

    // Assertion | For reference types we use toEqual() instead of toBe()
    expect(cloneObject(person)).toEqual(person)
  })

  // Test truthy and falsy

  it('falsy', () => {
    const n = null
    expect(n).toBeFalsy()
  })

  it('truthy', () => {
    const profession = 'web developer'
    expect(profession).toBeTruthy()
  })
})
