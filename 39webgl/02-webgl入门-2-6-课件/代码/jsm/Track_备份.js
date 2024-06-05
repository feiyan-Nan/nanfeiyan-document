/*
map 类型
keyMap=[
    'a',[
        [t,val],
        [t,val],
        [t,val],
    ],
    ...
/

* */

export default class Track{
    constructor(target){
        this.target=target
        this.parent=null
        this.start=0
        this.worldStart=0
        this.localTime=0
        this.keyMap=new Map()
        this.timeLen=5
        this.loop=false
    }
    updateWorldStart(){
        const {parent,start}=this
        this.worldStart=parent?start+parent.worldStart:start
    }
    update(t){
        const {keyMap,timeLen,target}=this
        const time=(t-this.worldStart)%timeLen
        for(const [key,fms] of keyMap.entries()){
            const last=fms.length-1
            console.log('time',time);
            console.log('fms[0][0]',fms[0][0]);
            if(time<=fms[0][0]){
                continue
            }
            if(time>=fms[last][0]){
                target[key]=fms[last][1]
            }else{
                target[key]=getValBetweenFms(time,fms,last)
            }
        }
    }
}
function getValBetweenFms(time,fms,last){
    for(let i=0;i<last;i++){
        const fm1=fms[i]
        const fm2=fms[i+1]
        if(time>=fm1[0]&&time<=fm2[0]){
            console.log('点斜式运算');
            const delta={
                x:fm2[0]-fm1[0],
                y:fm2[1]-fm1[1],
            }
            const k=delta.y/delta.x
            const b=fm1[1]-fm1[0]*k
            return k*time+b
        }
    }
}
