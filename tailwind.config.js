import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#659287',
                second: '#FFE6A9',
            },
        },
    },

    plugins: [forms, flowbite.plugin()],
};
