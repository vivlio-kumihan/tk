import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Aside from './Aside'
import MDEdit from './MDEdit'
import Footer from './Footer'
import './assets/css/reset.css'
import "easymde/dist/easymde.min.css"
import './assets/css/style.css'

const element = (
  <div id="container">
    <Header />
    <Aside />
    <MDEdit />
    <Footer />
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
)