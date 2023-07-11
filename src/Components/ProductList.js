import { useFilterContext } from "../Context/filterContext";
import { GridView } from "./GridView";

export const ProductList =()=>{
    const { filter_products } = useFilterContext();

    return <GridView products={filter_products} />
}