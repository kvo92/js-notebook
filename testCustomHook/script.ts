


function Subject() {
    this.observers = []; //array of observer functions 
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn)
    },
    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnToRemove)
                return fn
        })
    },
    fire: function () {
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

function ObserverTest() {
    console.log("observer test works!")
}

function AnotherFunction() {
    console.log("it works again")
}

//subscribing the functions
const subject = new Subject();

subject.subscribe(ObserverTest)
subject.subscribe(AnotherFunction)

//runing all the subscriptions once
subject.fire()