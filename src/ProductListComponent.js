import React,{Component} from 'react';
import ProductDisplayComponent from './ProductDisplayComponent';
import AddNewComponent from './AddNewComponent';

export default class ProductListComponent extends Component {

    constructor(props){
        super(props);
        this.updateCategory=this.updateCategory.bind(this);
        this.addProduct=this.addProduct.bind(this);
        this.state = {
            products : [
                {id:1, name:'Product 1', category:'Category 1',qty:'10'},
                {id:2,name:'Product 2', category:'Category 2',qty:'20'},
                {id:3,name:'Product 3', category:'Category 3',qty:'30'}           
            ],
            currentProductName:'',
            currentProductCategory:'',
            currentProductQty:''
        };
    }

    addProduct(event){
        event.preventDefault();
        console.log('method Triggered..');
        let products=this.state.products;
        
        products.push({
            name:this.state.currentProductName,
            category:this.state.currentProductCategory,
            qty:this.state.currentProductQty
        });

        this.setState({
            products:products,
            currentProductName:'',
            currentProductCategory:'',
            currentProductQty:''
        });
    }

    updateName = (newValue) => {
        this.setState({
            currentProductName:newValue.target.value,         
        });
    }

    updateQuantity = (newValue) => {
        this.setState({
            currentProductQty:newValue.target.value,         
        });
    }

    updateCategory(newValue){
            this.setState({
                currentProductCategory:newValue.target.value
            });
        }
   
    render() {
        return (
            <div className="class-name">
               
                <table className="productList-table">
                <thead><tr>
                    <th> Name </th>
                    <th> Category </th>
                    <th>  Quantity  </th>
                    <th>Actions</th>
                    </tr></thead>
                   {
                      this.state.products.map((product,index) => {
                          return  <ProductDisplayComponent 
                          key={index}
                          product={product}/>
                      }

                      )
                   }
                  
                   
                </table>

                 <div className="row">
        <br/>   <br/>  
      <div >&nbsp;&nbsp;&nbsp;&nbsp; Add New Product</div>   
         
  </div>
                <div><AddNewComponent
                     currentProductName={this.state.currentProductName}
                     currentProductCategory={this.state.currentProductCategory}
                     updateName={this.updateName}
                     updateCategory={this.updateCategory}
                     updateQuantity={this.updateQuantity}
                     addProduct={this.addProduct}
                     /></div>
            </div>
            
        );
    }
}