import Category from "../Category/Category";
import Product from "../Product/Product";
import ProductImage from "../ProductImage/ProductImage";
import Slider from "../Slider/Slider";

 
const Shop = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <ProductImage></ProductImage> */}
           <Category></Category>
             <Product></Product>
            
        </div>
    );
};

export default Shop;