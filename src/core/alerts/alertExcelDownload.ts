import axios from "axios";
export default async (manual?:boolean, state?:string) =>{
    if (typeof document !== 'undefined') {
        if(manual){
            switch(state){
                case "start":
                    break;
                case "stop":

                    break;
            }
        }



        const div = document.createElement('div');
        div.style.cssText = `
        background: #ffffff;
        width: 5%;
        height: 15%;
        position: fixed;
        left: 0;
        top: 100px;
        z-index: 100;
        border-top-right-radius:15px;
        border-bottom-right-radius:15px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all 0.5s;
        transform:translateX(-200px);
    `;
        const svg = document.createElement('div');
        svg.style.cssText=`
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        `;
        const response = await axios.get('/img/excel.png.txt');
        const text = response.data;
        svg.innerHTML=`
                <img style="box-sizing: border-box; width:70%; height:70%;" src="${text}">
                
        `;
        div.appendChild(svg)
        document.documentElement.appendChild(div);
        setTimeout(()=>{div.style.transform = "translateX(0)"},100)
        setTimeout(()=>{div.style.transform = "translateX(-250px)"},1500)
        setTimeout(()=>{div.remove()},2000)
    }
};