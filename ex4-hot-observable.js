let myObserver$ = Rx.Observable.create(
    (observer) => {
        let counter = 0;
        setInterval(function () {
            observer.onNext('[' + counter + ']' +  Date.now());
            counter++
        }, 50)
    })
    .take(3);
    //.share(); // Make it Hot


myObserver$
    .subscribe(
        item=> console.log('Subscriber-1', item),
        err => console.log('error', err),
        complete => console.log('finish')
    );
myObserver$
    .subscribe(
        item=> console.log('Subscriber-2:', item),
        err => console.log('error', err),
        complete => console.log('finish')
    );


setTimeout(()=> {
    myObserver$
        .subscribe(
            item=> console.log('Timeout-Subscriber:', item),
            err => console.log('error', err),
            complete => console.log('finish')
        );
}, 100);