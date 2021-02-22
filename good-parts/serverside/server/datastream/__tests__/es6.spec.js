import testingStart from '../__fixtures__/simpleModule'

test('unit: runs initial', function(done) {
  return Promise.resolve(testingStart())
    .then(
      r => {
        expect(r).toEqual(true);
        done()
      }
    )
})