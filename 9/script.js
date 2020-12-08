const getHashtags = text => text.match(/(?<=\#)(\w+)/gm) || []

console.log(getHashtags('Я люблю #javascript и #web'), getHashtags('Я люблю javascript и web'))

const normalizeHashtags = arr => [...new Set(arr.map((i) => i.toLowerCase()))]

console.log(normalizeHashtags(['Asc', 'asc', 'SqwsX', 'sqwsx']), normalizeHashtags([]))


/*   Телефонная книга     */


window.book = {}

function phoneBook (command)  {

    const [com, arg1, arg2] = command.split(' ')

    let data = {
        'ADD': function (name, phones) {
            let list = this.book?.[name]
            this.book[name] = [].concat(phones.split(',') || [], list || [])
        },
        'REMOVE_PHONE': function (phone) {
            Object.entries(this.book).map((value) => {
                if (value.includes(phone)) console.log('true')
                value.filter((i) => i != phone)
            })
        },
        'SHOW': function () {
            return Object.entries(this.book).map(([key, value]) => {
                if (value.length) {
                    return `${key}: ${value.join(',')}`
                }
            }).join('\n')
        }
    }



    return data?.[com]?.call(window, arg1 || '', arg2 || '')
}

console.log(phoneBook('ADD Ivan 1'), phoneBook('ADD Ivan 2'), phoneBook('ADD Ivan 3'), phoneBook('ADD Sergey 3'), phoneBook('REMOVE_PHONE 3'), phoneBook('SHOW'))