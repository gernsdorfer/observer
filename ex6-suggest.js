let inputElement = document.querySelector('#item-name');

Rx.Observable.fromEvent(inputElement, 'keyup')
    .map(()=> inputElement.value) // get Value
    .filter((text) => text.length > 1) // filter empty text
    .debounce(500) //wait 500 ms
    .distinctUntilChanged()// record only change
    .subscribe((value)=> console.log(value));




