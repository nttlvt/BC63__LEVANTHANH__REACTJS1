import React from 'react'
import { Banner } from './Banner'
import { Items } from './Items'

export const Body = () => {
    return (
        <div>
            <Banner />

            <div className="container px-lg-5 mt-3">
                <div className=" row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Items />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Items />
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Items />
                    </div>
                </div>

            </div>
        </div>
    )
}
