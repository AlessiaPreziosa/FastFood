import React from 'react';
import cooksServices from "../../services/cooks";

class Ordine extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            _id:this.props.data._id,
            value: false,
            text1: "Prendi in carico l'ordine",
            text2: "Concludi ordine"

        };
        this.handleCarico = this.handleCarico.bind(this);
        this.handleConcludi = this.handleConcludi.bind(this);

    }


    handleCarico(e) {

        e.preventDefault();
        const requestBody = {
            _id: this.state._id
        }
        cooksServices.updateCarico(requestBody);

        this.setState({value:true, text1:"Loading..."});
        setTimeout(()=>this.setState({text1:"Ordine preso in carico"}),1000);

    }


    handleConcludi(e) {

        e.preventDefault();
        const requestBody = {
            _id: this.state._id
        }
        cooksServices.updateConcludi(requestBody);

        this.setState({value:true, text2:"Loading..."});
        setTimeout(()=>this.setState({text2:"Ordine concluso"}),1000);
    }


    render() {
        let bottone;
        let avviso;

        if (!this.props.data.isTaken) {
            bottone = (
                <button style={{float:"right", marginBottom:"10px"}} onClick={this.handleCarico} disabled={this.state.value}>{this.state.text1}</button>
            );
        } else if(!this.props.data.isFinished){
            bottone = (
                <button style={{float:"right", marginBottom:"10px"}} onClick={this.handleConcludi} disabled={this.state.value}>{this.state.text2}</button>
            )
        }else{
            avviso =(<p className="ordineConcluso">Ordine concluso</p>);
        }

        return (
            <div className="Ordine">

                <p>
                    Data ordine: {(this.props.data.date).toString().slice(0,10) + " -  " + (this.props.data.date).toString().slice(11,19)}<br/><br/>
                    Cibi ordinati:
                    <ul>
                        {this.props.data.elements.map(item => <li>{item.food.toUpperCase() + ": " + item.quantity }</li>)}
                    </ul>
                    Totale: {this.props.data.total} €
                </p>
                {bottone}
                {avviso}
                <p style={{clear:"both", fontSize:"9px"}}>Per visualizzare le modifiche sullo stato dell' ordine potrebbe essere necessario riaggiornare la pagina</p>

            </div>
        )
    }
}

export default Ordine;