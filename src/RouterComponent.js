import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,NavLink} from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ProductListComponent from './ProductListComponent';

const HomeComponent = () =>(
  <div>
          Home Component
        </div>  
)

const UserComponent = () =>(
  <div>
         User Management
        </div>
   
)

const ProductComponent = () =>(
   <div className="container">
  <div className="row">
      <div className="col-sm-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Product Management</div>
      <div className="col-sm-1"></div>
      <div className="col-sm-6">  <SearchComponent/>
       <br/>   <br/>   
      </div>   
      
  </div>
<div className="row">
       
      <div >  <ProductListComponent/></div>
         
  </div>
  
   </div>
)


const OrderComponent = () =>(
  
        <div>  Order Component </div>
       
  
)

const Links = () =>(
 
    <div className="list">
        <NavLink className="list" exact activeClassName="active" to="/home">&nbsp; Home  &nbsp;</NavLink> 
        <NavLink className="list" activeClassName="active" to="/user">&nbsp; User Management &nbsp;</NavLink>  
        <NavLink className="list" activeClassName="active" to="/product">&nbsp; Product Management &nbsp;</NavLink> 
        <NavLink className="list" activeClassName="active" to="/order">&nbsp; Order Management &nbsp;</NavLink>  
    </div>
)

const RouterComponent = () =>(
    
   <Router>
      <div>
          <section> 
            <Links />
          </section>
             <hr/>
         <section>
                 <div className="App-main">
                      <Route  path="/home" component={HomeComponent}/>
                      <Route  path="/user" component={UserComponent}/>
                      <Route  path="/product" component={ProductComponent}/>
                      <Route  path="/order" component={OrderComponent}/>
                  </div>
          </section>
            
         </div>    
         
     
   </Router>
)

export default RouterComponent;
