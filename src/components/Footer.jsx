import React from 'react';


function Footer() {
  return (
    <section class="customFooter" >

    {/* footer */}
    <footer class="bg-dark text-center text-white">
    
      <div class="container p-4 pb-0">
       
        <section class="mb-4">
         
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>

         
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-twitter"></i
          ></a>

         
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-google"></i
          ></a>

          
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-instagram"></i
          ></a>

         
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>

          
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        
      </div>
    

     
      <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2023 Copyright:
        <a href class="text-white text-decoration-none" 
          >Assets Vaults SC || All Rights Reserved</a
        >
      </div>
     
    </footer>
    
</section>
  )
}

export default Footer
