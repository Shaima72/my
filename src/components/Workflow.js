import React, { Component } from 'react'
import Ajout from './Ajout' 
import Table from './Table'

class Workflow extends Component {

    state = {
        show: true
    }

    montrerTableau = () => {
        this.setState({
            show: !this.state.show
        })
    }

    deleteBon = (numero) => {
        const newBons = this.state.elements.filter(element =>
            element.numero !== numero
        );
        this.setState({
            elements: newBons
        })
    }

    state = {
        elements: [
            {
                numero: '032',
                fournisseur: 'Jean Luc',
                montant: '32000',
                date: '06/03/21',
                statut: 'Validé'
            },
            {
                numero: '045',
                fournisseur: 'John Doe',
                montant: '4000',
                date: '07/03/21',
                statut: 'Validé'
            },
            {
                numero: '050',
                fournisseur: 'Joe ',
                montant: '12000',
                date: '18/03/21',
                statut: 'Validé'
            },
            {
                numero: '060',
                fournisseur: 'Liam Payne ',
                montant: '5000',
                date: '22/03/21',
                statut: 'En cours'
            },
            {
                numero: '061',
                fournisseur: 'Georgia Miller ',
                montant: '7000',
                date: '18/03/21',
                statut: 'Validé'
            },
            {
                numero: '070',
                fournisseur: 'Elizabeth Gillies ',
                montant: '36000',
                date: '22/03/21',
                statut: 'En cours'
            },
            {
                numero: '071',
                fournisseur: 'Nyah Grace',
                montant: '8000',
                date: '13/03/21',
                statut: 'En cours'
            },
            {
                numero: '080',
                fournisseur: 'Louise Johnson ',
                montant: '3000',
                date: '22/03/21',
                statut: 'Validé'
            },
            {
                numero: '081',
                fournisseur: 'Virginia Miller',
                montant: '8000',
                date: '13/03/21',
                statut: 'Validé'
            }
        ]
    }
    render() {
        return (
            <div>
                <div class="card header">
                    <div class="card-body">
                        <h4>Bons de commandes</h4>
                    </div>
                </div>
                <div class='container'>
                    <div class='card tableMarging'>
                    <table class='table'>
                        <thead>
                            <tr>
                                <th>Numéro</th>
                                <th>Fournisseur</th>
                                <th>Montant</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th><button type="button" class="btn btn-success " onClick={this.montrerTableau} >Masquer</button></th>
                            </tr>
                        </thead>
                        {this.state.show ? (
                            <tbody>
                                {this.state.elements.map(element => (
                                    <tr>
                                        <td>{element.numero}</td>
                                        <td>{element.fournisseur}</td>
                                        <td>{element.montant}</td>
                                        <td>{element.date}</td>
                                        <td>{element.statut}</td>
                                        <td><button type="button" class="btn btn-warning " onClick={this.deleteBon.bind(this, element.numero)} >Supprimer</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : null}
                    </table>
                    </div>
                    
                </div>

                <button type="button" class="btn btn-success">Ajouter</button>

                <Ajout></Ajout>


            </div>
        )
    }
}

export default Workflow;