const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};

const returnHour = (HHmm) => {
  return parseInt(HHmm.split(":")[0]);
};

const isBusinessHour = (hour) => {
  return hour >= 7 && hour <= 18;
};

export const evalPickerIsBusinessHour = (hhmm) => {
  return isBusinessHour(returnHour(convertTime12to24(hhmm)));
};
console.log(evalPickerIsBusinessHour("01:02 PM"));
console.log(isBusinessHour(returnHour(convertTime12to24("06:06 AM"))));
console.log(isBusinessHour(returnHour(convertTime12to24("12:00 PM"))));
console.log(isBusinessHour(returnHour(convertTime12to24("12:00 AM"))));
console.log(convertTime12to24("05:06 PM"));
console.log(convertTime12to24("12:00 PM"));
console.log(convertTime12to24("12:00 AM"));

// function Subject() {
//     this.observers = []; //array of observer functions
// }

// Subject.prototype = {
//     subscribe: function (fn) {
//         this.observers.push(fn)
//     },
//     unsubscribe: function (fnToRemove) {
//         this.observers = this.observers.filter(fn => {
//             if (fn != fnToRemove)
//                 return fn
//         })
//     },
//     fire: function () {
//         this.observers.forEach(fn => {
//             fn.call()
//         })
//     }
// }

// function ObserverTest() {
//     console.log("observer test works!")
// }

// function AnotherFunction() {
//     console.log("it works again")
// }

// //subscribing the functions
// const subject = new Subject();

// subject.subscribe(ObserverTest)
// subject.subscribe(AnotherFunction)

// //runing all the subscriptions once
// subject.fire()

let url = "https://url.com/{{query}}/foo/{{query2}}";

let result = { query: "queryResult1", query2: "queryResult2" };

let replaceDoubleBraces = (str, result) => {
  return str.replace(/{{(.+?)}}/g, (_, g1) => result[g1] || g1);
};

console.log(replaceDoubleBraces(url, result));
