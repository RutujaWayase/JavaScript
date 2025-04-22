function calllbackexample(name, callback) {
    callback(`Hello, ${name}!`);
}
calllbackexample('There', message => console.log(message));
