import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div class="container tableMarging">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="card text-white bg-info mb-3 table-style">
                            <div class="card-header">Gestion</div>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card text-white bg-warning mb-3 table-style">
                            <div class="card-header">Valideur</div>
                            <div class="card-body">
                                <p class="card-text"> Nom du valideur : Christophe Renaud</p>
                                <p class="card-text"> Profession</p>
                                <p class="card-text"> Date de validation : 15/03/21</p>
                                <p class="card-text"> Statut : Validé</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card text-white bg-info mb-3 table-style">
                            <div class="card-header">Budget</div>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card text-white bg-warning mb-3 table-style">
                            <div class="card-header">Valideur</div>
                            <div class="card-body">
                                <p class="card-text"> Nom du valideur : Elise Richard</p>
                                <p class="card-text"> Profession</p>
                                <p class="card-text"> Statut : En cours</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card text-white bg-info mb-3 table-style">
                            <div class="card-header">Achat</div>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )


    }
} 