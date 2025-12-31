import { useEffect, useState } from "react";
import { PRODUCT_API_URL } from "../constants";

const useDetails=()=>{
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch(PRODUCT_API_URL)
        const json = await data.json();
        setProductList(json?.products||[])
    }
    return productList
  
}

export default useDetails;