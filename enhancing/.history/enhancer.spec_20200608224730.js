// const enhancer = require('./enhancer.js');
const { repair } = require('./enhancer');

describe('Game Stat Trackers', () => {
    describe('__Repair__: repair an object', () => {
        it('returns an object with 100 durability', ()=>{
            let item = {
                name: "staff",
                durability: 50,
                enhancement: 15
            }
            let expected = {
                name: "staff",
                durability: 100,
                enhancement: 15
            }
            let assertion = repair(item);
            expect(assertion).toBe(expected);
        })
    })
    describe('__Success__: creates a new/modified item with success ', () => {
        it.todo('item enhancement increases by 1')
        it.todo('if item level is above 20, no change')
        it.todo('on item change, durability should remain')
    })
    describe('__Fail__: creates a new/modified Item with fail', () =>{
        it.todo('if enhancement is < 15, remove 5 durability')
        it.todo('if enhancement is > 15, remove 10 durability')
        it.todo('if enhancement is > 16, the item will also loose one enhancement level')
    })
    describe('__GET__: stretch', () => {
        it.todo('read stretch for more')
    })
})