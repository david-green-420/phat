<div class="flex flex-col items-center justify-center w-screen h-screen bg-[#82c9fe] bg-cover bg-center">
    <div class="flex flex-col items-center justify-center w-screen mb-10">
        <a  
            href="index"
            class="h-10 lg:h-20 mt-36 text-3xl flex flex-col justify-center items-center hover:bg-transparent bg-trasparent text-white lg:text-5xl lg:w-1/5">
            <img id="spin" src="/phat.png" class="h-72 p-10" alt="">
            CLICK TO OPEN
        </a>
    </div>
</div>

<style>
    #spin{
       animation-name: spin;
       animation-duration: 5000ms;
       animation-iteration-count: infinite;
       animation-timing-function: linear; 
     /* transform: rotate(3deg); */
      /* transform: rotate(0.3rad);/ */
      /* transform: rotate(3grad); */ 
      /* transform: rotate(.03turn);  */
   }
   #spin2{
       animation-name: spin2;
       animation-duration: 5000ms;
       animation-iteration-count: infinite;
       animation-timing-function: linear; 
     /* transform: rotate(3deg); */
      /* transform: rotate(0.3rad);/ */
      /* transform: rotate(3grad); */ 
      /* transform: rotate(.03turn);  */
   }
   
   @keyframes spin {
       from {
           transform:rotate(0deg);
       }
       to {
           transform:rotate(360deg);
       }
   }
   @keyframes spin2 {
       from {
           transform:rotate(360deg);
       }
       to {
           transform:rotate(0deg);
       }
   }
</style>