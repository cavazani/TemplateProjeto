import { Usuario } from './Models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

cadastroForm: FormGroup;
usuario: Usuario;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }

  adicionarUsuario(){
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)
  }

}
