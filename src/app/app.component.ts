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
  data1: any = [

      {
        "area": "Presidência",
        id: "1",
        name: "Breno",
        parentId: null
      },
      {
        "area": "Contabilidade",
        id: "2",
        name: "Giselle Morais",
        parentId: "1"
      },
      {
        "area": "Departamento Pessoal",
        id: "3",
        name: "Giselle Morais",
        parentId: "2"
      },
      {
        "area": "Admissão",
        id: "4",
        name: "João",
        parentId: "2"
      },
      {
        "area": "Gente e Gestão",
        id: "5",
        name: "Giselle Morais",
        parentId: "2"
      },
      {
        "area": "Tecnologia da Informação",
        id: "6",
        name: "Saulo",
        parentId: "2"
      },
      {
        "area": "Atendimento",
        id: "7",
        name: "Mayara",
        parentId: "2"
      },
      {
        "area": "Contabilidade",
        id: "8",
        name: "Fernanda",
        parentId: "1"
      },
      {
        "area": "Departamento Pessoal",
        id: "9",
        name: "Fernanda",
        parentId: "8"
      },
      {
        "area": "Onboarding",
        id: "10",
        name: "Nayara",
        parentId: "8"
      },
      {
        "area": "Onboarding X",
        id: "11",
        name: "Carlos Junio",
        parentId: "8"
      },
      {
        "area": "Suporte",
        id: "12",
        name: "Rosely",
        parentId: "8"
      }
  ];


  data: any = [
      {
        name: "Breno",
        id: "1",
        parentId: null
      },
      {
        name: "Elizangela",
        id: "2",
        parentId: "1"
      },
      {
        name: "Atendimento à Cliente (Centro de Custo)",
        id: "3",
        parentId: "1"
      },
      {
        name: "Supervisor de Suporte ao Cliente - Equipe Central de Atendimento - Augusto (Célula)",
        id: "4",
        parentId: "3"
      },
      {
        name: "Supervisor de Suporte ao Cliente - Equipe de Antendimento N1 Folha - Augusto (Célula)",
        id: "5",
        parentId: "3"
      },
      {
        name: "Suporte ao Cliente (Centro de Custo)",
        id: "6",
        parentId: "1"
      },
      {
        name: "Supervisor N1 A Fiscal - Leandro Mendes (Célula)",
        id: "7",
        parentId: "6"
      },
      {
        name: "Supervisor N1 B Fiscal - Bárbara Raíssa (Célula)",
        id: "8",
        parentId: "6"
      },
      {
        name: "Supervisor N2 Fiscal - Joyce Ladislao (Célula)",
        id: "9",
        parentId: "6"
      },
      {
        name: "Supervisor N1 Adm - Leandro Mendes (Célula)",
        id: "10",
        parentId: "6"
      },
      {
        name: "Supervisor N2 Adm - Joyce Ladislao (Célula)",
        id: "11",
        parentId: "6"
      },
      {
        name: "Supervisor N1 A Folha - Wellington Tobias (Célula)",
        id: "12",
        parentId: "6"
      },
      {
        name: "Supervisor N1 B Folha - Bárbara Raíssa (Célula)",
        id: "13",
        parentId: "6"
      },
      {
        name: "Supervisor N2 Folha - Ronan Xavier (Célula)",
        id: "14",
        parentId: "6"
      },
      {
        name: "Supervisor de Planejamento - Franciane Maria (Célula)",
        id: "15",
        parentId: "6"
      },
      {
        name: "Centro de Custo 02",
        id: "16",
        parentId: "6"
      },
      {
        name: "Rosely Vieira Nunes",
        id: "17",
        parentId: "16"
      },
      {
        name: "Gerência de Suporte Técnico (Centro de Custo)",
        id: "18",
        parentId: "1"
      },
      {
        name: "Gerência de SAP - Suporte Avançado ao Produto",
        id: "19",
        parentId: "18"
      },
      {
        name: "Gerência de GPO - Gestão do Planejamento Operacional",
        id: "20",
        parentId: "18"
      },
      {
        name: "Gerência de SIS - Infrastructure as a Service",
        id: "21",
        parentId: "18"
      },
      {
        name: "Gerência de SIA - Suporte Interno Avançado",
        id: "22",
        parentId: "18"
      },
      {
        name: "Supervisão do Suporte (Unidade)",
        id: "23",
        parentId: "18"
      },
      {
        name: "Supervisor Soluções - Katia Nascimento Salomao (Célula)",
        id: "24",
        parentId: "23"
      },
      {
        name: "Supervisor Swat - Katia Nascimento Salomao (Célula)",
        id: "25",
        parentId: "23"
      },
      {
        name: "Supervisor de Infra TI - Nível I - Domingos Felipe Goncalves Dias (Célula)",
        id: "26",
        parentId: "23"
      },
      {
        name: "Supervisor de Infra TI - Nível II - Jéssica dos Santos Ferreira (Célula)",
        id: "27",
        parentId: "23"
      },
      {
        name: "Supervisor de Assessores de Suporte - Giselle Araujo de Morais (Célula)",
        id: "28",
        parentId: "23"
      },
      {
        name: "Supervisor de Assessores de Produto - Giselle Araujo de Morais (Célula)",
        id: "29",
        parentId: "23"
      },
      {
        name: "Gerência de Capacitação (Centro de Custo)",
        id: "30",
        parentId: "1"
      },
      {
        name: "Gerência de SCP - Capacitação",
        id: "31",
        parentId: "30"
      },
      {
        name: "Supervisor de Capacitação - Equipe SIM - Implantação - Mayara Amaral Novaes (Célula)",
        id: "32",
        parentId: "30"
      },
      {
        name: "Gerência de Implantação São Paulo",
        id: "33",
        parentId: "30"
      },
      {
        name: "Gerência de SCD - Conversão",
        id: "34",
        parentId: "30"
      },
      {
        name: "Supervisão de Capacitação (Célula)",
        id: "35",
        parentId: "30"
      },
      {
        name: "Supervisor de Capacitação - Lucas Mariano de Jesus (Célula)",
        id: "36",
        parentId: "35"
      },
      {
        name: "Supervisor de Planejamento e Instalação - Mayara Amaral Novaes (Célula)",
        id: "37",
        parentId: "35"
      },
      {
        name: "Supervisor de Conversão e Consultores Técnicos de Implantação - Carlos Junio da Silva Paulo (Célula)",
        id: "38",
        parentId: "35"
      },
      {
        name: "Supervisor dos Consultor Técnico de Implantação - Carlos Junio da Silva Paulo (Célula)",
        id: "39",
        parentId: "35"
      },
      {
        name: "Supervisor de Conversão - Carlos Junio da Silva Paulo (Célula)",
        id: "40",
        parentId: "35"
      },
      {
        name: "Saulo de Tácio Cruz",
        id: "41",
        parentId: "35"
      },
      {
        name: "STI - Tecnologia da Informação (Centro de Custo)",
        id: "42",
        parentId: "1"
      },
      {
        name: "José Gerado Miranda Rosário",
        id: "43",
        parentId: "42"
      },
      {
        name: "Gerência de SFI - Infraestrutura (Centro de Custo)",
        id: "44",
        parentId: "1"
      },
      {
        name: "Pedro eugênio Fernandes Zaza Michielin Von Dollinger",
        id: "45",
        parentId: "44"
      },
      {
        name: "Gerência Comercial - SCA - Canais (Centro de Custo)",
        id: "46",
        parentId: "1"
      },
      {
        name: "Gerência Comercial - SVC - Vendas Corporativo (Centro de Custo)",
        id: "47",
        parentId: "1"
      },
      {
        name: "Gerência Comercial - SVR - Vendas Transacional (Centro de Custo)",
        id: "48",
        parentId: "1"
      },
      {
        name: "Gerência Comercial - SPV - Pré Vendas (Centro de Custo)",
        id: "49",
        parentId: "1"
      },
      {
        name: "Luciana Cristine de Carvalho Bessa",
        id: "50",
        parentId: "49"
      },
      {
        name: "Gerência de Produtos - SMK Marketing (Centro de Custo)",
        id: "51",
        parentId: "1"
      },
      {
        name: "Gerência de Produtos - Gestão de Portfólio (Centro de Custo)",
        id: "52",
        parentId: "1"
      },
      {
        name: "Gerência de Produtos - SVR - Vendas Transacional (Centro de Custo)",
        id: "53",
        parentId: "1"
      },
      {
        name: "Gerência Comercial - SPV - Pré Vendas (Centro de Custo)",
        id: "54",
        parentId: "1"
      },
      {
        name: "Mayara França de Melo",
        id: "55",
        parentId: "54"
      },
      {
        name: "GCX (Centro de Custo)",
        id: "56",
        parentId: "1"
      },
      {
        name: "Gerência SCR - Cobrança (Centro de Custo)",
        id: "57",
        parentId: "56"
      },
      {
        name: "Gerência GCE - Gestão Consultiva da Experiência do Cliente (Centro de Custo)",
        id: "58",
        parentId: "56"
      },
      {
        name: "Gerência SQA - Gestão de Qualidade do Atendimento (Centro de Custo)",
        id: "59",
        parentId: "56"
      },
      {
        name: "Gerência SCX - Experiência do Cliente (Centro de Custo)",
        id: "60",
        parentId: "56"
      },
      {
        name: "Supervisão Núcleo de Experiência do Cliente (Célula)",
        id: "61",
        parentId: "56"
      },
      {
        name: "Supervisor de Cobrança - Kellyandra Kenedy Alves da Silva (Célula)",
        id: "62",
        parentId: "61"
      },
      {
        name: "Supervisor de GCE - Gestão Consultiva da Experiência do Cliente - Clara Silva Correa (Célula)",
        id: "63",
        parentId: "61"
      },
      {
        name: "Supervisor de GCE - Gestão Consultiva da Experiência do Cliente - Clara Silva Correa (Célula)",
        id: "64",
        parentId: "61"
      },
      {
        name: "Supervisor de SQA - Gestão de Qualidade do Atendimento - Clara Silva Correa (Célula)",
        id: "65",
        parentId: "61"
      },
      {
        name: "Supervisor de SCX - Experiência do Cliente - Clara Silva Correa (Célula)",
        id: "66",
        parentId: "61"
      },
      {
        name: "Supervisor de SCX - Experiência do Cliente - Kellyandra Kenedy Alves da Silva (Célula)",
        id: "67",
        parentId: "61"
      },
      {
        name: "Fernanda de Fatima Pereira dos Santos",
        id: "68",
        parentId: "56"
      },
      {
        name: "Gerência de Apoio - (Departamento)",
        id: "69",
        parentId: "68"
      },
      {
        name: "Gerência de SSI - Sistemas Internos (Centro de Custo)",
        id: "70",
        parentId: "69"
      },
      {
        name: "Gerência de GEI - Gestão Estratégica da Informação (Centro de Custo)",
        id: "71",
        parentId: "69"
      },
      {
        name: "Gerência de SCN - Controladoria (Centro de Custo)",
        id: "72",
        parentId: "69"
      },
      {
        name: "Gerência de SDP - Departamento Pessoal (Centro de Custo)",
        id: "73",
        parentId: "69"
      },
      {
        name: "Gerência de SGG - Gente e Gestão (Centro de Custo)",
        id: "74",
        parentId: "69"
      },
      {
        name: "Gerência de SJU - Jurídico (Centro de Custo)",
        id: "75",
        parentId: "69"
      }
  ]


  ngOnInit() {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data:any) => {
      // this.data = data;
      let prevIndex = 0;

    });


  }
}
