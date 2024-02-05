const stack = [];
let size = 6;

function print() {
    if (stack.length === 0) {
        console.log("stack is underflow");
    }
    else {
        console.log(stack);
    }
}
function add(stack, element, size) {
    if (stack.length > size) {
        console.log("stack is overflow");
    }
    else {
        stack.push(element);
    }
}
function remove(stack) {
    if (stack.length === 0) {
        console.log("stack is empty");
    }
    else {
        stack.pop();
    }
}

add(stack, 7, size);
add(stack, 8, size);
add(stack, 9, size);
add(stack, 10, size);
add(stack, 11, size);
add(stack, 12, size);
add(stack, 13, size);
// add(stack, 14, size);


remove(stack);
// remove(stack);

print(stack);