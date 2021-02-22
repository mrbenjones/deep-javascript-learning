
describe('Runs jest properly', function(){
  test('unit:runs jest without mocks', function(done){
    return Promise.resolve(true)
      .then(
        s => {
          expect(s).toEqual(true)
          done()
        }
      )
  })
})