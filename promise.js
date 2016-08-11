let myPromise = new Promise ((resolve) => {
    setTimeout(()=> {
        console.log('execute Promise');
        resolve('PromiseResolve');
    },100);
    console.log('promise start');
});

//myPromise.then((value)=> console.log(value));
let myObservable = Rx.Observable.create((observer) => {
    let myTimeOut = setTimeout(()=> {
        console.log('execute Observable');
        observer.onNext('Observable resolve' + Date.now());
    },100);
    console.log('Observable start');
    return () => {
        console.log('cancel Observable');
        clearTimeout(myTimeOut);
    }
});

//let mySubscriber1 = myObservable.subscribe((value) => console.log('Value Observable 1:',value));
//let mySubscriber2 = myObservable.subscribe((value) => console.log('Value Observable 2:',value));

//Cancel Subscribe
//mySubscriber1.dispose();
