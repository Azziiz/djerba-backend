import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'




window.addEventListener("scroll", function(){
  var Header:any = this.document.querySelector('header');
  Header.classList.toggle("sticky", window.scrollY > 0)
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
