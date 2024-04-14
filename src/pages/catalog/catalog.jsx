
import HeaderMain from "../../components/header-main/header-main";
import CardList from "../../components/card-list/card-list";
import './catalog.css';
import { products } from "../../mock/mock";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/footer";
import { useCallback, useState } from "react";
import { FilterNames } from "../../const";
import { sortProducts } from "../../util/util";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function CatalogPage() {

 const [activeFilter, setActiveFilter] = useState(FilterNames.all);

 const [activeSort, setActiveSort] = useState('')

 const filteredProducts = products.filter((product) => {
  if (activeFilter === FilterNames.all) {
   return true;
  }
  return product.brand === activeFilter
 });

 const handleFilterChange = useCallback((value) => {
  setActiveFilter(value);
 }, []);

 const handleSortChange = useCallback((value) => {
  setActiveSort(value);
 }, []);

 const sortedProducts = sortProducts(filteredProducts, activeSort);

 return (
  <>
   <Helmet>
    <title>Maresa Group | Каталог</title>
   </Helmet>

   <HeaderMain />

   <main className="page page_catalog">

    <motion.div
     className="container"
     initial="hidden"
     whileInView="visible"
     viewport={{ amount: 0.2, once: true }}
    >

     <Filter
      activeFilter={activeFilter}
      onChangeActiveFilter={handleFilterChange}
      activeSort={activeSort}
      onChangeActiveSort={handleSortChange}
     />

     <CardList products={sortedProducts} />

    </motion.div>

   </main >

   <Footer />

  </>
 )
}

export default CatalogPage;