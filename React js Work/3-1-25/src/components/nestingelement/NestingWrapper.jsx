import React from 'react'
import Content from './Content'
import Footer from './Footer'

const NestingWrapper = () => {

    const arr = ["ahmed", "ali", "adnan"]


    const arrTwo = [
        {
            name: "ahmed",
            pic: "/pic.png"
        },
        {
            name: "ali",
            pic: "/pictwo.jpg"
        },
        {
            name: "adnan",
            pic: "/picthree.png"
        }
    ]

    return (
        <div>
            <h1>user name</h1>
            {/* <div>
                {
                    arr.map((item, index) => (
                        <>
                            <h4>hello!!! {item}</h4>
                        </>
                    ))
                }
                
            </div> */}

            <div>
                {
                    arrTwo.map((item, index) => (
                        <div key={index}>
                            <h4>hello!!! {item.name}</h4>
                            <img src={item.pic} alt="pic" style={{ width: "40px", height: "40px" }} />
                        </div>
                    ))
                }
            </div>

            <div>
                <Footer />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default NestingWrapper