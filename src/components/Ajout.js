import React, { Component } from 'react'

class Ajout extends Component {
    render() {
        return (
            <div class="container tableMarging containerAjout bg-light">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Numero</label>
                        <input class="form-control" placeholder="Entrer le numero de commande"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Fournisseur</label>
                        <input class="form-control" placeholder="Entrer le nom du fournisseur"></input>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Montant</label>
                        <input class="form-control" placeholder="Entrer le montant"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Date</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer la date"></input>
                    </div>
                    <div class="form-group">
                        <label for="inputState">Statut</label>
                        <select id="inputState" class="form-control">
                            <option selected>Validé</option>
                            <option>En cours</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </form>
            </div>
        )
    }
}

export default Ajout;