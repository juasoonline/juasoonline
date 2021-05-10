module.exports =
{
    purge:
    {
        mode: 'layers',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },

    darkMode: false, // or 'media' or 'class'

    theme:
    {
        fontSize:
        {
            'xxxs': '.54rem',
            'xxs': '.70rem',
            'xs': '.75rem',
            'ct': '.775rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },

        fontFamily:
        {
            juaso: [ 'Nunito' ]
        },

        backgroundColor: theme => ({
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
            'juaso-extra': '#1d4b95',
        }),

        textColor: theme => ({
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
        }),

        borderColor: theme => ({
            DEFAULT: theme('colors.gray.200', 'currentColor'),
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
        }),

        screens:
        {
            'xs': {'min': '319px', 'max': '639px'},
            'sm': {'min': '640px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1279px'},
            'xl': {'min': '1280px', 'max': '1535px'},
            '2xl': {'min': '1536px'},
        },

        extend:
        {
        },
    },

    variants:
    {
        extend:
        {
        },
    },

    plugins: [],
}
