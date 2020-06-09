// const enhancer = require('./enhancer.js');
const { repair,
        succeed,
        fail } = require('./enhancer');

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
            expect(assertion).toMatchObject(expected);
        })
    })
    describe('__Success__: creates a new/modified item with success ', () => {
        it('item enhancement increases by 1', () => {
            let item = {
                name: "staff",
                durability: 65,
                enhancement: 10
            }
            let expected = {
                name: "staff",
                durability: 65,
                enhancement: 11
            }
            let assertion = succeed(item)
            expect(assertion).toMatchObject(expected);
        })
        it('if item level is above 20, no change', () => {
            let item = {
                name: "staff",
                durability: 65,
                enhancement: 20
            }
            let expected = {
                name: "staff",
                durability: 65,
                enhancement: 20
            }
            let assertion  = succeed(item)
            expect(assertion).toMatchObject(expected);
        })
        it('on item change, durability should remain', () => {
            let item = {
                name: "staff",
                durability: 65,
                enhancement: 10
            }
            let expected = 65
            
            let assertion = succeed(item)
            expect(assertion.durability).toBe(expected)
        })
    })
    describe('__Fail__: creates a new/modified Item with fail', () =>{
        it('if enhancement is < 15, remove 5 durability', () => {
            let item = {
                name: "staff",
                durability: 65,
                enhancement: 10
            }
            let expected = {
                name: "staff",
                durability: 60,
                enhancement: 10
            }
            let assertion = fail(item)
            expect(assertion).toMatchObject(expected)
        })
        it.todo('if enhancement is > 15, remove 10 durability')
        it.todo('if enhancement is > 16, the item will also loose one enhancement level')
    })
    describe('__GET__: stretch', () => {
        it.todo('read stretch for more')
    })
})