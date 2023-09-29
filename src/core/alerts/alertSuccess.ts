/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (request:any, patch?:boolean) =>{
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style.cssText = `
            background:${patch?'#e9e9ff96':'#e4f8f096'};
            width:200px;
            height:60px;
            border-left: ${patch? 'solid 6px #696cff' : 'solid 6px #009688'};
            border-radius: 6px;
            color:${patch? '#696cff' : '#009688'};
            position: fixed;
            right: 0;
            top: 100px;
            z-index: 100;
            display:flex;
            justify-content:center;
            align-items:center;
            transition: all 0.5s;
            transform:translateX(200px);
            font-family: sans-serif,
        `;
        div.style.fontFamily="'TmpFont', sans-serif"
        div.style.fontSize="0.8em";

        if(request && request.wtf){
            console.log('request', request)
        }
        div.innerHTML=request

        document.documentElement.appendChild(div);

        setTimeout(()=>{div.style.transform = "translateX(0)"},100)
        setTimeout(()=>{div.style.transform = "translateX(250px)"},1500)
        setTimeout(()=>{div.remove()},2000)
    }
};