var initialState = [
    {
        id:1,
        name : 'iphone 6 plus',
        price : 400,
        status : true
    },
    {
        id:2,
        name : 'iphone 8 plus',
        price : 100,
        status : false
    },
    {
        id:3,
        name : 'iphone 10 plus',
        price : 200,
        status : true
    },
];

const products = (state = initialState, action) =>{
    switch (action.type) {
        default: return [...state]
    }
}

export default products;