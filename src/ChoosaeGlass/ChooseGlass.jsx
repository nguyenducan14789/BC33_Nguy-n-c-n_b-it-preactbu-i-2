import React, { Component } from 'react'
import FirstModel from './FirstModel'
import RenderGlass from './RenderGlass'
import SecondModel from './SecondModel'

export default class ChooseGlass extends Component {
    render() {
        return (
            <div className='container'>
                <div className='model d-flex justify-content-between'>
                    <div className='model1'>
                        <FirstModel />
                    </div>
                    <div className='model2'>
                        <SecondModel />
                    </div>
                </div>
                <div className='product'>
                    <RenderGlass />
                </div>
            </div>
        )
    }
}
