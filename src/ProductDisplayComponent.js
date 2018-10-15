import React,{Component} from 'react';

export default class ProductDisplayComponent extends Component {

    render() {
        return (
          
                 <tbody><tr id={this.props.product.id}>
                        <td>{this.props.product.name}</td>
                        <td>{this.props.product.category}</td>
                        <td>{this.props.product.qty}</td>
                        <td><button>Edit</button>&nbsp;<button>Delete</button></td>
                    </tr>
                </tbody>
           
        );
    }
}