import React,{Component}  from 'react';

class Modal extends Component {
    render() {
        return (
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Suppression</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Etes vous sûrs de vouloir supprimer ?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Oui</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Modal;