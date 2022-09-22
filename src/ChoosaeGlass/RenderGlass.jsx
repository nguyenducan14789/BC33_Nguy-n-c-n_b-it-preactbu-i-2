import React, { Component } from 'react'
import './css/Render.css'
let ArrProduct = [
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./image/productGlass/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./image/productGlass/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./image/productGlass/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./image/productGlass/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./image/productGlass/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./image/productGlass/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./image/productGlass/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./image/productGlass/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./image/productGlass/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class RenderGlass extends Component {
    renderProduct = () => {
        let arrTr = ArrProduct.map((item) => {
            return (
                <a href='#'>
                    <img src={item.url}></img>
                </a>
            )
        })
        return arrTr
    }
    render() {
        return (
            <div className='info' id='info'>
                <div className='col'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
