
export class Log{

    static primary(text : string ){
       console.log(`%c ${text}`, 'color : white; background : black;font-size : 24px;')
    }

    static secondary(text : string ){
        console.log(`%c ${text}`, 'color : black; background : wheat ;font-size : 24px;')
    }

    static Info(text : string ){
        console.log(`%c ${text}`, 'color : white; background : blue ;font-size : 24px;')
    }

    static Success(text : string ){
        console.log(`%c ${text}`, 'color : white; background : green ;font-size : 24px;')
    }

    static Warning(text : string ){
        console.log(`%c ${text}`, 'color : red; background : yellow ;font-size : 24px;')
    }

    static Error(text : string ){
        console.log(`%c ${text}`, 'color : yellow; background : red ;font-size : 24px;')
    }
}

