let openchat = document.getElementById("chat-open");
let closechat = document.getElementById("close-btn2");
let chatui  = document.getElementById("en-main");

openchat.addEventListener("click" , () =>
{
   // openchat.style.cssText = "display:none";
   chatui.style.cssText = "display:block";
});

closechat.addEventListener("click" , () =>
{
   chatui.style.cssText = "display:none";
   // openchat.style.cssText = "display:block";

});



// let sendbtn  = document.getElementById("send-btn");
// let chatcustom  = document.getElementById("chat-cust");
// let chatuser = document.getElementById("chat-come");
// let customchat  = document.getElementById("chat-cs"); 
// let dchat = document.getElementById("default-chat");

// var input = document.getElementById("chat-inp");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("send-btn").click();
//     input.value = "  ";
//   }
// });


// sendbtn.addEventListener("click" , function()
// {
// let chatinp = document.getElementById("chat-inp").value;
//     if(chatinp.includes('@'))
//     {
// // var input = document.getElementById("chat-inp");/
// // chatinp.name = email;
//  input.name = "email";
// let p = 
//     ` <p id="define-msg "> thank you</p>
//     `;
//     dchat.innerHTML  = p;

//     }
//     else{
//    input.name = "msg";
// let p = 
// ` <p id="define-msg ">plz enter your email address our team reply you in 24 hours </p>
// `;
// dchat.innerHTML = p;
// // let definechat = document.getElementById("define-msg").innerHTML = "thank you for visiting";
//     }
//      let r = `
//      <p id="chat-come">${chatinp}</p> <br>
//      `;
//     // customchat.classList.add("chat-cs");
//     chatcustom.innerHTML += r ;
   
    
//     const scriptURL ='https://script.google.com/macros/s/AKfycbzv6Ppl2ZEhKKkbzhvKWz-djXLS-wJU1fl5q6tjNJ8tfBB4qdHG1kNTnzavel3uFRXb/exec';
//     const form = document.forms['contacthf2']
  
//     form.addEventListener('submit', e => {
//       e.preventDefault()
//       if(chatinp.includes('@')){
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => alert("Thank you! your form is submitted successfully." ))
//         .then(() => {  window.location.reload(); })
//         .catch(error => console.error('Error!', error.message))
//       }
//     })
  
//     // customchat.innerHTML 
// });


function chatrep()
{
    let userinput = document.getElementById("user-input").value;
    // userinput = parseInt(userinput);
    let rchatbox =
    `  
    <h6>Web Development</h6>
    <p> Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</p>
    <br>
    <button class="chat-btn-con"> E-commerce</button>
    <button class="chat-btn-con"> IT-company</button>
    <button class="chat-btn-con"> Business</button>
     
     <h6>Price : Starting From 8000/-</h6>
     
     <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr"> Contact us</button>
  
  
    `;

    let rchatbox2 =
    `  
    <h6>Web Design</h6>

    <p>Web design has numerous components that work together to create the finished experience of a website, including graphic design, user experience design, interface design, search engine optimization (SEO) and content creation.</p>
    <br>
   
    <button class="chat-btn-con"> UX design</button>
    <button class="chat-btn-con"> Interface Design</button>
    <button class="chat-btn-con"> Seo</button>
    
    <h6>Price : Starting From 5000/-</h6>
    <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr2"> Contact us</button>
    
    `;

    let rchatbox3 =
    `  
    <h6>React Development</h6>

    <p>ReactJS development services refer to the services that integrate crafting web apps and interactive user interface using the ReactJS library</p>
    <br>
   
    <button class="chat-btn-con"> E-commerce</button>
    <button class="chat-btn-con"> Business</button>
    <button class="chat-btn-con"> Personal</button>
    
    <h6>Price : Starting From 7000/-</h6>
    
    <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr3"> Contact us</button>
    
    `;

    let rchatbox4 =
    `  
    <h6>Video Editting</h6>
    <p>What do video editing services include?
    Video editing services can include cutting segments (trimming), re-sequencing clips, and adding transitions & other Special Effects. Linear video editing uses videotape and is edited in a very linear way. </p>
    <br>
   
    <button class="chat-btn-con"> Ads</button>
    <button class="chat-btn-con"> Cinematic</button>
    <button class="chat-btn-con"> Teaser</button>
    <button class="chat-btn-con"> Marketing</button>

    
    <h6>Price : Starting From 1800/-</h6>
    
      <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr4"> Contact us</button>
    `;

    let rchatbox5 =
    `  
    <h6>Seo</h6>
    <p>
    SEO techniques include keyword strategy, content strategy, site audits, on-page optimization, off-page optimization, content development, and competitor analysis.</p>
    <br>
   
    <button class="chat-btn-con"> Title</button>
    <button class="chat-btn-con"> Meta</button>
    <button class="chat-btn-con"> Header</button>
    
    <h6>Price : Starting From 2200/-</h6>
    
    <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr5"> Contact us</button>
    
    `;
switch (true) {

case userinput == 1:
    
document.getElementById("rcb").innerHTML +=rchatbox;

    break;

case userinput == 2:
    // alert("Greater than 10");
document.getElementById("rcb").innerHTML +=rchatbox2;

    break;

    case userinput == 3:
    // alert("Greater than 10");
document.getElementById("rcb").innerHTML +=rchatbox3;

    break;

    case userinput == 4:
    // alert("Greater than 10");
document.getElementById("rcb").innerHTML +=rchatbox4;

    break;

    case userinput == 5:
    // alert("Greater than 10");
document.getElementById("rcb").innerHTML +=rchatbox5;

    break;

default:
    alert("Please input value");
    break;
    }
}


let chat1 = document.getElementById("chat-1");
chat1.addEventListener("click" , (e) =>
{
    // let userinput = document.getElementById("user-input").value;
    // userinput = parseInt(userinput);
    e.preventDefault()
    let rchatbox =
    `  
    <h6 id="web-head-1"> Web Development</h6>
    <p> Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</p>
    <br>
    <button class="chat-btn-con"> E-commerce</button>
    <button class="chat-btn-con"> IT-company</button>
    <button class="chat-btn-con"> Business</button>
     
     <h6>Price : Starting From 8000/-</h6>
     
     <button type="button"  class="btn web-con-btn"  data-toggle="modal" data-target="#chatbr"> Contact us</button>
  
 
  
    `;

document.getElementById("rcb").innerHTML +=rchatbox;

})
