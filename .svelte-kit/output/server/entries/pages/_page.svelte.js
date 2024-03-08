import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#spin.svelte-qb3mr{animation-name:svelte-qb3mr-spin;animation-duration:5000ms;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes svelte-qb3mr-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes svelte-qb3mr-spin2{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col items-center justify-center w-screen h-screen bg-[#ffadbb] bg-cover bg-center"><div class="flex flex-col items-center justify-center w-screen mb-10"><a href="index" class="h-10 lg:h-20 mt-20 text-lg flex flex-col justify-center items-center hover:bg-transparent bg-trasparent text-white lg:text-3xl lg:w-1/5"><img id="spin" src="/monchichi-logo.png" alt="" class="svelte-qb3mr">
            CLICK TO OPEN
        </a></div>
</div>`;
});
export {
  Page as default
};
