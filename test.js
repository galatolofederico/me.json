var assert = require('chai').assert;

describe('Syntax tests', () => {
    it('should import me.json', () => {
        try{
            require("./me.json")
            assert(true)
        } catch(e) {
            assert(false);
        }
    })
  })