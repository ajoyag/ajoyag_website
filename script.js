console.log("Running...")
document.querySelector('.cross').style.display = 'none'
document.querySelector('.cross').addEventListener("click", ()=>{
    document.querySelector('.cross').classList.toggle('sidebarGo')
    
})