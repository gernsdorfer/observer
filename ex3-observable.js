let myObserver$ = Rx.Observable.create(
    (observer) => {
        let counter = 0;
        let myInterval = setInterval(function () {
            observer.onNext(counter.toString());
            counter++
        }, 50);
        return () => {
            clearInterval(myInterval);
            console.log('cancel')
        }
        console.log('start observer');
    })
    .take(5)
    .map((item) => parseInt(item))
    .filter((item) =>item !== 3)

let myEventList$ = myObserver$
    .subscribe(
        item=> console.log('Observer', item),
        err => console.log('error', err),
        complete => console.log('finish')
    );
