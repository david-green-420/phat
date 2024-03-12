<div class="flex flex-col items-center justify-center w-screen h-screen bg-[url('/rune-enter.gif')] bg-cover bg-center">
    <div class="flex flex-col items-center justify-center w-screen mb-10">
        <img id="spin" src="/phat.png" class="h-72 p-10" alt="">
        <a  
            href="index"
            class="h-10 lg:h-14 text-3xl flex flex-col justify-center items-center bg-blue-700 text-white lg:text-5xl w-auto p-3">
            
            CLICK TO ENTER
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