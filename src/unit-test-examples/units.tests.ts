import { add, divide, concatenate } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('concatenate', () => {

  it('should concatenate break and fast', () => {
    const result = concatenate("break", "fast");
    expect(result).to.equal("breakfast");
  });

  it('should concatenate easy and going', () => {
    const result = concatenate("easy", "going");
    expect(result).to.equal("easygoing");
  });

  it('should throw an error if a or b is empty', () => {
    expect(()=>{ concatenate( "fly", '') }).to.throw('You have an empty value')
  });

});