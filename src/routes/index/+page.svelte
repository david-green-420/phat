<div id="intro" class="w-screenflex items-center justify-top flex-col bg-cover"> 
        <div class="flex flex-col items-center justify-center w-screen bg-[url('/rune-3.gif')] h-screen bg-cover bg-center">
            
        <nav
            class="top-0 left-0 flex w-full items-center justify-evenly bg-opacity-0 bg-cover px-3 lg:px-36"
        >
            
            <div class="hidden lg:block p-2 bg-[#2239b6]">
                {#each links as { label, href }}
                    <a
                        class="text-5xl font-bold text-white px-3 text-stroke"
                        {href}>{label}
                    </a>
                {/each}
            </div>

            <div class="flex flex-center align-content-center justify-content-center mt-4 lg:hidden">
                <Hamburger
                    bind:open
                    --color="white" 
                />  
            </div>
        </nav> 

        <div class="lg:hidden">
            <Menu bind:open/>
        </div>

        <audio autoplay hidden loop>
            <source src="/audio.mp3" type="audio/mpeg">
            Your browser does not support the audio tag. 
        </audio>
        <div class="flex flex-col items-center justify-center h-auto mt-36">
                <img src="/phat.png" alt="" class="w-96">
                
                <div class="flex items-center mt-10">
                    <a href="https://twitter.com/" target="_blank" class="mx-1">
                        <button class="flex justify-center items-center btn-circle hover:bg-[#4b59a4] bg-[#2239b6]">
                            <img src="/twitter.png" class="w-[24px] h-[24px]" alt="twitter">
                        </button>
                    </a>
                    <a href="https://t.me/" target="_blank" class="mx-1">
                        <button class="flex justify-center items-center btn-circle hover:bg-[#4b59a4] bg-[#2239b6]">
                            <img src="/telegram.png" class="w-[24px] h-[24px]" alt="telegram">
                        </button>
                    </a>
                    <a href="https://birdeye.so/" target="_blank" class="mx-1">
                        <button class="flex justify-center items-center btn-circle hover:bg-[#4b59a4] bg-[#2239b6]">
                            <img src="/bird.png" class="w-[24px] h-[24px]" alt="dex tools">
                        </button>
                    </a>
                    <a href="https://raydium.io/" target="_blank" class="mx-1">
                        <button class="flex justify-center items-center btn-circle hover:bg-[#4b59a4] bg-[#2239b6]">
                            <img src="/raydium-white.png" class="w-[24px] h-[24px]" alt="dex tools">
                        </button>
                    </a>
                </div>
                <button class="btn hover:bg-[#4b59a4] bg-[#2239b6] rounded-full w-auto h-14 lg:text-2xl text-lg text-white px-10 py-2 mt-10" use:copy={'0000000.....0000000'}>
                    0000000.....0000000
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32"
                        class="lg:ml-3 ml-2 mb-2"
                        viewBox="0 0 33 32" fill="none">
                        <path
                            d="M27.5 3.5H11.5C11.1022 3.5 10.7206 3.65804 10.4393 3.93934C10.158 4.22064 10 4.60218 10 5V9.5H5.5C5.10218 9.5 4.72064 9.65804 4.43934 9.93934C4.15804 10.2206 4 10.6022 4 11V27C4 27.3978 4.15804 27.7794 4.43934 28.0607C4.72064 28.342 5.10218 28.5 5.5 28.5H21.5C21.8978 28.5 22.2794 28.342 22.5607 28.0607C22.842 27.7794 23 27.3978 23 27V22.5H27.5C27.8978 22.5 28.2794 22.342 28.5607 22.0607C28.842 21.7794 29 21.3978 29 21V5C29 4.60218 28.842 4.22064 28.5607 3.93934C28.2794 3.65804 27.8978 3.5 27.5 3.5ZM20 25.5H7V12.5H20V25.5ZM26 19.5H23V11C23 10.6022 22.842 10.2206 22.5607 9.93934C22.2794 9.65804 21.8978 9.5 21.5 9.5H13V6.5H26V19.5Z"
                            fill="#F8F7FF" />
                    </svg>
                </button> 
        </div>
        </div>

        <div id="about" class="flex flex-col items-center justify-center w-screen h-screen text-center bg-[url('/rune-4.gif')] bg-cover bg-center">

            <div class="flex flex-col items-center justify-center h-auto p-10">
                <h1 class="text-5xl lg:text-7xl text-[#2239b6] bg-[#bdc7ff]">
                    $PHAT
                </h1>
                <h1 class="text-xl lg:mx-14 text-center lg:text-3xl lg:mt-14 text-[#2239b6] bg-[#bdc7ff]">
                    $PHAT, inspired by the iconic blue party hat from RuneScape, embodies a virtual legacy as a token on solana, <br> bringing the nostalgia of in-game celebrations to the decentralized world of finance.<br>
                </h1> 
                <h1 class="text-md lg:text-3xl mt-2 text-[#2239b6] bg-[#bdc7ff]">
                    Its vibrant hue and limited supply make $PHAT a sought-after digital collectible, blending the allure <br> of gaming memories with the cutting-edge technology of blockchain.
                </h1> 
            </div>
        </div>

        <div id="tokenomics" class="h-[1667px] lg:h-screen w-screen flex items-center justify-top flex-col pt-10 lg:mt-0 overflow-hidden bg-[url('/rune-2.gif')] bg-cover bg-center">

            <h3 class="text-white text-2xl">Contract Address:</h3>
            <button class="btn hover:bg-[#4b59a4] bg-[#2239b6] rounded-full w-auto h-14 lg:text-2xl text-lg text-white px-10 py-2 mt-10" use:copy={'0000000.....0000000'}>
                0000000.....0000000
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32"
                    class="lg:ml-3 ml-2 mb-2"
                    viewBox="0 0 33 32" fill="none">
                    <path
                        d="M27.5 3.5H11.5C11.1022 3.5 10.7206 3.65804 10.4393 3.93934C10.158 4.22064 10 4.60218 10 5V9.5H5.5C5.10218 9.5 4.72064 9.65804 4.43934 9.93934C4.15804 10.2206 4 10.6022 4 11V27C4 27.3978 4.15804 27.7794 4.43934 28.0607C4.72064 28.342 5.10218 28.5 5.5 28.5H21.5C21.8978 28.5 22.2794 28.342 22.5607 28.0607C22.842 27.7794 23 27.3978 23 27V22.5H27.5C27.8978 22.5 28.2794 22.342 28.5607 22.0607C28.842 21.7794 29 21.3978 29 21V5C29 4.60218 28.842 4.22064 28.5607 3.93934C28.2794 3.65804 27.8978 3.5 27.5 3.5ZM20 25.5H7V12.5H20V25.5ZM26 19.5H23V11C23 10.6022 22.842 10.2206 22.5607 9.93934C22.2794 9.65804 21.8978 9.5 21.5 9.5H13V6.5H26V19.5Z"
                        fill="#F8F7FF" />
                </svg>
            </button> 

            <div class="w-screen flex items-center justify-center mt-5 lg:flex-row flex-col text-[#2239b6]">
                    <div class="lg:w-[20%] w-72 h-96 flex flex-col justify-center items-center bg-[#bdc7ff] border-2 rounded-3xl my-5 lg:mx-5">
                        <h2 class="text-3xl text-center w-2/3 py-10">SYMBOL</h2>
                        <h1 class="text-3xl text-center w-2/3 pb-10">$PHAT</h1>
                        <img src="/logo.png" class="h-36" alt="sticker">
                    </div>
                    <div class="lg:w-[20%] w-72 h-96 flex flex-col justify-center items-center bg-[#bdc7ff] border-2 rounded-3xl my-5 lg:mx-5">
                        <h2 class="text-3xl text-center w-2/3 py-10">MINT</h2>
                        <h1 class="text-3xl text-center w-2/3 pb-10">Revoked</h1>
                        <img src="/logo.png" class="h-36" alt="sticker">
                    </div>
                    <div class="lg:w-[20%] w-72 h-96 flex flex-col justify-center items-center bg-[#bdc7ff] border-2 rounded-3xl my-5 lg:mx-5">
                        <h2 class="text-3xl text-center w-2/3 py-10">LP</h2>
                        <h1 class="text-3xl text-center w-2/3 pb-10">Burned Forever</h1>
                        <img src="/logo.png" class="h-36" alt="sticker">
                    </div>
                </div>

                <div class="flex items-center justify-center flex-col lg:flex-row lg:mt-36">

                <div class="flex items-center justify-center mx-5">
                    <img src ="/phat.png" class="lg:w-20 lg:mr-5 m-1 w-10">
                    <h1 class="lg:text-5xl text-[#2239b6] text-3xl">
                        $PHAT
                    </h1>
                </div>

                <div class="flex items-center mx-5">
                    <a href="https://t.me/" target="_blank" class="mx-1 my-2">
                        <button class="btn btn-outline hover:bg-slate-50 rounded-full w-auto h-14 lg:text-lg text-md text-white pl-3">
                            <img src="/telegram.png" class="w-[36px] h-[36px] lg:mr-3 mr-2" alt="telegram">Join Telegram
                        </button>
                    </a>
                </div> 

                <div class="flex items-center mx-5">
                    <a href="https://twitter.com/" target="_blank" class="mx-1 my-2">
                        <button class="btn btn-outline hover:bg-slate-50 rounded-full w-auto h-14 lg:text-lg text-md text-white pl-3">
                            <img src="/twitter.png" class="w-[36px] h-[36px] lg:mr-3 mr-2" alt="telegram">Follow Us On X
                        </button>
                    </a>
                </div>
            </div>
        </div>
</div>



<style>
@import url("https://use.typekit.net/axl1phm.css");


:global(html) {
    scroll-behavior: smooth;
}
</style>

<script>


    import { copy } from 'svelte-copy';

    const links = [
        {
            label : "Home",
            href  : "/index/#intro",
        },
        
        {
            label : "About",
            href  : "/index/#about",
        },
        {
            label : "Tokenomics",
            href  : "/index/#tokenomics",
        },
    ];
    
    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    let open;

</script>