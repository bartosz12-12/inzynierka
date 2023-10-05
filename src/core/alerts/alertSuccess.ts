export default () =>{
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style.cssText = `
        background: blue;
        width: 8%;
        height: 15%;
        position: fixed;
        right: 0;
        top: 100px;
        z-index: 100;
        border-top-left-radius:15px;
        border-bottom-left-radius:15px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all 0.5s;
        transform:translateX(200px);
    `;
        const svg = document.createElement('svg');
        svg.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        div.appendChild(svg)
        document.documentElement.appendChild(div);

        setTimeout(()=>{div.style.transform = "translateX(0)"},100)
        setTimeout(()=>{div.style.transform = "translateX(250px)"},1500)
        setTimeout(()=>{div.remove()},2000)
    }
};