import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div class="container tableMarging">
                <div class="row">
                    <div class="col">
                        <div class="card text-white bg-info mb-3 table-style">
                            <div class="card-header">Gestion</div>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-warning mb-3 table-style">
                            <div class="card-header">Valideur</div>
                            <div class="card-body">
                                <p class="card-text"> Nom du valideur</p>
                                <p class="card-text"> Profession</p>
                                <p class="card-text"> Date de validation</p>
                                <p class="card-text"> Statut</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-info mb-3 table-style">
                            <div class="card-header">Budget</div>
                            <div class="card-body">
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-warning mb-3 table-style">
                            <div class="card-header">Valideur</div>
                            <div class="card-body">
                                <p class="card-text"> Nom du valideur</p>
                                <p class="card-text"> Profession</p>
                                <p class="card-text"> Date de validation</p>
                                <p class="card-text"> Statut</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
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