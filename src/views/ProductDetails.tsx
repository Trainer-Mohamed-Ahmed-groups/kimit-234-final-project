import { Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { environment } from "../env/env";
import type { Product } from "../interfaces/product.interface";

export default function ProductDetails() {
    let { id } = useParams();
    const { t } = useTranslation()
    const [product, setProduct] = useState<Product>({} as Product)

    console.log(id)

    useEffect(() => {
        axios.get(`${environment.domain}products/${id}`)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <h1 className="text-3xl text-center my-4 font-black">{t('productDetails')}</h1>
            {
                product &&
                <>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <Rate disabled value={product.rating && Math.floor(product.rating.rate)} />
                </>
            }
        </div>
    )
}
