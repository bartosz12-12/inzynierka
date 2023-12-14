/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (request?:any) =>{
    console.log('Zawartość obiektu request:', request);
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style.cssText = `
            background:red;
            width:200px;
            min-height:60px;
            border-left: solid 6px #2E2E2E;
            border-radius: 6px;
            color:white;
            position: fixed;
            right: 0;
            top: 100px;
            z-index: 100;
            display:flex;
            justify-content:center;
            align-items:center;
            transition: all 0.5s;
            transform:translateX(200px);
    `;
        div.style.fontFamily="'TmpFont', sans-serif"
        div.style.fontSize="0.8em";
        div.innerHTML = "Delete"
        document.documentElement.appendChild(div);

        setTimeout(()=>{div.style.transform = "translateX(0)"},100)
        setTimeout(()=>{div.style.transform = "translateX(250px)"},1500)
        setTimeout(()=>{div.remove()},2000)
    }
};