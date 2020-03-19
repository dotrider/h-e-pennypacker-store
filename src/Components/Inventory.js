import React,{Component} from 'react';
import './Inventory.css';
import axios from 'axios';

class Inventory extends Component {
    constructor(){
        super();
        this.state = {
            inventory: []
        }
    }

    componentDidMount () {
        this.getInventory()
    }

    getInventory = () => {
        axios.get('/api/inventory').then(res => {
            console.log('inventory', res.data)
            this.setState({
                inventory: res.data
            })
        })
    }

    render(){
        const mappedInventory = this.state.inventory.map(inv => {
            return <div key={inv.id} className='products'>
                 <div><img src={inv.imgUrl}/></div>
                 <div>{inv.name}</div>
                 <div>{inv.price}</div>       
                </div>
        })
        return(
            <section className='inventoryComp'>
            <div className='productContainer'>
                {mappedInventory}
            </div>
            </section>
        )
    }
}

export default Inventory;
