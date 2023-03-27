import React from "react";
import Navbar from '../comps/Navbar'
import { useParams } from 'react-router-dom';

export default function Details() {

    type ProductsS = {
        _id: Object,
        title: String,
        disc:  String,
        images: String
    }

    const [singleProduct, setSingleProduct] = React.useState<ProductsS>()
    const [num, setNum] = React.useState<number>(0)
    
    const {id} = useParams()

   React.useEffect( () => {
    async function getProduct() {
        fetch( `http://localhost:3001/beach/Details/${ id }`)
            .then(res => res.json())
            .then(data =>  setSingleProduct(data))
            .catch(err => console.log(err))
    }

    


     getProduct()
    
}, [2])

console.log(singleProduct)



    return(
        <>
            <Navbar/>
            <div className="details">
                <div className="text-section">
                    <h1>{singleProduct?.title}</h1>
                    <h3>{singleProduct?.disc}</h3>
                </div>
                <div className="images-section">
                    <div className="main-image">
                        <img src={singleProduct?.images[num]} alt="" />
                    </div>
                    <div className="sec-images" >
                        <img src={singleProduct?.images[0] }  alt=""  onClick={event => setNum(0)}/>
                        <img src={singleProduct?.images[1]} alt="" onClick={event => setNum(1)}/>
                        <img src={singleProduct?.images[2]} alt="" onClick={event => setNum(2)}/>
                    </div>
                </div>
            
            </div>
            
            </>
        
    )
}

