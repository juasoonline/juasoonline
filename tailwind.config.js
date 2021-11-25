module.exports =
{
    purge:
    {
        mode: 'layers',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },

    darkMode: false,

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
            juaso: [ 'Nunito' ],
        },

        backgroundColor: theme => ({
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
            'juaso-extra': '#1d4b95',
            'juaso-fourth': '#3ca5e5',

            'flash-deals': '#f92a22',
        }),

        textColor: theme => ({
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
            'juaso-extra': '#1d4b95',
            'juaso-fourth': '#40b1f5',

            'flash-deals': '#f92a22',
        }),

        borderColor: theme => ({
            DEFAULT: theme('colors.gray.200', 'currentColor'),
            ...theme('colors'),
            'juaso-primary': '#1a4487',
            'juaso-secondary': '#2d8bc3',
            'juaso-extra': '#1d4b95',
            'juaso-fourth': '#40b1f5',

            'flash-deals': '#f92a22',
        }),

        backgroundImage: theme => (
        {
            'header-banner': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/banner.svg')",
            'banner': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/banner.jpeg')",
            'bg-1': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/midnight.jpeg')",
            'bg-2': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/solid_blue.jpeg')",
            'bg-3': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/messenger.jpeg')",
            'coupon-bg': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/coupon-bg-banner.jpg')",
            'coupon2-bg': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/coupon-1.webp')",
            'coupon3-bg': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/brand_bg.png')",
            'coupon4-bg': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/coupons-v5-bg.jpg')",
            'flash_bg': "url('https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/backgrounds/burning-sunrise.jpg')",
        }),

        screens:
        {
            'xs': {'min': '225px', 'max': '639px'},
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
