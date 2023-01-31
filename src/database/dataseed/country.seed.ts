//######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { CountryEntity } from '../entities/country.entity';
//######################################################################################

//######################################################################################
export default class DataCountry implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(CountryEntity)
      .values([
        {
          "name": "Afganistán",
          "phone_code": "+93",
          "abreviatura": "AFG"
        },
        {
          "name": "Albania",
          "phone_code": "+355",
          "abreviatura": "ALB"
        },
        {
          "name": "Alemania",
          "phone_code": "+49",
          "abreviatura": "DEU"
        },
        {
          "name": "Andorra",
          "phone_code": "+376",
          "abreviatura": "AND"
        },
        {
          "name": "Angola",
          "phone_code": "+244",
          "abreviatura": "AGO"
        },
        {
          "name": "Anguila",
          "phone_code": "+1 264",
          "abreviatura": "AIA"
        },
        {
          "name": "Antártida",
          "phone_code": "+672",
          "abreviatura": "ATA"
        },
        {
          "name": "Antigua y Barbuda",
          "phone_code": "+1 268",
          "abreviatura": "ATG"
        },
        {
          "name": "Arabia Saudita",
          "phone_code": "+966",
          "abreviatura": "SAU"
        },
        {
          "name": "Argelia",
          "phone_code": "+213",
          "abreviatura": "DZA"
        },
        {
          "name": "Argentina",
          "phone_code": "+54",
          "abreviatura": "ARG"
        },
        {
          "name": "Armenia",
          "phone_code": "+374",
          "abreviatura": "ARM"
        },
        {
          "name": "Aruba",
          "phone_code": "+297",
          "abreviatura": "ABW"
        },
        {
          "name": "Australia",
          "phone_code": "+61",
          "abreviatura": "AUS"
        },
        {
          "name": "Austria",
          "phone_code": "+43",
          "abreviatura": "AUT"
        },
        {
          "name": "Azerbaiyán",
          "phone_code": "+994",
          "abreviatura": "AZE"
        },
        {
          "name": "Bahamas",
          "phone_code": "+1 242",
          "abreviatura": "BHS"
        },
        {
          "name": "Bahrein",
          "phone_code": "+973",
          "abreviatura": "BHR"
        },
        {
          "name": "Bangladesh",
          "phone_code": "+880",
          "abreviatura": "BGD"
        },
        {
          "name": "Barbados",
          "phone_code": "+1 246",
          "abreviatura": "BRB"
        },
        {
          "name": "Bélgica",
          "phone_code": "+32",
          "abreviatura": "BEL"
        },
        {
          "name": "Belice",
          "phone_code": "+501",
          "abreviatura": "BLZ"
        },
        {
          "name": "Benín",
          "phone_code": "+229",
          "abreviatura": "BEN"
        },
        {
          "name": "Bielorrusia",
          "phone_code": "+375",
          "abreviatura": "BLR"
        },
        {
          "name": "Bolivia",
          "phone_code": "+591",
          "abreviatura": "BOL"
        },
        {
          "name": "Bosnia y Herzegovina",
          "phone_code": "+387",
          "abreviatura": "BIH"
        },
        {
          "name": "Botsuana",
          "phone_code": "+267",
          "abreviatura": "BWA"
        },
        {
          "name": "Brasil",
          "phone_code": "+55",
          "abreviatura": "BRA"
        },
        {
          "name": "Brunéi",
          "phone_code": "+673",
          "abreviatura": "BRN"
        },
        {
          "name": "Bulgaria",
          "phone_code": "+359",
          "abreviatura": "BGR"
        },
        {
          "name": "Burkina Faso",
          "phone_code": "+226",
          "abreviatura": "BFA"
        },
        {
          "name": "Burundi",
          "phone_code": "+257",
          "abreviatura": "BDI"
        },
        {
          "name": "Bután",
          "phone_code": "+975",
          "abreviatura": "BTN"
        },
        {
          "name": "Cabo Verde",
          "phone_code": "+238",
          "abreviatura": "CPV"
        },
        {
          "name": "Camboya",
          "phone_code": "+855",
          "abreviatura": "KHM"
        },
        {
          "name": "Camerún",
          "phone_code": "+237",
          "abreviatura": "CMR"
        },
        {
          "name": "Canadá",
          "phone_code": "+1",
          "abreviatura": "CAN"
        },
        {
          "name": "Chad",
          "phone_code": "+235",
          "abreviatura": "TCD"
        },
        {
          "name": "Chile",
          "phone_code": "+56",
          "abreviatura": "CHL"
        },
        {
          "name": "China",
          "phone_code": "+86",
          "abreviatura": "CHN"
        },
        {
          "name": "Chipre",
          "phone_code": "+357",
          "abreviatura": "CYP"
        },
        {
          "name": "Colombia",
          "phone_code": "+57",
          "abreviatura": "COL"
        },
        {
          "name": "Comoras",
          "phone_code": "+269",
          "abreviatura": "COM"
        },
        {
          "name": "Corea del Norte",
          "phone_code": "+850",
          "abreviatura": "PRK"
        },
        {
          "name": "Corea del Sur",
          "phone_code": "+82",
          "abreviatura": "KOR"
        },
        {
          "name": "Costa de Marfil",
          "phone_code": "+225",
          "abreviatura": "CIV"
        },
        {
          "name": "Costa Rica",
          "phone_code": "+506",
          "abreviatura": "CRI"
        },
        {
          "name": "Croacia",
          "phone_code": "+385",
          "abreviatura": "HRV"
        },
        {
          "name": "Cuba",
          "phone_code": "+53",
          "abreviatura": "CUB"
        },
        {
          "name": "Dinamarca",
          "phone_code": "+45",
          "abreviatura": "DNK"
        },
        {
          "name": "Dominica",
          "phone_code": "+1 767",
          "abreviatura": "DMA"
        },
        {
          "name": "Ecuador",
          "phone_code": "+593",
          "abreviatura": "ECU"
        },
        {
          "name": "Egipto",
          "phone_code": "+20",
          "abreviatura": "EGY"
        },
        {
          "name": "El Salvador",
          "phone_code": "+503",
          "abreviatura": "SLV"
        },
        {
          "name": "Emiratos Árabes Unidos",
          "phone_code": "+971",
          "abreviatura": "ARE"
        },
        {
          "name": "Eritrea",
          "phone_code": "+291",
          "abreviatura": "ERI"
        },
        {
          "name": "Eslovaquia",
          "phone_code": "+421",
          "abreviatura": "SVK"
        },
        {
          "name": "Eslovenia",
          "phone_code": "+386",
          "abreviatura": "SVN"
        },
        {
          "name": "España",
          "phone_code": "+34",
          "abreviatura": "ESP"
        },
        {
          "name": "Estados Unidos de América",
          "phone_code": "+1",
          "abreviatura": "USA"
        },
        {
          "name": "Estonia",
          "phone_code": "+372",
          "abreviatura": "EST"
        },
        {
          "name": "Etiopía",
          "phone_code": "+251",
          "abreviatura": "ETH"
        },
        {
          "name": "Filipinas",
          "phone_code": "+63",
          "abreviatura": "PHL"
        },
        {
          "name": "Finlandia",
          "phone_code": "+358",
          "abreviatura": "FIN"
        },
        {
          "name": "Fiyi",
          "phone_code": "+679",
          "abreviatura": "FJI"
        },
        {
          "name": "Francia",
          "phone_code": "+33",
          "abreviatura": "FRA"
        },
        {
          "name": "Gabón",
          "phone_code": "+241",
          "abreviatura": "GAB"
        },
        {
          "name": "Gambia",
          "phone_code": "+220",
          "abreviatura": "GMB"
        },
        {
          "name": "Georgia",
          "phone_code": "+995",
          "abreviatura": "GEO"
        },
        {
          "name": "Ghana",
          "phone_code": "+233",
          "abreviatura": "GHA"
        },
        {
          "name": "Gibraltar",
          "phone_code": "+350",
          "abreviatura": "GIB"
        },
        {
          "name": "Granada",
          "phone_code": "+1 473",
          "abreviatura": "GRD"
        },
        {
          "name": "Grecia",
          "phone_code": "+30",
          "abreviatura": "GRC"
        },
        {
          "name": "Groenlandia",
          "phone_code": "+299",
          "abreviatura": "GRL"
        },
        {
          "name": "Guadalupe",
          "phone_code": "+590",
          "abreviatura": "GLP"
        },
        {
          "name": "Guatemala",
          "phone_code": "+502",
          "abreviatura": "GTM"
        },
        {
          "name": "Guernsey",
          "phone_code": "+44",
          "abreviatura": "GGY"
        },
        {
          "name": "Guinea",
          "phone_code": "+224",
          "abreviatura": "GIN"
        },
        {
          "name": "Guinea Ecuatorial",
          "phone_code": "+240",
          "abreviatura": "GNQ"
        },
        {
          "name": "Guinea-Bissau",
          "phone_code": "+245",
          "abreviatura": "GNB"
        },
        {
          "name": "Guyana",
          "phone_code": "+592",
          "abreviatura": "GUY"
        },
        {
          "name": "Haití",
          "phone_code": "+509",
          "abreviatura": "HTI"
        },
        {
          "name": "Honduras",
          "phone_code": "+504",
          "abreviatura": "HND"
        },
        {
          "name": "Hong kong",
          "phone_code": "+852",
          "abreviatura": "HKG"
        },
        {
          "name": "Hungría",
          "phone_code": "+36",
          "abreviatura": "HUN"
        },
        {
          "name": "India",
          "phone_code": "+91",
          "abreviatura": "IND"
        },
        {
          "name": "Indonesia",
          "phone_code": "+62",
          "abreviatura": "IDN"
        },
        {
          "name": "Irak",
          "phone_code": "+964",
          "abreviatura": "IRQ"
        },
        {
          "name": "Irán",
          "phone_code": "+98",
          "abreviatura": "IRN"
        },
        {
          "name": "Irlanda",
          "phone_code": "+353",
          "abreviatura": "IRL"
        },
        {
          "name": "Isla de Man",
          "phone_code": "+44",
          "abreviatura": "IMN"
        },
        {
          "name": "Isla Norfolk",
          "phone_code": "+672",
          "abreviatura": "NFK"
        },
        {
          "name": "Islandia",
          "phone_code": "+354",
          "abreviatura": "ISL"
        },
        {
          "name": "Islas Bermudas",
          "phone_code": "+1 441",
          "abreviatura": "BMU"
        },
        {
          "name": "Islas Cook",
          "phone_code": "+682",
          "abreviatura": "COK"
        },
        {
          "name": "Islas Feroe",
          "phone_code": "+298",
          "abreviatura": "FRO"
        },
        {
          "name": "Islas Pitcairn",
          "phone_code": "+870",
          "abreviatura": "PCN"
        },
        {
          "name": "Islas Salomón",
          "phone_code": "+677",
          "abreviatura": "SLB"
        },
        {
          "name": "Islas Turcas y Caicos",
          "phone_code": "+1 649",
          "abreviatura": "TCA"
        },
        {
          "name": "Islas Vírgenes Británicas",
          "phone_code": "+1 284",
          "abreviatura": "VGB"
        },
        {
          "name": "Israel",
          "phone_code": "+972",
          "abreviatura": "ISR"
        },
        {
          "name": "Italia",
          "phone_code": "+39",
          "abreviatura": "ITA"
        },
        {
          "name": "Jamaica",
          "phone_code": "+1 876",
          "abreviatura": "JAM"
        },
        {
          "name": "Japón",
          "phone_code": "+81",
          "abreviatura": "JPN"
        },
        {
          "name": "Jersey",
          "phone_code": "+44",
          "abreviatura": "JEY"
        },
        {
          "name": "Jordania",
          "phone_code": "+962",
          "abreviatura": "JOR"
        },
        {
          "name": "Kazajistán",
          "phone_code": "+7",
          "abreviatura": "KAZ"
        },
        {
          "name": "Kenia",
          "phone_code": "+254",
          "abreviatura": "KEN"
        },
        {
          "name": "Kirguistán",
          "phone_code": "+996",
          "abreviatura": "KGZ"
        },
        {
          "name": "Kiribati",
          "phone_code": "+686",
          "abreviatura": "KIR"
        },
        {
          "name": "Kuwait",
          "phone_code": "+965",
          "abreviatura": "KWT"
        },
        {
          "name": "Laos",
          "phone_code": "+856",
          "abreviatura": "LAO"
        },
        {
          "name": "Lesoto",
          "phone_code": "+266",
          "abreviatura": "LSO"
        },
        {
          "name": "Letonia",
          "phone_code": "+371",
          "abreviatura": "LVA"
        },
        {
          "name": "Líbano",
          "phone_code": "+961",
          "abreviatura": "LBN"
        },
        {
          "name": "Liberia",
          "phone_code": "+231",
          "abreviatura": "LBR"
        },
        {
          "name": "Libia",
          "phone_code": "+218",
          "abreviatura": "LBY"
        },
        {
          "name": "Liechtenstein",
          "phone_code": "+423",
          "abreviatura": "LIE"
        },
        {
          "name": "Lituania",
          "phone_code": "+370",
          "abreviatura": "LTU"
        },
        {
          "name": "Luxemburgo",
          "phone_code": "+352",
          "abreviatura": "LUX"
        },
        {
          "name": "Macedonia",
          "phone_code": "+389",
          "abreviatura": "MKD"
        },
        {
          "name": "Madagascar",
          "phone_code": "+261",
          "abreviatura": "MDG"
        },
        {
          "name": "Malasia",
          "phone_code": "+60",
          "abreviatura": "MYS"
        },
        {
          "name": "Malawi",
          "phone_code": "+265",
          "abreviatura": "MWI"
        },
        {
          "name": "Mali",
          "phone_code": "+223",
          "abreviatura": "MLI"
        },
        {
          "name": "Malta",
          "phone_code": "+356",
          "abreviatura": "MLT"
        },
        {
          "name": "Marruecos",
          "phone_code": "+212",
          "abreviatura": "MAR"
        },
        {
          "name": "Martinica",
          "phone_code": "+596",
          "abreviatura": "MTQ"
        },
        {
          "name": "Mauricio",
          "phone_code": "+230",
          "abreviatura": "MUS"
        },
        {
          "name": "Mauritania",
          "phone_code": "+222",
          "abreviatura": "MRT"
        },
        {
          "name": "México",
          "phone_code": "+52",
          "abreviatura": "MEX"
        },
        {
          "name": "Moldavia",
          "phone_code": "+373",
          "abreviatura": "MDA"
        },
        {
          "name": "Mónaco",
          "phone_code": "+377",
          "abreviatura": "MCO"
        },
        {
          "name": "Mongolia",
          "phone_code": "+976",
          "abreviatura": "MNG"
        },
        {
          "name": "Mozambique",
          "phone_code": "+258",
          "abreviatura": "MOZ"
        },
        {
          "name": "Namibia",
          "phone_code": "+264",
          "abreviatura": "NAM"
        },
        {
          "name": "Nauru",
          "phone_code": "+674",
          "abreviatura": "NRU"
        },
        {
          "name": "Nepal",
          "phone_code": "+977",
          "abreviatura": "NPL"
        },
        {
          "name": "Nicaragua",
          "phone_code": "+505",
          "abreviatura": "NIC"
        },
        {
          "name": "Niger",
          "phone_code": "+227",
          "abreviatura": "NER"
        },
        {
          "name": "Nigeria",
          "phone_code": "+234",
          "abreviatura": "NGA"
        },
        {
          "name": "Noruega",
          "phone_code": "+47",
          "abreviatura": "NOR"
        },
        {
          "name": "Nueva Caledonia",
          "phone_code": "+687",
          "abreviatura": "NCL"
        },
        {
          "name": "Nueva Zelanda",
          "phone_code": "+64",
          "abreviatura": "NZL"
        },
        {
          "name": "Omán",
          "phone_code": "+968",
          "abreviatura": "OMN"
        },
        {
          "name": "Países Bajos",
          "phone_code": "+31",
          "abreviatura": "NLD"
        },
        {
          "name": "Pakistán",
          "phone_code": "+92",
          "abreviatura": "PAK"
        },
        {
          "name": "Panamá",
          "phone_code": "+507",
          "abreviatura": "PAN"
        },
        {
          "name": "Papúa Nueva Guinea",
          "phone_code": "+675",
          "abreviatura": "PNG"
        },
        {
          "name": "Paraguay",
          "phone_code": "+595",
          "abreviatura": "PRY"
        },
        {
          "name": "Perú",
          "phone_code": "+51",
          "abreviatura": "PER"
        },
        {
          "name": "Polinesia Francesa",
          "phone_code": "+689",
          "abreviatura": "PYF"
        },
        {
          "name": "Polonia",
          "phone_code": "+48",
          "abreviatura": "POL"
        },
        {
          "name": "Portugal",
          "phone_code": "+351",
          "abreviatura": "PRT"
        },
        {
          "name": "Puerto Rico",
          "phone_code": "+1",
          "abreviatura": "PRI"
        },
        {
          "name": "Qatar",
          "phone_code": "+974",
          "abreviatura": "QAT"
        },
        {
          "name": "Reino Unido",
          "phone_code": "+44",
          "abreviatura": "GBR"
        },
        {
          "name": "República Checa",
          "phone_code": "+420",
          "abreviatura": "CZE"
        },
        {
          "name": "República del Congo",
          "phone_code": "+242",
          "abreviatura": "COG"
        },
        {
          "name": "República Democrática del Congo",
          "phone_code": "+243",
          "abreviatura": "COD"
        },
        {
          "name": "República Dominicana",
          "phone_code": "+1 809",
          "abreviatura": "DOM"
        },
        {
          "name": "Reunión",
          "phone_code": "+262",
          "abreviatura": "REU"
        },
        {
          "name": "Ruanda",
          "phone_code": "+250",
          "abreviatura": "RWA"
        },
        {
          "name": "Rumanía",
          "phone_code": "+40",
          "abreviatura": "ROU"
        },
        {
          "name": "Rusia",
          "phone_code": "+7",
          "abreviatura": "RUS"
        },
        {
          "name": "Sahara Occidental",
          "phone_code": "+212",
          "abreviatura": "ESH"
        },
        {
          "name": "Samoa",
          "phone_code": "+685",
          "abreviatura": "WSM"
        },
        {
          "name": "San Cristóbal y Nieves",
          "phone_code": "+1 869",
          "abreviatura": "KNA"
        },
        {
          "name": "San Marino",
          "phone_code": "+378",
          "abreviatura": "SMR"
        },
        {
          "name": "San Pedro y Miquelón",
          "phone_code": "+508",
          "abreviatura": "SPM"
        },
        {
          "name": "San Vicente y las Granadinas",
          "phone_code": "+1 784",
          "abreviatura": "VCT"
        },
        {
          "name": "Santa Elena",
          "phone_code": "+290",
          "abreviatura": "SHN"
        },
        {
          "name": "Santa Lucía",
          "phone_code": "+1 758",
          "abreviatura": "LCA"
        },
        {
          "name": "Santo Tomé y Príncipe",
          "phone_code": "+239",
          "abreviatura": "STP"
        },
        {
          "name": "Senegal",
          "phone_code": "+221",
          "abreviatura": "SEN"
        },
        {
          "name": "Serbia",
          "phone_code": "+381",
          "abreviatura": "SRB"
        },
        {
          "name": "Seychelles",
          "phone_code": "+248",
          "abreviatura": "SYC"
        },
        {
          "name": "Sierra Leona",
          "phone_code": "+232",
          "abreviatura": "SLE"
        },
        {
          "name": "Singapur",
          "phone_code": "+65",
          "abreviatura": "SGP"
        },
        {
          "name": "Siria",
          "phone_code": "+963",
          "abreviatura": "SYR"
        },
        {
          "name": "Somalia",
          "phone_code": "+252",
          "abreviatura": "SOM"
        },
        {
          "name": "Sri lanka",
          "phone_code": "+94",
          "abreviatura": "LKA"
        },
        {
          "name": "Sudáfrica",
          "phone_code": "+27",
          "abreviatura": "ZAF"
        },
        {
          "name": "Sudán",
          "phone_code": "+249",
          "abreviatura": "SDN"
        },
        {
          "name": "Suecia",
          "phone_code": "+46",
          "abreviatura": "SWE"
        },
        {
          "name": "Suiza",
          "phone_code": "+41",
          "abreviatura": "CHE"
        },
        {
          "name": "Surinám",
          "phone_code": "+597",
          "abreviatura": "SUR"
        },
        {
          "name": "Swazilandia",
          "phone_code": "+268",
          "abreviatura": "SWZ"
        },
        {
          "name": "Tailandia",
          "phone_code": "+66",
          "abreviatura": "THA"
        },
        {
          "name": "Taiwán",
          "phone_code": "+886",
          "abreviatura": "TWN"
        },
        {
          "name": "Tanzania",
          "phone_code": "+255",
          "abreviatura": "TZA"
        },
        {
          "name": "Tayikistán",
          "phone_code": "+992",
          "abreviatura": "TJK"
        },
        {
          "name": "Timor Oriental",
          "phone_code": "+670",
          "abreviatura": "TLS"
        },
        {
          "name": "Togo",
          "phone_code": "+228",
          "abreviatura": "TGO"
        },
        {
          "name": "Tokelau",
          "phone_code": "+690",
          "abreviatura": "TKL"
        },
        {
          "name": "Tonga",
          "phone_code": "+676",
          "abreviatura": "TON"
        },
        {
          "name": "Trinidad y Tobago",
          "phone_code": "+1 868",
          "abreviatura": "TTO"
        },
        {
          "name": "Túnez",
          "phone_code": "+216",
          "abreviatura": "TUN"
        },
        {
          "name": "Turkmenistán",
          "phone_code": "+993",
          "abreviatura": "TKM"
        },
        {
          "name": "Turquía",
          "phone_code": "+90",
          "abreviatura": "TUR"
        },
        {
          "name": "Tuvalu",
          "phone_code": "+688",
          "abreviatura": "TUV"
        },
        {
          "name": "Ucrania",
          "phone_code": "+380",
          "abreviatura": "UKR"
        },
        {
          "name": "Uganda",
          "phone_code": "+256",
          "abreviatura": "UGA"
        },
        {
          "name": "Uruguay",
          "phone_code": "+598",
          "abreviatura": "URY"
        },
        {
          "name": "Uzbekistán",
          "phone_code": "+998",
          "abreviatura": "UZB"
        },
        {
          "name": "Vanuatu",
          "phone_code": "+678",
          "abreviatura": "VUT"
        },
        {
          "name": "Venezuela",
          "phone_code": "+58",
          "abreviatura": "VEN"
        },
        {
          "name": "Vietnam",
          "phone_code": "+84",
          "abreviatura": "VNM"
        },
        {
          "name": "Wallis y Futuna",
          "phone_code": "+681",
          "abreviatura": "WLF"
        },
        {
          "name": "Yemen",
          "phone_code": "+967",
          "abreviatura": "YEM"
        },
        {
          "name": "Yibuti",
          "phone_code": "+253",
          "abreviatura": "DJI"
        },
        {
          "name": "Zimbabue",
          "phone_code": "+263",
          "abreviatura": "ZWE"
        },
      ])
      .execute();
  }
}
//######################################################################################
