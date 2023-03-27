import React, { ReactNode } from "react";
import Navbar from '../comps/Navbar'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Places from "./Places";



export default function Main() { 
    const [talk, setTalk] = React.useState(['https://media.gettyimages.com/id/1269508745/fr/photo/interior-of-the-synagogue-of-la-ghriba-in-djerba-tunisia.jpg?s=612x612&w=0&k=20&c=qmc9n1DvHOjWRn5DmpOAdC0gyTGLKTqVJQyMVPNuiFc=','https://media.gettyimages.com/id/1220712799/fr/photo/djerba-island-beach-along-east-coast.jpg?s=612x612&w=0&k=20&c=8kf-9641fRWue5EZduTgBL59L0Zc-fPN-fuQ2ir4_uk=','https://media.gettyimages.com/id/889900186/fr/photo/three-straw-umbrellas-on-djerba-island-tunisia.jpg?s=612x612&w=0&k=20&c=pNk1qQGdN-NCIpekLxqbX49PLnx6Qe7p0Pxx4XcVTZE=']);
        let i = 0
        i = Math.random() * 3
        i = Math.floor(i)
        

        type ProductsS = {
            _id: Object,
            title: String,
            disc:  String,
            images: String
        }
        const [beachProducts, setBeachProducts] = React.useState<ProductsS[]>([])
        const [cultureProducts, setCultureProducts] = React.useState<ProductsS[]>([])
        const [historyProducts, setHistoryProducts] = React.useState<ProductsS[]>([])
    
        React.useEffect( () => {
            async function getProducts() {
                fetch('http://localhost:3001/beach')
                    .then(res => res.json())
                    .then(data =>  setBeachProducts(data))
                    .catch(err => console.log(err))

                fetch('http://localhost:3001/culture')
                    .then(res => res.json())
                    .then(data =>  setCultureProducts(data))
                    .catch(err => console.log(err))
                
                fetch('http://localhost:3001/history')
                    .then(res => res.json())
                    .then(data =>  setHistoryProducts(data))
                    .catch(err => console.log(err))
            }
    
            
    
    
             getProducts()
            
        }, [])
    
    
    
       
   
    
    return(
            <div className="main">
                     <Navbar/>   
                     
                    <section className="section-one sections" id='1'>
                    
                        <h2>Djerba</h2>
                        <div className="intro-section">
                            <div className="text">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                            </div>
                            <div className="photos">
                                <img src={talk[i]} alt="" />
                            </div>
                        </div>
                    </section>
                
              
                    <section className="section-two sections" id='2'>
                        <div className="blue-blur-1"></div>
                        <div className="blue-blur-2"></div>
                        <div id='bg-beach-img'></div>
                        <h2>Beaches</h2>
                        <div className="beach-photos">
                        {beachProducts!.map((product) => {
                            return(
                                <a href={'/beach/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                        </div>
                    </section>
                    
               
                
                    <section className="section-thee sections" id='3'>
                    <div className="brown-blur-1"></div>
                        <div className="brown-blur-2"></div>
                        
                        <h2 >History</h2>
                        <div className="beach-photos">
                        {historyProducts!.map((product) => {
                            return(
                                <a href={'/history/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                            
                        </div>
                    </section>
                    
                
                
                    <section className="section-four sections"  id='4'>
                        <h2 >Culture</h2>
                        <div className="beach-photos">
                        {cultureProducts!.map((product) => {
                            return(
                                <a href={'/culture/Details/' + product._id}> 
                                    <div className='title'> 
                                        
                                            <img src={product.images[0]} alt="" />
                                            <h1 >{product.title}</h1>
                                        
                                    </div>
                                    </a>  
              )
              
            })}
                        </div>
                    </section>
                    
            

            </div>
    )
}