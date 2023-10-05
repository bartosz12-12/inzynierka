export default () =>{
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        div.style.cssText = `
        background: #d69f5d;
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
        svg.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
        div.appendChild(svg)
        document.documentElement.appendChild(div);
        setTimeout(()=>{div.style.transform = "translateX(0)"},100)
        setTimeout(()=>{div.style.transform = "translateX(250px)"},1500)
        setTimeout(()=>{div.remove()},2000)
    }
};