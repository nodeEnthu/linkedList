var should = require('should');
var LinkedList = require('../linkedList.js');
describe('LinkedListStack: ', function() {
    it(' allows adding elements through array inside constructor ', function() {
        var linkedList = new LinkedList([{
            key: 'va1'
        }, {
            key: 'val2'
        }, {
            key: 'val3'
        }]);
        linkedList.pop().should.eql({
            key: 'val3'
        });
    });
    it(' allows adding elements', function(done) {
        var linkedList = new LinkedList();
        linkedList.push({
            key1: 'val1'
        });
        linkedList.firstEle.val.should.eql({
            key1: 'val1'
        });
        done();
    });
    it('allows taking out elements at top', function(done) {
        var linkedList = new LinkedList();
        linkedList.push({
            key1: 'val1'
        });
        linkedList.pop().should.eql({
            key1: 'val1'
        });
        done();
    });
    it('has an iterator', function(done) {
        var iterator = new LinkedList().iterator();
        iterator.should.exist;
        done();
    });
    it(' has direct references to first and last elements', function(done) {
        var linkedList = new LinkedList([{
            key: 'val1'
        }, {
            key: 'val2'
        }, {
            key: 'val3'
        }]);
        linkedList.firstEle.val.should.eql({
            key: 'val3'
        });
        linkedList.lastEle.val.should.eql({
            key: 'val1'
        });
        done();
    });
    it(' iterator allows iterating over all teh elements', function(done) {
        var linkedList = new LinkedList();
        linkedList.push({
            key1: 'val1'
        });
        linkedList.push({
            key2: 'val2'
        });
        linkedList.push({
            key3: 'val3'
        });
        var iterator = linkedList.iterator();
        var resultArr = [];
        while (iterator.hasNext()) {
            var result = iterator.next();
            resultArr.push(result);
        }
        var length = resultArr.length;
        length.should.eql(3);
        done();
    });
    it(' iterator allows access to previous and next values', function(done) {
        var linkedList = new LinkedList();
        var a = {
            key1: 'val1'
        };
        var b = {
            key2: 'val2'
        };
        var c = {
            key3: 'val3'
        };
        linkedList.push(a);
        linkedList.push(b);
        linkedList.push(c);
        var iterator = linkedList.iterator();
        var resultArr = [];
        while (iterator.hasNext()) {
            var result = iterator.next();

            resultArr.push(result);
        }
        var length = resultArr.length;
        length.should.eql(3);
        done();
    });
    it('can remove a specific element in between linkedList', function(done) {
        var linkedList = new LinkedList();
        var a = {
            key1: 'val1'
        };
        var b = {
            key2: 'val2'
        };
        var c = {
            key3: 'val3'
        };
        linkedList.push(a);
        linkedList.push(b);
        linkedList.push(c);
        linkedList.remove(b);
        linkedList.should.eql({
            firstEle: {
                val: {
                    key3: 'val3'
                },
                next: {
                    val: {
                        key1: 'val1'
                    },
                    next: null
                }
            },
            lastEle: {
                val: {
                    key1: 'val1'
                },
                next: null
            }
        });
        done();
    });
    it(' can remove first element of a linkedList', function(done) {
        var linkedList = new LinkedList();
        var a = {
            key1: 'val1'
        };
        var b = {
            key2: 'val2'
        };
        var c = {
            key3: 'val3'
        };
        linkedList.push(a);
        linkedList.push(b);
        linkedList.push(c);
        linkedList.remove(c);
        linkedList.should.eql({
            firstEle: {
                val: {
                    key2: 'val2'
                },
                next: {
                    val: {
                        key1: 'val1'
                    },
                    next: null
                }
            },
            lastEle: {
                val: {
                    key1: 'val1'
                },
                next: null
            }
        });
        done();
    });
    it(' can remove last element of a linkedList', function(done) {
        var linkedList = new LinkedList();
        var a = {
            key1: 'val1'
        };
        var b = {
            key2: 'val2'
        };
        var c = {
            key3: 'val3'
        };
        linkedList.push(a);
        linkedList.push(b);
        linkedList.push(c);
        linkedList.remove(a);
        linkedList.should.eql({
            firstEle: {
                val: {
                    key3: 'val3'
                },
                next: {
                    val: {
                        key2: 'val2'
                    },
                    next: null
                }
            },
            lastEle: {
                val: {
                    key2: 'val2'
                },
                next: null
            }
        });
        done();
    });
});