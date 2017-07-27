'use strict';
const Chai = require('chai');
Chai.use(require('chai-as-promised'));
Chai.use(require('dirty-chai'));
const expect = Chai.expect;

const Handlers = require('../lib/handler');

describe('Shortened URLs', () => {
    it('should be able to be created', () => {
        return expect(Handlers.handleCreate()).to.eventually.equal(null);
    });
    it('should be able to be retrieved', () => {
        return expect(Handlers.handleGet()).to.eventually.equal(null);
    });
});