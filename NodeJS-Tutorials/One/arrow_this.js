function Counter() {
    this.count = 0;

    setInterval(() => {
        console.log(this)
        console.log(this.count++);
    }, 1000);
}

new Counter();


let foo = 'bar';

if(foo == 'bar') {
    let foo = 'baz';
    console.log(foo); // 1st
}

console.log(foo); // 2nd