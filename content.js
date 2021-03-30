
console.log("Hello New World * ")
var Snap = ({ "name": "void", "comment": "void" })
var Final = [], State = 0, Count = 0, Limit = 0, Topic = "Topic1"



const init = () => {

    const Time = setInterval(() => {
        if ($(".r-1enofrn")[110]) {
            Scraper()
            clearInterval(Time)
        }
    }, 1000)

}

init()


const Scraper = () => {

    State = 0;

    Nextify()

    let Conversation = getTopicName()
     Consolify(`Conversation :: ${Conversation}`)

    const Info = document.getElementsByClassName("r-1enofrn")

    for (let x = 0; x <= Info.length; x++) {

        let iString = Info[x].innerHTML;
        let nextString = Info[x + 1].innerHTML

        if (iString.includes("r-1gknse6") || nextString.includes("r-1gknse6")) { return } else {

            if (iString.includes('<')) iString = Refine(iString)

            if (State == 0) {
                Snap.name = iString;
                State = 1
            } else
                if (State == 1) {
                    Snap.comment = iString
                    Consolify(Snap)
                    Snap = ({ "name": "void", "comment": "void" })
                    State = 0
                }

        }


    }



}


const Nextify = () => { setTimeout(() => { Next() }, 3000) }

const Next = () => {
    let Items = document.getElementsByClassName("r-u8s1d")
    for (item of Items) {

        if ($(item).hasClass("css-1dbjc4n") && $(item).hasClass("r-u8s1d")) {
            let str = item.innerHTML;
            let Class = str.indexOf("class=")
            let frwrdClass = str.substring(Class, str.length - 1)
            let ontag = frwrdClass.indexOf(">")
            let final = frwrdClass.substring(7, ontag - 30)
            if (final == "css-1dbjc4n r-u8s1d") {
                $(item).trigger("click");
            }

        }

    }

    Topic = "Topic" + Math.random()
    Limit++

    // maybe in try catch
    if (Limit <= 5) setTimeout(() => { Scraper() }, 3000)

}



const getTopicName = () => {
        let TopicClass = $('.r-hvns9x')
        return TopicClass[0].innerHTML
}




const Arrange = (iString, nextString) => {
    let Snap = Obj
    Snap.name = iString
    Snap.comment = nextString
    Final.push(Snap)
}

const Refine = (iString) => {
    let minusStart = iString.indexOf('>')
    iString = iString.substring(minusStart + 1, iString.length - 1)
    let minusEnd = iString.indexOf('<')
    iString = iString.substring(1, minusEnd)
    return iString
}

const isEven = (n) => { return n % 2 == 0 }

const notEven = (n) => { return n % 2 !== 0 }

const Consolify = (x) => { console.log(x) }

