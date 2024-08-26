// tyeping script Js -->
var typed = new Tyepd(".typing" ,{
strings:["Wev Developer" ,"Web Designer" ,"Youtuber"],
tyepSpeed:80,
tyepBack:80,
});

var typed = new Tyepd(".tyeping-2" ,{
    strings:["Wev Developer" ,"Web Designer" ,"Youtuber",],
    tyepSpeed:80,
    tyepBack:80,
    });



      /*====>>>>>>.  show  FAQ ans  ======> */
      const faqs = document.querySelectorAll('.faq')

      faqs.forEach(faq =>{
        faq.addEventListener('click', () =>{
            faq.classList.toggle('open')


    
        // change icon

        const icon =faq.querySelector('.faq_icon');
        if(icon.className === 'bx bx-plus'){
            icon.className = 'bx bx-minus'
        }
        else{
            icon.className = 'bx bx-plus'
        }
        })
     })




    // Show/Hide FAQs answer
// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');




//     })
// })


const menu =document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');


const closeBtn = document.querySelector('#close-menu-btn')



menuBtn.addEventListener('click',function() {
  menu.style.display = "flex"
  closeBtn.style.display = "inline - block"
    menuBtn.style.display = "none"
}

)

const closeNav = () =>{
    menu.style.display ="none"
    closeBtn.style.display = "none"
    menuBtn.style.display ="inline-block"
}

closeBtn.addEventListener('click ',closeNav)





window.addEventListener('scroll' ,() =>{
    document.querySelector('nav').classList.toggle("window-scroll",window.scrollY>100)
}
)