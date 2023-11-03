import { Color } from './../../../../node_modules/chart.js/dist/types/color.d';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: IProdutos[] = [];
  chart: Chart | undefined;

  @ViewChild('myChart', { static: true }) canvas!: ElementRef;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.listarProdutos().subscribe((produtos) => {
      this.produtos = produtos;

      // Criar o gráfico
      const ctx = this.canvas.nativeElement.getContext('2d');

      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: produtos.map((produto) => produto.nome),
            datasets: [{
              label: 'Preço',
              data: produtos.map((produto) => produto.preco),
              backgroundColor: 'rgba(30,144,255)',
              borderColor: 'rgba(0,191,255)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              x: {
                ticks: {
                  font: {
                    weight: 'bold',
                    size: 28,
                  }
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.2)',
                  lineWidth: 1
                }
              },
              y: {
                ticks: {
                  font: {
                    weight: 'bold',
                    size: 28,
                  }
                },
                beginAtZero: true
              }
            },
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Preço dos produtos',
                color: 'rgba(0,0,0)',
                font: {
                  weight: 'bold',
                  size: 28
                }
              }              
            }
          }
        });
      }
    });
  }
}
