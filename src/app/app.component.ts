import { Component } from '@angular/core';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';
import { TreeNode } from 'primeng/api';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orgchart';
  data: any = [
    {
      departamento: "Presidência",
      name: "Breno",
      id: "1",
      parentId: null
    },
    {
      departamento: "CSC - Administrativo",
      name: "Fernanda",
      id: "2",
      parentId: "1"
    },
    {
      departamento: "Contabilidade",
      name: "Fernanda",
      id: "3",
      parentId: "2"
    },
    {
      departamento: "Contabilidade",
      name: "Giselle Morais",
      id: "4",
      parentId: "3"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Departamento Pessoal",
      id: "5",
      parentId: "2"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Giselle Morais",
      id: "6",
      parentId: "5"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Admissão",
      id: "7",
      parentId: "6"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Rescisão",
      id: "8",
      parentId: "6"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Financeiro",
      id: "9",
      parentId: "2"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Giselle Morais",
      id: "10",
      parentId: "9"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Jurídico",
      id: "11",
      parentId: "2"
    },
    {
      departamento: "CSC - Administrativo",
      name: "Giselle Morais",
      id: "12",
      parentId: "11"
    },
    {
      departamento: "SGG - Gente e Gestão",
      name: "Fernanda",
      id: "13",
      parentId: "2"
    },
    {
      departamento: "SGG - Gente e Gestão",
      name: "Giselle Morais",
      id: "14",
      parentId: "13"
    },
    {
      departamento: "STI - Tecnologia da Informação",
      name: "Saulo",
      id: "15",
      parentId: "2"
    },
    {
      departamento: "SIF - Infraestrutura",
      name: "José Geraldo",
      id: "16",
      parentId: "15"
    },
    {
      departamento: "SRT - Restaurante",
      name: "José Geraldo",
      id: "17",
      parentId: "15"
    },
    {
      departamento: "SMC - Mercados",
      name: "Luciana",
      id: "18",
      parentId: "15"
    },
    {
      departamento: "SMC - Mercados",
      name: "Fernanda",
      id: "19",
      parentId: "18"
    },
    {
      departamento: "SCO - Comercial",
      name: "Mayara",
      id: "20",
      parentId: "19"
    },
    {
      departamento: "SAT - Atendimento",
      name: "Mayara",
      id: "21",
      parentId: "20"
    },
    {
      departamento: "SAT - Atendimento",
      name: "Clara Correa",
      id: "22",
      parentId: "21"
    },
    {
      departamento: "SAT - Atendimento",
      name: "Kellyandra Silva",
      id: "23",
      parentId: "21"
    },
    {
      departamento: "SAT - Atendimento",
      name: "Gabriela Pereira",
      id: "24",
      parentId: "21"
    },
    {
      departamento: "SOB - Onboarding",
      name: "Nayara",
      id: "25",
      parentId: "19"
    },
    {
      departamento: "SOB - Onboarding",
      name: "Carlos Junio",
      id: "26",
      parentId: "25"
    },
    {
      departamento: "SOB - Onboarding",
      name: "Carlos Junio",
      id: "27",
      parentId: "25"
    },
    {
      departamento: "SOB - Onboarding",
      name: "Geisiane Madeira",
      id: "28",
      parentId: "25"
    },
    {
      departamento: "SOB - Onboarding",
      name: "Bárbara Byrro",
      id: "29",
      parentId: "25"
    },
    {
      departamento: "SSC - Suporte",
      name: "Rosely",
      id: "30",
      parentId: "19"
    },
    {
      departamento: "SSC - Suporte",
      name: "Joyce Ladislao",
      id: "31",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte",
      name: "Aline Dutra",
      id: "32",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte Avançado",
      name: "Katia",
      id: "33",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte Avançado",
      name: "Jéssica",
      id: "34",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte Avançado",
      name: "Leandro",
      id: "35",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte",
      name: "Planejamento",
      id: "36",
      parentId: "30"
    },
    {
      departamento: "SSC - Suporte",
      name: "Franciane Brito",
      id: "37",
      parentId: "36"
    },
    {
      departamento: "SDI - Desenvolvimento e Inovação",
      name: "Joannie",
      id: "38",
      parentId: "1"
    },
    {
      departamento: "SDI - Desenvolvimento e Inovação",
      name: "Joannie",
      id: "39",
      parentId: "38"
    }
  ];


  ngOnInit() {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data:any) => {
      // this.data = data;
      let prevIndex = 0;

    });


  }
}
