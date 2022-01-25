import { useState } from "react";
import Link from "next/link"
const data = [
    {
        id: 1,
        title: "Rifa Teste",
        img: "1.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 2,
        title: "Rifa Teste",
        follow: true,
        img: "2.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 3,
        title: "Rifa Teste",
        img: "3.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 4,
        title: "Rifa Teste",
        img: "4.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 5,
        title: "Rifa Teste",
        img: "5.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 6,
        title: "Rifa Teste",
        img: "6.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 7,
        title: "Rifa Teste",
        img: "7.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 8,
        title: "Rifa Teste",
        img: "8.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
    {
        id: 8,
        title: "Rifa Teste",
        img: "8.jpg",
        value: "positive",
        price: 1384,
        status: "R$ 25,00",
    },
];
function TopCollection() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            {data.map((item, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <Link href="/collection">
                        <a className="top-collection-content d-block">
                            <div className="d-flex align-items-center">
                                <span className="serial">{i + 1}. </span>
                                <div className="flex-shrink-0">
                                    <span className="top-img"><img
                                        className="img-fluid"
                                        src={`/images/items/${item.img}`}
                                        alt=""
                                        width="70"
                                    /></span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>{item.title}</h5>
                                    <p className="text-muted">
                                        {/* <img src="/images/svg/eth.svg" alt="" width={10} className="me-2" /> */}
                                        {item.price} números
                                    </p>
                                </div>
                                <h5 class={item.value == "positive" ? "text-success" : "text-danger"}>{item.value == "positive" ? "+" : "-"}{item.status}</h5>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}



        </>
    );
}
export default TopCollection;
