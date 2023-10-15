import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) {  }

  

  ngOnInit(): void {
    this.getListProducts();
    
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    Swal.fire({
      text: `Esto eliminará la encuesta. Desea continuar?`,
      icon: 'question',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: "#3a4a58",
      confirmButtonText: 'Confirmar',
      confirmButtonColor: "#3a4a58",
      showCancelButton: true,
      background: '#26262a',
      color: 'white'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
          this._productService.deleteProduct(id).subscribe(() => {
            this.getListProducts();
            this.toastr.warning('Encuesta eliminada con exito');
          })
        } else{
          Swal.DismissReason.cancel
        };
      });
  }
}
