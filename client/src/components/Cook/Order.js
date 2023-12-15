import React from 'react';
import cooksServices from '../../services/cooks'

import Ordine from './Ordine'

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {order: []}
        this.handleGet=this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        cooksServices.getOrder()
            .then(data => {
                this.setState({
                    order: [data.map(ordine => <Ordine data={ordine} />)]
                })
            })
    }

    render() {

        return (
            this.state.order.length > 0 ? (
                <div ><h1 style={{textAlign:"center",marginTop: "2cm", fontSize:"33pt"}}>Lista ordini</h1>
                <div className="Order">
                    {this.state.order}
                </div></div>
            ) : <>Non ci sono ancora ordini! Passa più tardi</>
        )}
}

export default Order;