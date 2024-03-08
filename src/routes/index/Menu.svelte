<script>
// @ts-nocheck
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    let links = ["/index/#intro","/index/#about", "/index/#tokenomics"];

    export let open;
</script>

{#if open}
    <div>
        {#each ['Home', 'About', 'Tokenomics'] as link, i}
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="{links[i]}" style="text-decoration:none">
                <p transition:fly={{ y: -15, delay: 50 * i }}>
                    {link}
                </p>
            </a>
            
        {/each}
    </div>
    <div class="flex items-center">
        <a href="https://t.me/" target="_blank" class="mx-1">
            <button class="btn btn-outline hover:bg-[#08b478] rounded-full lg:w-60 w-52 h-14 lg:text-lg text-md text-[#08b478] pl-3">
                <img src="/telegram.png" class="w-[36px] h-[36px] lg:mr-3 mr-2" alt="telegram">Join Telegram
            </button>
        </a>
    </div> 

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
    a{
        
    }
    :global(html) {
        background: #1d1d2f;
    }
    div {
        text-align: center;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
    }
    p {
        font-weight: bold;
        font-size: 1.5em;
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
</style>
