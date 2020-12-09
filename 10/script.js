const timeType = Object.freeze({
    "years": "FullYear",
    "months": "Month",
    "days": "Date",
    "hours": "Hours",
    "minutes": "Minutes"
})


const date = function (date) {
    const o = {

        _value: null,

        get value() {
            return this + "";
        },

        constr: function (date) {

            let arr = date.split(/[\s:-]/);
            this._value = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3], arr[4]));

            return this;
        },

        setValue: function (value, timeType) {
            this._value['setUTC' + timeType](value + this._value['getUTC' + timeType]());
            return this;
        },

        setValueSubtract: function (value, timeType) {
            this._value['setUTC' + timeType](-value + this._value['getUTC' + timeType]());
            return this;
        },

        add: function (value, type) {
            if (value > 0 && type in timeType) {
                return this.setValue(value, timeType[type]);
            }
            throw new TypeError("Передано неверное значение");

        },

        subtract: function (value, type) {
            if (value > 0 && type in timeType) {
                return this.setValueSubtract(value, timeType[type]);
            }

            throw new TypeError("Передано неверное значение");

        },


        valueOf: function () {
            let year = this._value.getFullYear();
            let month = this._value.toLocaleString("ru", { timeZone: "UTC", month: '2-digit' });
            let day = this._value.toLocaleString("ru", { timeZone: "UTC", day: '2-digit' });
            let time = this._value.toLocaleString("ru", { timeZone: "UTC", hour: '2-digit', minute: '2-digit' });
            let dates = year + "-" + month + "-" + day + " " + time;
            return dates;
        },
    };
    return o.constr(date);
};

let time = date('2020-10-20 13:10')
    .add(24, 'hours')
    .subtract(3, 'months')
    .add(32, 'days')
    .add(1, 'minutes');


console.log(time.value)
