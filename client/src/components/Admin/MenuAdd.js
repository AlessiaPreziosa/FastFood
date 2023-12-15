import React from 'react';
import adminsServices from '../../services/admins'

class MenuAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foodId: '',
            name: '',
            value: '',
            price:'',
            calories: '',
            fats:'',
            carbs:'',
            protein:'',
            desc:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
    e.preventDefault()
    const requestBody = {
        foodId: this.state.foodId,
        name: this.state.name,
        value: this.state.value,
        price:this.state.price,
        calories: this.state.calories,
        fats:this.state.fats,
        carbs:this.state.carbs,
        protein:this.state.protein,
        desc:this.state.desc
    }
        adminsServices.addMenu(requestBody)
            .then((data)=>{
                if(data==='saved'){
                    alert("Aggiunto");
                }else{
                    alert("Oops...non è stato possibile aggiungere il cibo al menù")
                }
            });
    this.setState({foodId:'',name:'',price:'',value:'',calories:'', fats:'', carbs:'', protein:'', desc:''})
    }

    handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <>
                <h2 style={{marginLeft:"6cm", marginTop:"1cm"}}>Si indichi il nome e le proprietà del cibo che si vuole aggiungere: </h2>
            <form onSubmit={this.handleSubmit}>
                <div className="primo">
                <label>ID*<input type="number" placeholder="Inserisci un ID univoco per il cibo che vuoi aggiungere al menù" name="foodId" onChange={this.handleChange} value={this.state.foodId} min='0' required/></label>
                    <label>Calorie<input type="number" name="calories" placeholder="Calorie (g)" value={this.state.calories} onChange={this.handleChange} min='0'/></label>
                    <label>Nome*<input type="text" placeholder="Nome" name="name" onChange={this.handleChange} value={this.state.name} required /></label>
                    <label>Grassi<input type="number" name="fats" placeholder="Grassi (g)" value={this.state.fats} onChange={this.handleChange} min='0'/></label>
                </div>
                <div className="secondo">
                    <label>Tipo*<select name="value" value={this.state.value} onChange={this.handleChange} required>
                        <option value=""> Seleziona il tipo! </option>
                        <option value="Hamburger"> Hamburger </option>
                        <option value="Chips"> Patatine </option>
                        <option value="Drinks"> Bevande </option>
                        <option value="Salads"> Insalata </option>
                        <option value="Meal"> Pasto </option>
                        <option value="Snacks"> Snack </option>
                    </select></label>
                    <label>Carboidrati<input type="number" name="carbs" placeholder="Carboidrati (g)" value={this.state.carbs} onChange={this.handleChange} min='0'/></label>
                    <label>Prezzo*<input type="number" name="price" placeholder="Prezzo (€)" value={this.state.price} onChange={this.handleChange} min='0' required/></label>
                <label>Proteine<input type="number" name="protein" placeholder="Proteine (g)" value={this.state.protein} onChange={this.handleChange} min='0'/></label>
                </div>
                <label style={{marginLeft: "1cm"}}>Descrizione<textarea placeholder="Note" name="desc" onChange={this.handleChange} value={this.state.desc}/></label>
                <input style={{marginRight:'1cm'}} type="submit" value="Aggiungi il cibo al menù"/>

            </form>
            </>

        )
    }
}

export default MenuAdd;