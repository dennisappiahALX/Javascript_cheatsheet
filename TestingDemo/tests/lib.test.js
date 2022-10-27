const lib = require('../lib');
const db = require('../db');

describe('absolute', () => {
    test('should return positive if input is positive', () => {
        const result = lib.absolute(1);
    
        expect(result).toBe(1);
    });
    
    test('should return negative if input is negative', () => {
        const result = lib.absolute(-1);
        
        expect(result).toBe(1);
    });

    test('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        
        expect(result).toBe(0);
    });
});

//testing strings

describe('greet', () => {
    test('should return the greeting message', () => {
        const result =lib.greet('Dennis');

        expect(result).toBe('Welcome Dennis');
        expect(result).toContain('Dennis');
    })
})

//testings arrays

describe('getCurriencies', () => {
    test('should return array of currencies', () => {
        const result =lib.getCurriencies();

        //too general
        expect(result).not.toBeNull();
        expect(result).toBeDefined();

        //too specific - the references of the numbers are matched

        expect(result[0]).toBe('US');
        expect(result[1]).toBe('EUR');
        expect(result[2]).toBe('AUD');

        // proper way
        expect(result).toContain('US');
        expect(result).toContain('EUR');
        expect(result).toContain('AUD');

    })
})

//testing objects
describe('getProduct', () => {
    test('return product with the given id', () => {
        const result =lib.getProduct(1)

        // expect(result).toEqual({id : 1, price:10});

        expect(result).toMatchObject({id : 1, price:10});

        expect(result).toHaveProperty('id', 1);

    })
})

// Testing Exceptions
describe('registerUser', () => {
    test('should throw username is falsy', () => {
    
        const args = [null, NaN, undefined, 0, '', false]

        args.forEach( a => {
            expect(() => {lib.registerUser(a)}).toThrow();  
        })

    })

    test('should return user object if username passed', () => {
        const result = lib.registerUser('Dennis');

        expect(result).toMatchObject({ username : 'Dennis'});
        expect(result.id).toBeGreaterThan(0);
    })
})

//apply Discount
describe('applyDiscount', () => {
    test('should apply 10% discount if customer has nore than 10points', () => {
        db.getCustomerSync = function(customerId) {
            console.log('Fake reading customer...');
            return { id: customerId, points: 20}; 
        }
        let order = { customerId: 1, totalPrice: 9}
        lib.applyDiscount(order);

        expect(order.totalPrice).toBe(9);
    })
});

