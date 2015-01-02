'use strict';


var LinkedList = function(arr) {
    this.firstEle = null;
    this.lastEle = null;
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
};
LinkedList.prototype.push = function(ele) {
    var oldFirstEle = this.firstEle;
    ele = {
        val: ele,
        next: oldFirstEle,
    };
    if (!this.firstEle) {
        this.lastEle = ele;
    } // if its only one than first and last elements are one
    this.firstEle = ele;
};
LinkedList.prototype.pop = function() {
    // removes the element at top of stack
    var val = this.firstEle.val;
    this.firstEle = this.firstEle.next; // gets rid of the original ref so  think gc should collect it
    return val;
};

LinkedList.prototype.remove = function(ele) {
    var iterator = this.iterator();
    if (ele === this.firstEle.val) {
        this.pop();
        return;
    }
    while (iterator.hasNext()) {
        var currentEle = iterator.currentEle();
        if (currentEle.toBeRemoved === true) {
            currentEle = null; // putting the ref to null so that gc could get rid of it
            break;
        }
        if (currentEle.next) {
            if (currentEle.next.val === ele) {
                currentEle.next.toBeRemoved = true;
                currentEle.next = currentEle.next.next; // skipping the ele to be deleted here
                if (!currentEle.next) { // updating lastElement
                    this.lastEle = currentEle;
                }
            }
        }
        iterator.next();
    }
};

LinkedList.prototype.iterator = function() { // this is from top to bottom of stack
    var current = this.firstEle;
    return {
        next: function() {
            var val = current.val;
            current = current.next;
            return val;
        },
        hasNext: function() {
            return (current) ? true : false;
        },
        currentEle: function() {
            return current;
        }
    };
};
module.exports = LinkedList;