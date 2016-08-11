let myObserver$ = new Rx.Observable.interval(50).take(4);
let mySubject$ = new Rx.ReplaySubject(2);
myObserver$.subscribe(mySubject$);



setTimeout(()=> {
    mySubject$.subscribe(
        (value) => console.log('observerA: ' + value),
        (error)=> console.log('err', error)
    );
}, 150);


