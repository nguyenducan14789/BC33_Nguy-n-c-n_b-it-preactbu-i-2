import React, { Component } from 'react'
import './css/style.css'
let ArrProduct = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./image/productGlass/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./image/productGlass/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./image/productGlass/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./image/productGlass/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./image/productGlass/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./image/productGlass/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./image/productGlass/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./image/productGlass/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./image/productGlass/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
let compareList = [
    {
        "id": "",
        "price": "",
        "name": "",
        "url": "",
        "desc": ""
    },
    {
        "id": "",
        "price": "",
        "name": "",
        "url": "",
        "desc": " "
    }]
export default class ChooseGlassSecond extends Component {
    state = {
        ChiTietsp: {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./image/productGlass/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    renderProduct = () => {
        return ArrProduct.map((prod, index) => {
            return <div className='item' key={index}>
                <a href='#' onClick={() => {
                    { this.chooseGlass(prod) };
                }} >
                    <img src={prod.url}></img>
                </a>
            </div>
        })

    }

    chooseGlass = (idClick) => {
        console.log(idClick)
        this.setState({
            ChiTietsp: idClick
        })
        // compareList.splice(0, 1);
        compareList.push(idClick)
        console.log(compareList)
        // this.compareGlass()

    }

    compareGlass = (arr) => {
        let obj = arr[arr.length - 2]
        // console.log(obj)
        console.log(obj)
        console.log(obj.name)
        return <div>
            <div className='glass' id='glass'>
                <img src={obj.url}></img>
            </div>
            <div className='info' id='info'>
                <h2>{obj.name}</h2>
                <p>{obj.price}</p>
                <span>{obj.desc}</span>

            </div>
        </div>
    }



    render() {
        let { id, price, name, url, desc } = this.state.ChiTietsp
        return (
            <div className='ab'>
                <div className='container'>
                    <div className='model'>
                        <div className='colLeft'>
                            {/* <img src='./image/productGlass/model.jpg' className='img-model' /> */}
                            <div className='compare'>
                                {this.compareGlass(compareList)}
                            </div>
                        </div>
                        <div className='colRight'>
                            {/* <img src='./image/productGlass/model.jpg' /> */}
                            <div className='glass' id='glass'>
                                <img src={url}></img>
                            </div>
                            <div className='info' id='info'>
                                <h2>{name}</h2>
                                <p>{price} $</p>
                                <span>{desc}</span>

                            </div>
                        </div>
                    </div>

                    <div className='render' id='render'>
                        <div className='row' id='col'>
                            {this.renderProduct(ArrProduct)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
