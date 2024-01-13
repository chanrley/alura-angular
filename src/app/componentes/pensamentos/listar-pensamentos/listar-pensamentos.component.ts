import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [
    // {
    //   conteudo: "Comunicação entre componentes",
    //   autoria: "Chan",
    //   modelo: "modelo3"
    // },
    // {
    //   conteudo: "Minha propriedade é decorada com @Input()",
    //   autoria: "Componente filho",
    //   modelo: "modelo2"
    // },
    // {
    //   conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere vestibulum iaculis. Vestibulum sem sapien, rutrum sit amet facilisis in, interdum non metus. Aliquam lectus dui, iaculis eu fermentum sit amet, gravida luctus arcu. Vivamus eu odio venenatis nulla mollis tempus. Phasellus vel nibh vel purus euismod fermentum vel ut sem. Pellentesque ut facilisis purus. Cras at orci ultrices, tempor tellus in, aliquet turpis. Mauris id commodo arcu. Phasellus magna tellus, suscipit et ultricies ut, blandit nec velit. Integer mollis fermentum commodo. Sed ornare orci eu odio placerat cursus eu ut odio. Nulla facilisi. Vestibulum consectetur risus quis ante condimentum sodales. Duis vulputate, lorem vitae bibendum auctor, nisl lectus suscipit ex, eu venenatis erat quam non risus. Duis bibendum elementum ex, non convallis ante tincidunt accumsan. Proin quis ipsum viverra, congue leo eget, pretium ligula. Sed malesuada condimentum lacus, a accumsan mauris tempus pellentesque. Nunc facilisis consectetur enim quis finibus. Donec sodales massa nec erat sollicitudin, ac sagittis augue consectetur. Aenean venenatis imperdiet ex nec ultricies. Ut eget erat erat. Donec pretium enim ac ultricies ornare. Cras ultrices tincidunt felis et mattis. Curabitur velit risus, faucibus non suscipit at, porttitor et orci. Praesent accumsan metus augue, ac ultricies dui accumsan non. Aenean consectetur ligula ut diam faucibus, non lacinia nibh blandit. Nullam vestibulum aliquam mauris, efficitur sollicitudin nisi. Nam blandit, quam eu mattis aliquam, augue lacus auctor purus, ac dapibus risus justo sed libero. Quisque aliquet non metus id cursus. Aliquam fringilla dolor ultricies turpis fermentum, eget posuere justo porta. Nullam molestie velit lorem, varius efficitur nisl ornare a. In. ",
    //   autoria: "Componente filho",
    //   modelo: "modelo1"
    // },

  ]

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }


}
