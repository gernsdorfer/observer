Rx.Observable.fromEvent(document, 'mousemove')
    .map((mousePosition)=> ({
        x: mousePosition.offsetX,
        y: mousePosition.offsetY
    }))
    .buffer(Rx.Observable.interval(700))
    .where((click) => click.length > 0)
    .subscribe((value)=> console.log(value));
