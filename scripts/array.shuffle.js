Array.prototype.shuffle = function() { 
    var arr = this, elm, inc, length = arr.length;
 
    while (length) {
        inc = Math.floor(Math.random() * length--);

        elm = arr[length];
        arr[length] = arr[inc];
        arr[inc] = elm;
    }
 
    return arr; 
};