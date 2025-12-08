import { Button, Card, Col, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { environment } from "../env/env"
import type { Product } from "../interfaces/product.interface"
const { Meta } = Card;

export default function Products() {

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(environment.domain + 'products/')
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1 className="">Products</h1>
            <div className="container mx-auto">
                {
                    products.length === 0 &&
                    <Row>
                        <Col span={24} md={12} lg={6}>
                            <Card loading={loading}></Card>
                        </Col>
                    </Row>
                }
                <Row>
                    {products.map(product =>
                        <Col key={product.id} span={24} md={12} lg={6} className="p-2">
                            <Link to={`/products/${product.id}`}>
                                <Card
                                    className="h-full"
                                    hoverable
                                    cover={
                                        <img
                                            draggable={false}
                                            alt={product.title}
                                            src={product.image}
                                            className="h-60 object-contain"
                                        />
                                    }>
                                    <Meta title={product.title} description={product.description.split(' ').slice(0, 20).join(' ')} />
                                    <Button type="primary">Primary Button</Button>
                                </Card>
                            </Link>
                        </Col>
                    )}
                </Row>
            </div>
        </div>
    )
}
