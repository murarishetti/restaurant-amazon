export default {
    Places: [
        {
            name: 'Subway',
            thumbnail:
                'http://www.subway.com/~/media/base_english/images/branding/subway_logo_og.png',
            area: 'sdfsdfsd'
        },
        {
            name: 'PizzaHut',
            thumbnail:
                'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png',
            area: 'dsfdsfds'
        },
        {
            name: 'Dominos',
            thumbnail:
                'https://cache.dominos.com/olo/5_10_2/assets/build/images/promo/dominos_social_logo.jpg',
            area: 'fdsfsdfsdf'
        },
        {
            name: 'McDonalds',
            thumbnail:
                'http://1000logos.net/wp-content/uploads/2017/03/Font-McDonalds-Logo.png',
            area: 'dfsdfds'
        },
        {
            name: 'Burger King',
            thumbnail: 'http://www.rifaeconomia2017.com/assets/img/b5.png',
            area: 'sdfsdfsd'
        },
        {
            name: 'PapaJohns',
            thumbnail:
                'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/PapaJohns.svg/1280px-PapaJohns.svg.png',
            area: 'dsfdsfds'
        },
        {
            name: 'Dunkin Donuts',
            thumbnail:
                'http://www.mpvre.com/wp-content/uploads/2015/02/Dunkin-Donuts-710x400.jpg',
            area: 'fdsfsdfsdf'
        }
    ],
    Vegetarian: {
        data: {
            'Veggie Delight Sub': 200,
            'Aloo Patty Sub': 250,
            'Paneer Tikka Sub': 300,
            'Green Peas Patty Sub': 220,
            'Hara Bhara Kebab Sub': 230,
            'Corn and Peas Sub': 280
        },
        customisations: {
            Size: {
                selection: 'single',
                data: [{ '6 inches': 135 }, { '12 inches': 245 }]
            },
            Bread: {
                selection: 'multiple',
                data: [
                    'Flat Bread',
                    'Italian Bread',
                    'Roasted Garlic Bread',
                    'Parmesan Oregano Bread',
                    'Honey Oat Bread',
                    'Multi Grain Bread'
                ]
            },
            Customize: {
                selection: 'multiple',
                data: [
                    'Plain Bread',
                    'Bread With Cheese',
                    'Toasted Bread',
                    'Toasted Bread With Cheese'
                ]
            },
            Veggies: {
                selection: 'multiple',
                data: [
                    'Jalapenos',
                    'Cucumber',
                    'Olives',
                    'Tomatoes',
                    'Pickles',
                    'Red Onion',
                    'Lettuce',
                    'Peppers'
                ]
            },
            Sauces: {
                selection: 'multiple',
                data: [
                    'Mayonnaise Sauce',
                    'Mint Mayonnaise Sauce',
                    'Honey Mustard Sauce',
                    'Mustard Sauce',
                    'South West Sauce',
                    'Red Chilli Sauce',
                    'Sweet Onion Sauce',
                    'Harissa Mayonnaise Sauce',
                    'Barbeque Sauce'
                ]
            },
            'Add On': {
                selection: 'multiple',
                data: ['Salt and Pepper']
            },
            Extras: {
                selection: 'multiple',
                data: [{ Cheese: 18 }, { 'Veg Double Patty': 40 }]
            }
        }
    },
    'Non Vegetraian': {
        data: {
            'Roasted Chicken Sub': 300,
            'Chicken Ham Sub': 320,
            'Chicken Tikka Sub': 280,
            'Chicken Seekh Sub': 290,
            'Chicken Tandoori Sub': 300,
            'Italian BMT Sub': 350,
            'Turkey Sub': 380,
            'Tuna Sub': 400
        },
        customisations: {
            Size: {
                selection: 'single',
                data: [{ '6 inches': 135 }, { '12 inches': 245 }]
            },
            Bread: {
                selection: 'single',
                data: [
                    'Flat Bread',
                    'Italian Bread',
                    'Roasted Garlic Bread',
                    'Parmesan Oregano Bread',
                    'Honey Oat Bread',
                    'Multi Grain Bread'
                ]
            },
            Customize: {
                selection: 'single',
                data: [
                    'Plain Bread',
                    'Bread With Cheese',
                    'Toasted Bread',
                    'Toasted Bread With Cheese'
                ]
            },
            Veggies: {
                selection: 'multi',
                data: [
                    'Jalapenos',
                    'Cucumber',
                    'Olives',
                    'Tomatoes',
                    'Pickles',
                    'Red Onion',
                    'Lettuce',
                    'Peppers'
                ]
            },
            Sauces: {
                selection: 'multi',
                data: [
                    'Mayonnaise Sauce',
                    'Mint Mayonnaise Sauce',
                    'Mustard Sauce',
                    'Honey Mustard Sauce',
                    'Sweet Onion Sauce',
                    'Red Chilli Sauce',
                    'South West Sauce',
                    'Harissa Mayonnaise Sauce',
                    'Barbeque Sauce'
                ]
            },
            'Add On': {
                selection: 'multi',
                data: ['Salt and Pepper']
            },
            Extras: {
                selection: 'multi',
                data: [
                    { Cheese: 18 },
                    { 'Veg Double Patty': 40 },
                    { 'Double Meat': 50 }
                ]
            }
        }
    }
};
