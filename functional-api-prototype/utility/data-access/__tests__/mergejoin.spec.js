
import {buff} from '../mergeJoin'

describe('Test module load', function(){
    test('load module', function(done){
        expect(buff(3)).toEqual(9)
        done()
    })
})