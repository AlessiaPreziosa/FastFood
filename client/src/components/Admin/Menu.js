import React from 'react';
import adminsServices from '../../services/admins'

import Food from './Food'

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menu: []}
        this.handleGet=this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        adminsServices.getMenu()
            .then(data => {
                this.setState({
                    menu: [data.map(food => <Food data={food} />)]
                })
            })
    }

    render() {
        return (
            this.state.menu.length > 0 ? (
                <div className="Menu">
                    {this.state.menu}
                </div>
            ) : <>Il menù è ancora vuoto! Passa più tardi</>
        )}
}

export default Menu;