module.exports = {
    mode: 'jit',
    content: [
        './index.html',
        './src/**/*.{svelte,js,ts}',
    ],
    theme: {
        fontFamily: {
            'montserrat': ['Poppins', 'sans-serif'],
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};