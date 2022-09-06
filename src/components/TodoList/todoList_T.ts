export interface ShowList {
    id: number
    message: string
    isSelected: boolean
}

type student = 'lzc' | 'xzd' | number
interface student1 {
    name: 'lzc' | number
}
type func = (x: number, y:number) => void

interface aaaa{
    [key: string] : string
}


const a: student = 'lzc'

const b:func = () => {}
b(1, 2)

const arr:Array<aaaa[]> = ['a', 'asd', 'asdasd']