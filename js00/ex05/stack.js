const stackCreate = () => ({
    arr: []
});

const stackEmpty = function (stack) {
    let len = 0;

    while (stack.arr[len]) len++;
    return len ? false : true
};

const stackPush = function (stack, data) {
    let len = 0;

    if (stackEmpty(stack) == false) while (stack.arr[len]) len++;
    stack.arr[len] = data;
};

const stackPeek = function (stack) {
    let len = 0;

    if (stackEmpty(stack) == false) {
        while (stack.arr[len]) len++;
        return stack.arr[len - 1]
    }
};

const stackPop = function (stack) {
    let len = 0;
    let arr = [];

    if (stackEmpty(stack) == false) while (stack.arr[len]) len++;
    for (var i = 0; i < len - 1; i++) arr[i] = stack.arr[i];
    stack.arr = arr;
};