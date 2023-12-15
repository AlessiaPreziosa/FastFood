import React from 'react';
import adminsServices from "../../services/admins";

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            foodId:this.props.data.foodId,
            text:"Rimuovi",
            value:false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }


        handleDelete(e) {

            e.preventDefault();

            const requestBody = {
                foodId: this.state.foodId,
            }
            adminsServices.deleteMenu(requestBody);

            this.setState({value:true, text:"Loading..."});
            setTimeout(()=>this.setState({text:"Rimosso"}),1000);
        }


    render() {
        return (
            <div className="Food" style={{backgroundColor:"whitesmoke"}}>
            <h4> {this.props.data.name}</h4>
                <h5> {this.props.data.value}</h5>
                <p>
                    ID: {this.props.data.foodId}<br/>
                    Prezzo: {this.props.data.price}<br/>
                    Calorie: {this.props.data.calories}<br/>
                    Grassi: {this.props.data.fats}<br/>
                    Carboidrati: {this.props.data.carbs}<br/>
                    Proteine: {this.props.data.protein}<br/>
                    Descrizione: {this.props.data.desc}
                </p>
                <input style={{float:"right"}} type="button" onClick={this.handleDelete} disabled={this.state.value} value={this.state.text}/>
                <p style={{clear:"both", fontSize:"9px"}}>Se rimuovi questo elemento potrebbe essere necessario ricaricare la pagina per non visualizzarlo </p>
            </div>
        )
    }
}

export default Food;