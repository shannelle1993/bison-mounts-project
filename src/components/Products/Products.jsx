import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'; 
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.' , price: '$5', image: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw341f76fb/images/ProductImages/110339/110339_099_l_WR.jpg?sw=900'},
    { id: 2, name: 'T-shirt', description: 'T-shirt.', price: '$10', image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/425974/item/goods_37_425974.jpg?width=1600&impolicy=quality_75' },
];

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>  
                ))}
            </Grid>
        </main>
    )
}

export default Products;