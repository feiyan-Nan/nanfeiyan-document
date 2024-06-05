export default class Compose{
    constructor(start=0){
        this.parent=null
        this.start=start
        this.worldStart=0
        this.children=[]
    }
    add(obj){
        obj.parent=this
        this.children.push(obj)
        // obj.updateWorldStart()
    }
    updateWorldStart(){
        const {parent,start}=this
        this.worldStart=parent?start+parent.worldStart:start
        this.children.forEach(ele=>{
            ele.updateWorldStart()
        })
    }

    get worldStart(){
        let n=this.start
        const parent=this.parent
        if(parent){
            n+=parent.worldStart
        }
        return n
    }
    set worldStart(val){}

    update(t){
        this.children.forEach(ele=>{
            ele.update(t)
        })
    }
}
