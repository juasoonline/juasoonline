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
