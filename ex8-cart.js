let addButton = document.querySelector('#add'),
    removeButton = document.querySelector('#remove'),
    counterOutput = document.querySelector('#counter-output'),
    cart = document.querySelector('#cart'),
    cartCounter = document.querySelector('#cart-counter'),
    mySubject = new Rx.ReplaySubject(1);

const clickStart = 0;

Rx.Observable
    .merge(
        Rx.Observable.fromEvent(addButton, 'click').map((value)=>'add'),
        Rx.Observable.fromEvent(removeButton, 'click').map((value)=>'remove')
    )
    .scan(function (current_state, event) {
        if (event === 'add') {
            return current_state + 1;
        }
        return current_state - 1;
    }, clickStart)
    .subscribe((value)=> {
        mySubject.onNext(value);
    });


mySubject.subscribe((itemsCount)=> {
    counterOutput.textContent = itemsCount;
});

setTimeout(()=> {
    cart.style.display = 'block';
    mySubject.subscribe(
        (itemsCount)=> {
            cartCounter.textContent = itemsCount;
        },
        (error) => console.log('err')
    );
}, 2000);

