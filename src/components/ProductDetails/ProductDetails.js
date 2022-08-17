import React from 'react'
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';
import './ProductDetails.css'

class ProductDetails extends React.Component {


    state = {
        products: [
            {
                "_id": "1",
                "title": "Photo Booth Decorations",
                "src": [
                    "https://ae01.alicdn.com/kf/H864289d7e5fb4d5e8fade881fa18cea20/JAROWN-Wrought-Iron-Hexagonal-Arch-Frame-Wedding-Stage-Background-Flower-Decoration-Home-Party-Screen-Decor.jpg_Q90.jpg_.webp",
                    "https://balloonpro.in/wp-content/uploads/2021/03/20210306_090934-600x600.jpg",
                    "https://sc01.alicdn.com/kf/H9e0d68d632844d3196bdf001ad3549500/221450374/H9e0d68d632844d3196bdf001ad3549500.jpg_.webp",
                    "https://5.imimg.com/data5/ID/JF/GA/ANDROID-2161621/product-jpeg-500x500.jpg"
                ],
                "description": "Wedding entrance decor, Wedding backdrop decorations",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        index: 0
    };


    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";

    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
      }


    render() {
        const { products, index } = this.state;


        return (
            <div className="app">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} />
                            </div>


                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                               
                                <Colors colors={item.colors} />

                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />

                                <button className="cart">Add to cart</button>


                            </div>

                        </div>
                    ))
                }
            </div>
        );
    };

}



export default ProductDetails;
