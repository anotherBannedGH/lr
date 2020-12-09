const getHashtags = text => text.match(/(?<=\#)(\w+)/gm) || []

console.log(getHashtags('Я люблю #javascript и #web'), getHashtags('Я люблю javascript и web'))

const normalizeHashtags = arr => [...new Set(arr.map((i) => i.toLowerCase()))]

console.log(normalizeHashtags(['Asc', 'asc', 'SqwsX', 'sqwsx']), normalizeHashtags([]))


/*   Телефонная книга     */


window.book = {}

function phoneBook(command) {

    const [com, arg1, arg2] = command.split(' ')

    let data = {

        'ADD': function (name, phones) {
            let list = this.book?.[name]
            this.book[name] = [].concat(phones.split(',') || [], list || [])
        },

        'REMOVE_PHONE': function (phone) {

            let found = false
            
            Object.keys(this.book).forEach((key) => {

                let value = this.book[key]

                if (value && value.length) {
                    let prevLength = value.length

                    value = value.filter((item) => {
                        return item !== phone
                    })

                    this.book[key] = value

                    if (prevLength != value.length) {
                        found = true
                        return;
                    }
                }
            })

            console.log(found)
        },

        'SHOW': function () {
            console.log(
                Object.entries(this.book).map(([key, value]) => {
                    if (value.length) {
                        return `${key}: ${value.join(',')}`
                    }
                }).join('\n')
            )
        }
    }



    return data?.[com]?.call(window, arg1 || '', arg2 || '')
}

phoneBook('ADD Ivan 1')
phoneBook('ADD Ivan 2')
phoneBook('ADD Ivan 3')
phoneBook('ADD Sergey 4')
phoneBook('REMOVE_PHONE 5')
phoneBook('SHOW')

delete this.book