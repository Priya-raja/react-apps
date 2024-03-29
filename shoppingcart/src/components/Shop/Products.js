import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMYPRODUCTS = [
    {
      id: 'p1',
      price: 6,
      title: 'book',
      description: 'my 1st book'
    },
    {
      id: 'p2',
      price: 6,
      title: 'book',
      description: 'my 2nd book'
    }

  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product) => (
           <ProductItem
           key={product.id}
           id={product.id}
           title= {product.title}
           price={product.price}
           description={product.description}
         />

        ))
        }
       
      </ul>
    </section>
  );
};

export default Products;
