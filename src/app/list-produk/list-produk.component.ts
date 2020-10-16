import { Component, OnInit } from "@angular/core";
import { katalogProduk } from "../produk";
@Component({
  selector: "app-list-produk",
  templateUrl: "./list-produk.component.html",
  styleUrls: ["./list-produk.component.css"]
})
export class ListProdukComponent implements OnInit {
  katProduk = katalogProduk;

  constructor() {}

  ngOnInit() {}

  keranjang() {
    window.alert("produk ini telah masuk ke dalam cart");
  }
}
