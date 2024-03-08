const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    daisyui: {
        themes: "emerald",
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("prettier-plugin-tailwindcss"),
    ],
    theme : {
        extend : {
            fontFamily : {
                'sans': [ "runescape", "bold"],
            },
        },
    },
};

module.exports = config;
