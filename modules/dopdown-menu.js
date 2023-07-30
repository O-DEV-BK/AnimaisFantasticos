export default function dropdownmenu(){

}

const dropdownmenus = document.querySelectorAll('[data-dropdown')

dropdownmenus.forEach((menu)=>{
  ['touchstart', 'click'].forEach((userevent)=>{
    menu.addEventListener(userevent, handleClick);
  })
})

function handleClick(event){
  event.preventDefault();
  this.classList.toggle('active')
}