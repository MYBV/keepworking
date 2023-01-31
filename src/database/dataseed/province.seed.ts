//#############################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ProvinceEntity } from '../entities/province.entity';
//#############################################################################################

//#############################################################################################
export default class DataProvince implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(ProvinceEntity)
      .values([
        {
          name: 'Afghanistan',
          countryId: 1,
        },
        {
          name: 'Berat',
          countryId: 2,
        },
        {
          name: 'Diber',
          countryId: 2,
        },
        {
          name: 'Durres',
          countryId: 2,
        },
        {
          name: 'Elbasan',
          countryId: 2,
        },
        {
          name: 'Fier',
          countryId: 2,
        },
        {
          name: 'Gjirokaster',
          countryId: 2,
        },
        {
          name: 'Korce',
          countryId: 2,
        },
        {
          name: 'Kukes',
          countryId: 2,
        },
        {
          name: 'Lezhe',
          countryId: 2,
        },
        {
          name: 'Shkoder',
          countryId: 2,
        },
        {
          name: 'Tirane',
          countryId: 2,
        },
        {
          name: 'Vlore',
          countryId: 2,
        },
        {
          name: 'Brandenburg',
          countryId: 3,
        },
        {
          name: 'Baden-Württemberg',
          countryId: 3,
        },
        {
          name: 'Bayern',
          countryId: 3,
        },
        {
          name: 'Hessen',
          countryId: 3,
        },
        {
          name: 'Hamburg',
          countryId: 3,
        },
        {
          name: 'Mecklenburg-Vorpommern',
          countryId: 3,
        },
        {
          name: 'Niedersachsen',
          countryId: 3,
        },
        {
          name: 'Nordrhein-Westfalen',
          countryId: 3,
        },
        {
          name: 'Rheinland-Pfalz',
          countryId: 3,
        },
        {
          name: 'Schleswig-Holstein',
          countryId: 3,
        },
        {
          name: 'Sachsen',
          countryId: 3,
        },
        {
          name: 'Sachsen-Anhalt',
          countryId: 3,
        },
        {
          name: 'Thüringen',
          countryId: 3,
        },
        {
          name: 'Berlin',
          countryId: 3,
        },
        {
          name: 'Bremen',
          countryId: 3,
        },
        {
          name: 'Saarland',
          countryId: 3,
        },
        {
          name: 'Canillo',
          countryId: 4,
        },
        {
          name: 'Encamp',
          countryId: 4,
        },
        {
          name: 'La Massana',
          countryId: 4,
        },
        {
          name: 'Ordino',
          countryId: 4,
        },
        {
          name: 'Sant Julia de Loria',
          countryId: 4,
        },
        {
          name: 'Andorra la Vella',
          countryId: 4,
        },
        {
          name: 'Escaldes-Engordany',
          countryId: 4,
        },
        {
          name: 'Angola',
          countryId: 5,
        },
        {
          name: 'Anguilla',
          countryId: 6,
        },
        {
          name: 'Antigua and Barbuda',
          countryId: 7,
        },
        {
          name: 'Willemstad',
          countryId: 8,
        },
        {
          name: 'Saudi Arabia',
          countryId: 9,
        },
        {
          name: 'Algeria',
          countryId: 10,
        },
        {
          name: 'Buenos Aires',
          countryId: 11,
        },
        {
          name: 'Catamarca',
          countryId: 11,
        },
        {
          name: 'Chaco',
          countryId: 11,
        },
        {
          name: 'Chubut',
          countryId: 11,
        },
        {
          name: 'Córdoba',
          countryId: 11,
        },
        {
          name: 'Corrientes',
          countryId: 11,
        },
        {
          name: 'Distrito Federal',
          countryId: 11,
        },
        {
          name: 'Entre Ríos',
          countryId: 11,
        },
        {
          name: 'Formosa',
          countryId: 11,
        },
        {
          name: 'Jujuy',
          countryId: 11,
        },
        {
          name: 'La Pampa',
          countryId: 11,
        },
        {
          name: 'La Rioja',
          countryId: 11,
        },
        {
          name: 'Mendoza',
          countryId: 11,
        },
        {
          name: 'Misiones',
          countryId: 11,
        },
        {
          name: 'Neuquén',
          countryId: 11,
        },
        {
          name: 'Río Negro',
          countryId: 11,
        },
        {
          name: 'Salta',
          countryId: 11,
        },
        {
          name: 'San Juan',
          countryId: 11,
        },
        {
          name: 'San Luis',
          countryId: 11,
        },
        {
          name: 'Santa Cruz',
          countryId: 11,
        },
        {
          name: 'Santa Fe',
          countryId: 11,
        },
        {
          name: 'Santiago del Estero',
          countryId: 11,
        },
        {
          name: 'Tierra del Fuego',
          countryId: 11,
        },
        {
          name: 'Tucumán',
          countryId: 11,
        },
        {
          name: 'Aragatsotn',
          countryId: 12,
        },
        {
          name: 'Ararat',
          countryId: 12,
        },
        {
          name: 'Armavir',
          countryId: 12,
        },
        {
          name: 'Geghark&#039;unik&#039;',
          countryId: 12,
        },
        {
          name: 'Kotayk&#039;',
          countryId: 12,
        },
        {
          name: 'Lorri',
          countryId: 12,
        },
        {
          name: 'Shirak',
          countryId: 12,
        },
        {
          name: 'Syunik&#039;',
          countryId: 12,
        },
        {
          name: 'Tavush',
          countryId: 12,
        },
        {
          name: 'Vayots&#039; Dzor',
          countryId: 12,
        },
        {
          name: 'Yerevan',
          countryId: 12,
        },
        {
          name: 'Aruba',
          countryId: 13,
        },
        {
          name: 'Australian Capital Territory',
          countryId: 14,
        },
        {
          name: 'New South Wales',
          countryId: 14,
        },
        {
          name: 'Northern Territory',
          countryId: 14,
        },
        {
          name: 'Queensland',
          countryId: 14,
        },
        {
          name: 'South Australia',
          countryId: 14,
        },
        {
          name: 'Tasmania',
          countryId: 14,
        },
        {
          name: 'Victoria',
          countryId: 14,
        },
        {
          name: 'Western Australia',
          countryId: 14,
        },
        {
          name: 'Burgenland',
          countryId: 15,
        },
        {
          name: 'Kärnten',
          countryId: 15,
        },
        {
          name: 'Niederösterreich',
          countryId: 15,
        },
        {
          name: 'Oberösterreich',
          countryId: 15,
        },
        {
          name: 'Salzburg',
          countryId: 15,
        },
        {
          name: 'Steiermark',
          countryId: 15,
        },
        {
          name: 'Tirol',
          countryId: 15,
        },
        {
          name: 'Vorarlberg',
          countryId: 15,
        },
        {
          name: 'Wien',
          countryId: 15,
        },
        {
          name: 'Azerbaijan',
          countryId: 16,
        },
        {
          name: 'Nargorni Karabakh',
          countryId: 16,
        },
        {
          name: 'Nakhichevanskaya Region',
          countryId: 16,
        },
        {
          name: 'Bahamas',
          countryId: 17,
        },
        {
          name: 'Bahrain',
          countryId: 18,
        },
        {
          name: 'Bangladesh',
          countryId: 19,
        },
        {
          name: 'Barbados',
          countryId: 20,
        },
        {
          name: 'Bruxelles',
          countryId: 21,
        },
        {
          name: 'West-Vlaanderen',
          countryId: 21,
        },
        {
          name: 'Oost-Vlaanderen',
          countryId: 21,
        },
        {
          name: 'Limburg',
          countryId: 21,
        },
        {
          name: 'Vlaams Brabant',
          countryId: 21,
        },
        {
          name: 'Antwerpen',
          countryId: 21,
        },
        {
          name: 'LiÄge',
          countryId: 21,
        },
        {
          name: 'Namur',
          countryId: 21,
        },
        {
          name: 'Hainaut',
          countryId: 21,
        },
        {
          name: 'Luxembourg',
          countryId: 21,
        },
        {
          name: 'Brabant Wallon',
          countryId: 21,
        },
        {
          name: 'Belize',
          countryId: 22,
        },
        {
          name: 'Benin',
          countryId: 23,
        },
        {
          name: 'Brestskaya obl.',
          countryId: 24,
        },
        {
          name: 'Vitebskaya obl.',
          countryId: 24,
        },
        {
          name: 'Gomelskaya obl.',
          countryId: 24,
        },
        {
          name: 'Grodnenskaya obl.',
          countryId: 24,
        },
        {
          name: 'Minskaya obl.',
          countryId: 24,
        },
        {
          name: 'Mogilevskaya obl.',
          countryId: 24,
        },
        {
          name: 'Chuquisaca',
          countryId: 25,
        },
        {
          name: 'Cochabamba',
          countryId: 25,
        },
        {
          name: 'El Beni',
          countryId: 25,
        },
        {
          name: 'La Paz',
          countryId: 25,
        },
        {
          name: 'Oruro',
          countryId: 25,
        },
        {
          name: 'Pando',
          countryId: 25,
        },
        {
          name: 'Potosí',
          countryId: 25,
        },
        {
          name: 'Santa Cruz',
          countryId: 25,
        },
        {
          name: 'Tarija',
          countryId: 25,
        },
        {
          name: 'Federation of Bosnia and Herzegovina',
          countryId: 26,
        },
        {
          name: 'Republika Srpska',
          countryId: 26,
        },
        {
          name: 'Botswana',
          countryId: 27,
        },
        {
          name: 'Acre',
          countryId: 28,
        },
        {
          name: 'Alagoas',
          countryId: 28,
        },
        {
          name: 'Amapa',
          countryId: 28,
        },
        {
          name: 'Amazonas',
          countryId: 28,
        },
        {
          name: 'Bahia',
          countryId: 28,
        },
        {
          name: 'Ceara',
          countryId: 28,
        },
        {
          name: 'Distrito Federal',
          countryId: 28,
        },
        {
          name: 'Espirito Santo',
          countryId: 28,
        },
        {
          name: 'Mato Grosso do Sul',
          countryId: 28,
        },
        {
          name: 'Maranhao',
          countryId: 28,
        },
        {
          name: 'Mato Grosso',
          countryId: 28,
        },
        {
          name: 'Minas Gerais',
          countryId: 28,
        },
        {
          name: 'Para',
          countryId: 28,
        },
        {
          name: 'Paraiba',
          countryId: 28,
        },
        {
          name: 'Parana',
          countryId: 28,
        },
        {
          name: 'Piaui',
          countryId: 28,
        },
        {
          name: 'Rio de Janeiro',
          countryId: 28,
        },
        {
          name: 'Rio Grande do Norte',
          countryId: 28,
        },
        {
          name: 'Rio Grande do Sul',
          countryId: 28,
        },
        {
          name: 'Rondonia',
          countryId: 28,
        },
        {
          name: 'Roraima',
          countryId: 28,
        },
        {
          name: 'Santa Catarina',
          countryId: 28,
        },
        {
          name: 'Sao Paulo',
          countryId: 28,
        },
        {
          name: 'Sergipe',
          countryId: 28,
        },
        {
          name: 'Goias',
          countryId: 28,
        },
        {
          name: 'Pernambuco',
          countryId: 28,
        },
        {
          name: 'Tocantins',
          countryId: 28,
        },
        {
          name: 'Brunei',
          countryId: 29,
        },
        {
          name: 'Mikhaylovgrad',
          countryId: 30,
        },
        {
          name: 'Blagoevgrad',
          countryId: 30,
        },
        {
          name: 'Burgas',
          countryId: 30,
        },
        {
          name: 'Dobrich',
          countryId: 30,
        },
        {
          name: 'Gabrovo',
          countryId: 30,
        },
        {
          name: 'Grad Sofiya',
          countryId: 30,
        },
        {
          name: 'Khaskovo',
          countryId: 30,
        },
        {
          name: 'Kurdzhali',
          countryId: 30,
        },
        {
          name: 'Kyustendil',
          countryId: 30,
        },
        {
          name: 'Lovech',
          countryId: 30,
        },
        {
          name: 'Montana',
          countryId: 30,
        },
        {
          name: 'Pazardzhik',
          countryId: 30,
        },
        {
          name: 'Pernik',
          countryId: 30,
        },
        {
          name: 'Pleven',
          countryId: 30,
        },
        {
          name: 'Plovdiv',
          countryId: 30,
        },
        {
          name: 'Razgrad',
          countryId: 30,
        },
        {
          name: 'Ruse',
          countryId: 30,
        },
        {
          name: 'Shumen',
          countryId: 30,
        },
        {
          name: 'Silistra',
          countryId: 30,
        },
        {
          name: 'Sliven',
          countryId: 30,
        },
        {
          name: 'Smolyan',
          countryId: 30,
        },
        {
          name: 'Sofiya',
          countryId: 30,
        },
        {
          name: 'Stara Zagora',
          countryId: 30,
        },
        {
          name: 'Turgovishte',
          countryId: 30,
        },
        {
          name: 'Varna',
          countryId: 30,
        },
        {
          name: 'Veliko Turnovo',
          countryId: 30,
        },
        {
          name: 'Vidin',
          countryId: 30,
        },
        {
          name: 'Vratsa',
          countryId: 30,
        },
        {
          name: 'Yambol',
          countryId: 30,
        },
        {
          name: 'Burkina Faso',
          countryId: 31,
        },
        {
          name: 'Burundi',
          countryId: 32,
        },
        {
          name: 'Bhutan',
          countryId: 33,
        },
        {
          name: 'Cape Verde',
          countryId: 34,
        },
        {
          name: 'Cambodia',
          countryId: 35,
        },
        {
          name: 'Littoral',
          countryId: 36,
        },
        {
          name: 'Southwest Region',
          countryId: 36,
        },
        {
          name: 'North',
          countryId: 36,
        },
        {
          name: 'Central',
          countryId: 36,
        },
        {
          name: 'Newfoundland',
          countryId: 37,
        },
        {
          name: 'Nova Scotia',
          countryId: 37,
        },
        {
          name: 'Prince Edward Island',
          countryId: 37,
        },
        {
          name: 'New Brunswick',
          countryId: 37,
        },
        {
          name: 'Quebec',
          countryId: 37,
        },
        {
          name: 'Ontario',
          countryId: 37,
        },
        {
          name: 'Manitoba',
          countryId: 37,
        },
        {
          name: 'Saskatchewan',
          countryId: 37,
        },
        {
          name: 'Alberta',
          countryId: 37,
        },
        {
          name: 'British Columbia',
          countryId: 37,
        },
        {
          name: 'Nunavut',
          countryId: 37,
        },
        {
          name: 'Northwest Territories',
          countryId: 37,
        },
        {
          name: 'Yukon Territory',
          countryId: 37,
        },
        {
          name: 'Chad',
          countryId: 38,
        },
        {
          name: 'Región de Tarapacá',
          countryId: 39,
        },
        {
          name: 'Región de Antofagasta',
          countryId: 39,
        },
        {
          name: 'Región de Atacama',
          countryId: 39,
        },
        {
          name: 'Región de Coquimbo',
          countryId: 39,
        },
        {
          name: 'Región de Valparaíso',
          countryId: 39,
        },
        {
          name: 'Región del Libertador General Bernardo O&#039;Higgins',
          countryId: 39,
        },
        {
          name: 'Región del Maule',
          countryId: 39,
        },
        {
          name: 'Región del Bío Bío',
          countryId: 39,
        },
        {
          name: 'Región de La Araucanía',
          countryId: 39,
        },
        {
          name: 'Región de Los Lagos',
          countryId: 39,
        },
        {
          name: 'Región Aisén del General Carlos Ibáñez del Campo',
          countryId: 39,
        },
        {
          name: 'Región de Magallanes y de la Antártica Chilena',
          countryId: 39,
        },
        {
          name: 'Región Metropolitana de Santiago',
          countryId: 39,
        },
        {
          name: 'Región de Los Ríos',
          countryId: 39,
        },
        {
          name: 'Región de Arica y Parinacota',
          countryId: 39,
        },
        {
          name: 'Anhui',
          countryId: 40,
        },
        {
          name: 'Zhejiang',
          countryId: 40,
        },
        {
          name: 'Jiangxi',
          countryId: 40,
        },
        {
          name: 'Jiangsu',
          countryId: 40,
        },
        {
          name: 'Jilin',
          countryId: 40,
        },
        {
          name: 'Qinghai',
          countryId: 40,
        },
        {
          name: 'Fujian',
          countryId: 40,
        },
        {
          name: 'Heilongjiang',
          countryId: 40,
        },
        {
          name: 'Henan',
          countryId: 40,
        },
        {
          name: 'Hebei',
          countryId: 40,
        },
        {
          name: 'Hunan',
          countryId: 40,
        },
        {
          name: 'Hubei',
          countryId: 40,
        },
        {
          name: 'Xinjiang',
          countryId: 40,
        },
        {
          name: 'Xizang',
          countryId: 40,
        },
        {
          name: 'Gansu',
          countryId: 40,
        },
        {
          name: 'Guangxi',
          countryId: 40,
        },
        {
          name: 'Guizhou',
          countryId: 40,
        },
        {
          name: 'Liaoning',
          countryId: 40,
        },
        {
          name: 'Nei Mongol',
          countryId: 40,
        },
        {
          name: 'Ningxia',
          countryId: 40,
        },
        {
          name: 'Beijing',
          countryId: 40,
        },
        {
          name: 'Shanghai',
          countryId: 40,
        },
        {
          name: 'Shanxi',
          countryId: 40,
        },
        {
          name: 'Shandong',
          countryId: 40,
        },
        {
          name: 'Shaanxi',
          countryId: 40,
        },
        {
          name: 'Sichuan',
          countryId: 40,
        },
        {
          name: 'Tianjin',
          countryId: 40,
        },
        {
          name: 'Yunnan',
          countryId: 40,
        },
        {
          name: 'Guangdong',
          countryId: 40,
        },
        {
          name: 'Hainan',
          countryId: 40,
        },
        {
          name: 'Chongqing',
          countryId: 40,
        },
        {
          name: 'Schanghai',
          countryId: 40,
        },
        {
          name: 'Hongkong',
          countryId: 40,
        },
        {
          name: 'Neimenggu',
          countryId: 40,
        },
        {
          name: 'Aomen',
          countryId: 40,
        },
        {
          name: 'Government controlled area',
          countryId: 41,
        },
        {
          name: 'Turkish controlled area',
          countryId: 41,
        },
        {
          name: 'Amazonas',
          countryId: 42,
        },
        {
          name: 'Antioquia',
          countryId: 42,
        },
        {
          name: 'Arauca',
          countryId: 42,
        },
        {
          name: 'Atlántico',
          countryId: 42,
        },
        {
          name: 'Caquetá',
          countryId: 42,
        },
        {
          name: 'Cauca',
          countryId: 42,
        },
        {
          name: 'César',
          countryId: 42,
        },
        {
          name: 'Chocó',
          countryId: 42,
        },
        {
          name: 'Córdoba',
          countryId: 42,
        },
        {
          name: 'Guaviare',
          countryId: 42,
        },
        {
          name: 'Guainía',
          countryId: 42,
        },
        {
          name: 'Huila',
          countryId: 42,
        },
        {
          name: 'La Guajira',
          countryId: 42,
        },
        {
          name: 'Meta',
          countryId: 42,
        },
        {
          name: 'Narino',
          countryId: 42,
        },
        {
          name: 'Norte de Santander',
          countryId: 42,
        },
        {
          name: 'Putumayo',
          countryId: 42,
        },
        {
          name: 'Quindío',
          countryId: 42,
        },
        {
          name: 'Risaralda',
          countryId: 42,
        },
        {
          name: 'San Andrés y Providencia',
          countryId: 42,
        },
        {
          name: 'Santander',
          countryId: 42,
        },
        {
          name: 'Sucre',
          countryId: 42,
        },
        {
          name: 'Tolima',
          countryId: 42,
        },
        {
          name: 'Valle del Cauca',
          countryId: 42,
        },
        {
          name: 'Vaupés',
          countryId: 42,
        },
        {
          name: 'Vichada',
          countryId: 42,
        },
        {
          name: 'Casanare',
          countryId: 42,
        },
        {
          name: 'Cundinamarca',
          countryId: 42,
        },
        {
          name: 'Distrito Especial',
          countryId: 42,
        },
        {
          name: 'Caldas',
          countryId: 42,
        },
        {
          name: 'Magdalena',
          countryId: 42,
        },
        {
          name: 'Comoros',
          countryId: 43,
        },
        {
          name: 'Korea',
          countryId: 44,
        },
        {
          name: 'Cheju',
          countryId: 45,
        },
        {
          name: 'Chollabuk',
          countryId: 45,
        },
        {
          name: 'Chollanam',
          countryId: 45,
        },
        {
          name: 'Chungcheongbuk',
          countryId: 45,
        },
        {
          name: 'Chungcheongnam',
          countryId: 45,
        },
        {
          name: 'Incheon',
          countryId: 45,
        },
        {
          name: 'Kangweon',
          countryId: 45,
        },
        {
          name: 'Kwangju',
          countryId: 45,
        },
        {
          name: 'Kyeonggi',
          countryId: 45,
        },
        {
          name: 'Kyeongsangbuk',
          countryId: 45,
        },
        {
          name: 'Kyeongsangnam',
          countryId: 45,
        },
        {
          name: 'Pusan',
          countryId: 45,
        },
        {
          name: 'Seoul',
          countryId: 45,
        },
        {
          name: 'Taegu',
          countryId: 45,
        },
        {
          name: 'Taejeon',
          countryId: 45,
        },
        {
          name: 'Ulsan',
          countryId: 45,
        },
        {
          name: 'South Korea',
          countryId: 45,
        },
        {
          name: 'Busan',
          countryId: 45,
        },
        {
          name: 'Daegu',
          countryId: 45,
        },
        {
          name: 'Gangwon',
          countryId: 45,
        },
        {
          name: 'Gwangju',
          countryId: 45,
        },
        {
          name: 'Gyeonggi',
          countryId: 45,
        },
        {
          name: 'Gyeongsangbuk',
          countryId: 45,
        },
        {
          name: 'Gyeongsangnam',
          countryId: 45,
        },
        {
          name: 'Jeju',
          countryId: 45,
        },
        {
          name: 'Cote D&#039;Ivoire',
          countryId: 46,
        },
        {
          name: 'Alajuela',
          countryId: 47,
        },
        {
          name: 'Cartago',
          countryId: 47,
        },
        {
          name: 'Guanacaste',
          countryId: 47,
        },
        {
          name: 'Heredia',
          countryId: 47,
        },
        {
          name: 'Limón',
          countryId: 47,
        },
        {
          name: 'Puntarenas',
          countryId: 47,
        },
        {
          name: 'San José',
          countryId: 47,
        },
        {
          name: 'Bjelovarsko-Bilogorska',
          countryId: 48,
        },
        {
          name: 'Brodsko-Posavska',
          countryId: 48,
        },
        {
          name: 'Dubrovacko-Neretvanska',
          countryId: 48,
        },
        {
          name: 'Istarska',
          countryId: 48,
        },
        {
          name: 'Karlovacka',
          countryId: 48,
        },
        {
          name: 'Koprivnicko-Krizevacka',
          countryId: 48,
        },
        {
          name: 'Krapinsko-Zagorska',
          countryId: 48,
        },
        {
          name: 'Licko-Senjska',
          countryId: 48,
        },
        {
          name: 'Medimurska',
          countryId: 48,
        },
        {
          name: 'Osjecko-Baranjska',
          countryId: 48,
        },
        {
          name: 'Pozesko-Slavonska',
          countryId: 48,
        },
        {
          name: 'Primorsko-Goranska',
          countryId: 48,
        },
        {
          name: 'Sibensko-Kninska',
          countryId: 48,
        },
        {
          name: 'Sisacko-Moslavacka',
          countryId: 48,
        },
        {
          name: 'Splitsko-Dalmatinska',
          countryId: 48,
        },
        {
          name: 'Varazdinska',
          countryId: 48,
        },
        {
          name: 'Viroviticko-Podravska',
          countryId: 48,
        },
        {
          name: 'Vukovarsko-Srijemska',
          countryId: 48,
        },
        {
          name: 'Zadarska',
          countryId: 48,
        },
        {
          name: 'Zagrebacka',
          countryId: 48,
        },
        {
          name: 'Grad Zagreb',
          countryId: 48,
        },
        {
          name: 'Pinar del Rio',
          countryId: 49,
        },
        {
          name: 'Ciudad de la Habana',
          countryId: 49,
        },
        {
          name: 'Matanzas',
          countryId: 49,
        },
        {
          name: 'Isla de la Juventud',
          countryId: 49,
        },
        {
          name: 'Camaguey',
          countryId: 49,
        },
        {
          name: 'Ciego de Avila',
          countryId: 49,
        },
        {
          name: 'Cienfuegos',
          countryId: 49,
        },
        {
          name: 'Granma',
          countryId: 49,
        },
        {
          name: 'Guantanamo',
          countryId: 49,
        },
        {
          name: 'La Habana',
          countryId: 49,
        },
        {
          name: 'Holguin',
          countryId: 49,
        },
        {
          name: 'Las Tunas',
          countryId: 49,
        },
        {
          name: 'Sancti Spiritus',
          countryId: 49,
        },
        {
          name: 'Santiago de Cuba',
          countryId: 49,
        },
        {
          name: 'Villa Clara',
          countryId: 49,
        },
        {
          name: 'Arhus',
          countryId: 50,
        },
        {
          name: 'Bornholm',
          countryId: 50,
        },
        {
          name: 'Frederiksborg',
          countryId: 50,
        },
        {
          name: 'Fyn',
          countryId: 50,
        },
        {
          name: 'Kobenhavn',
          countryId: 50,
        },
        {
          name: 'Staden Kobenhavn',
          countryId: 50,
        },
        {
          name: 'Nordjylland',
          countryId: 50,
        },
        {
          name: 'Ribe',
          countryId: 50,
        },
        {
          name: 'Ringkobing',
          countryId: 50,
        },
        {
          name: 'Roskilde',
          countryId: 50,
        },
        {
          name: 'Sonderjylland',
          countryId: 50,
        },
        {
          name: 'Storstrom',
          countryId: 50,
        },
        {
          name: 'Vejle',
          countryId: 50,
        },
        {
          name: 'Vestsjalland',
          countryId: 50,
        },
        {
          name: 'Viborg',
          countryId: 50,
        },
        {
          name: 'Dominica',
          countryId: 51,
        },
        {
          name: 'Galápagos',
          countryId: 52,
        },
        {
          name: 'Azuay',
          countryId: 52,
        },
        {
          name: 'Bolívar',
          countryId: 52,
        },
        {
          name: 'Canar',
          countryId: 52,
        },
        {
          name: 'Carchi',
          countryId: 52,
        },
        {
          name: 'Chimborazo',
          countryId: 52,
        },
        {
          name: 'Cotopaxi',
          countryId: 52,
        },
        {
          name: 'El Oro',
          countryId: 52,
        },
        {
          name: 'Esmeraldas',
          countryId: 52,
        },
        {
          name: 'Guayas',
          countryId: 52,
        },
        {
          name: 'Imbabura',
          countryId: 52,
        },
        {
          name: 'Loja',
          countryId: 52,
        },
        {
          name: 'Los Ríos',
          countryId: 52,
        },
        {
          name: 'Manabí',
          countryId: 52,
        },
        {
          name: 'Morona-Santiago',
          countryId: 52,
        },
        {
          name: 'Pastaza',
          countryId: 52,
        },
        {
          name: 'Pichincha',
          countryId: 52,
        },
        {
          name: 'Tungurahua',
          countryId: 52,
        },
        {
          name: 'Zamora-Chinchipe',
          countryId: 52,
        },
        {
          name: 'Sucumbíos',
          countryId: 52,
        },
        {
          name: 'Napo',
          countryId: 52,
        },
        {
          name: 'Orellana',
          countryId: 52,
        },
        {
          name: 'Al QÄhira',
          countryId: 53,
        },
        {
          name: 'Aswan',
          countryId: 53,
        },
        {
          name: 'Asyut',
          countryId: 53,
        },
        {
          name: 'Beni Suef',
          countryId: 53,
        },
        {
          name: 'Gharbia',
          countryId: 53,
        },
        {
          name: 'Damietta',
          countryId: 53,
        },
        {
          name: 'Egypt',
          countryId: 53,
        },
        {
          name: 'Sinai',
          countryId: 53,
        },
        {
          name: 'Ahuachapán',
          countryId: 54,
        },
        {
          name: 'Cuscatlán',
          countryId: 54,
        },
        {
          name: 'La Libertad',
          countryId: 54,
        },
        {
          name: 'La Paz',
          countryId: 54,
        },
        {
          name: 'La Unión',
          countryId: 54,
        },
        {
          name: 'San Miguel',
          countryId: 54,
        },
        {
          name: 'San Salvador',
          countryId: 54,
        },
        {
          name: 'Santa Ana',
          countryId: 54,
        },
        {
          name: 'Sonsonate',
          countryId: 54,
        },
        {
          name: 'Dubai',
          countryId: 55,
        },
        {
          name: 'Sharjah',
          countryId: 55,
        },
        {
          name: 'Abu Dhabi',
          countryId: 55,
        },
        {
          name: 'Eritrea',
          countryId: 56,
        },
        {
          name: 'Banska Bystrica',
          countryId: 57,
        },
        {
          name: 'Bratislava',
          countryId: 57,
        },
        {
          name: 'Kosice',
          countryId: 57,
        },
        {
          name: 'Nitra',
          countryId: 57,
        },
        {
          name: 'Presov',
          countryId: 57,
        },
        {
          name: 'Trencin',
          countryId: 57,
        },
        {
          name: 'Trnava',
          countryId: 57,
        },
        {
          name: 'Zilina',
          countryId: 57,
        },
        {
          name: 'Beltinci',
          countryId: 58,
        },
        {
          name: 'Bohinj',
          countryId: 58,
        },
        {
          name: 'Borovnica',
          countryId: 58,
        },
        {
          name: 'Bovec',
          countryId: 58,
        },
        {
          name: 'Brda',
          countryId: 58,
        },
        {
          name: 'Brezice',
          countryId: 58,
        },
        {
          name: 'Brezovica',
          countryId: 58,
        },
        {
          name: 'Cerklje na Gorenjskem',
          countryId: 58,
        },
        {
          name: 'Cerkno',
          countryId: 58,
        },
        {
          name: 'Crna na Koroskem',
          countryId: 58,
        },
        {
          name: 'Crnomelj',
          countryId: 58,
        },
        {
          name: 'Divaca',
          countryId: 58,
        },
        {
          name: 'Dobrepolje',
          countryId: 58,
        },
        {
          name: 'Dol pri Ljubljani',
          countryId: 58,
        },
        {
          name: 'Duplek',
          countryId: 58,
        },
        {
          name: 'Gornji Grad',
          countryId: 58,
        },
        {
          name: 'Hrastnik',
          countryId: 58,
        },
        {
          name: 'Hrpelje-Kozina',
          countryId: 58,
        },
        {
          name: 'Idrija',
          countryId: 58,
        },
        {
          name: 'Ig',
          countryId: 58,
        },
        {
          name: 'Ilirska Bistrica',
          countryId: 58,
        },
        {
          name: 'Ivancna Gorica',
          countryId: 58,
        },
        {
          name: 'Komen',
          countryId: 58,
        },
        {
          name: 'Koper-Capodistria',
          countryId: 58,
        },
        {
          name: 'Kozje',
          countryId: 58,
        },
        {
          name: 'Kranj',
          countryId: 58,
        },
        {
          name: 'Kranjska Gora',
          countryId: 58,
        },
        {
          name: 'Krsko',
          countryId: 58,
        },
        {
          name: 'Lasko',
          countryId: 58,
        },
        {
          name: 'Ljubljana',
          countryId: 58,
        },
        {
          name: 'Ljubno',
          countryId: 58,
        },
        {
          name: 'Logatec',
          countryId: 58,
        },
        {
          name: 'Medvode',
          countryId: 58,
        },
        {
          name: 'Menges',
          countryId: 58,
        },
        {
          name: 'Mezica',
          countryId: 58,
        },
        {
          name: 'Moravce',
          countryId: 58,
        },
        {
          name: 'Mozirje',
          countryId: 58,
        },
        {
          name: 'Murska Sobota',
          countryId: 58,
        },
        {
          name: 'Nova Gorica',
          countryId: 58,
        },
        {
          name: 'Ormoz',
          countryId: 58,
        },
        {
          name: 'Pesnica',
          countryId: 58,
        },
        {
          name: 'Postojna',
          countryId: 58,
        },
        {
          name: 'Radece',
          countryId: 58,
        },
        {
          name: 'Radenci',
          countryId: 58,
        },
        {
          name: 'Radovljica',
          countryId: 58,
        },
        {
          name: 'Rogaska Slatina',
          countryId: 58,
        },
        {
          name: 'Sencur',
          countryId: 58,
        },
        {
          name: 'Sentilj',
          countryId: 58,
        },
        {
          name: 'Sevnica',
          countryId: 58,
        },
        {
          name: 'Sezana',
          countryId: 58,
        },
        {
          name: 'Skofja Loka',
          countryId: 58,
        },
        {
          name: 'Slovenj Gradec',
          countryId: 58,
        },
        {
          name: 'Slovenske Konjice',
          countryId: 58,
        },
        {
          name: 'Smarje pri Jelsah',
          countryId: 58,
        },
        {
          name: 'Tolmin',
          countryId: 58,
        },
        {
          name: 'Trbovlje',
          countryId: 58,
        },
        {
          name: 'Trzic',
          countryId: 58,
        },
        {
          name: 'Velenje',
          countryId: 58,
        },
        {
          name: 'Vipava',
          countryId: 58,
        },
        {
          name: 'Vrhnika',
          countryId: 58,
        },
        {
          name: 'Vuzenica',
          countryId: 58,
        },
        {
          name: 'Zagorje ob Savi',
          countryId: 58,
        },
        {
          name: 'Zelezniki',
          countryId: 58,
        },
        {
          name: 'Ziri',
          countryId: 58,
        },
        {
          name: 'Zrece',
          countryId: 58,
        },
        {
          name: 'Domzale',
          countryId: 58,
        },
        {
          name: 'Jesenice',
          countryId: 58,
        },
        {
          name: 'Kamnik',
          countryId: 58,
        },
        {
          name: 'Kocevje',
          countryId: 58,
        },
        {
          name: 'Lenart',
          countryId: 58,
        },
        {
          name: 'Litija',
          countryId: 58,
        },
        {
          name: 'Ljutomer',
          countryId: 58,
        },
        {
          name: 'Maribor',
          countryId: 58,
        },
        {
          name: 'Novo Mesto',
          countryId: 58,
        },
        {
          name: 'Piran',
          countryId: 58,
        },
        {
          name: 'Preddvor',
          countryId: 58,
        },
        {
          name: 'Ptuj',
          countryId: 58,
        },
        {
          name: 'Ribnica',
          countryId: 58,
        },
        {
          name: 'Sentjur pri Celju',
          countryId: 58,
        },
        {
          name: 'Slovenska Bistrica',
          countryId: 58,
        },
        {
          name: 'Videm',
          countryId: 58,
        },
        {
          name: 'Zalec',
          countryId: 58,
        },
        {
          name: 'Las Palmas',
          countryId: 59,
        },
        {
          name: 'Soria',
          countryId: 59,
        },
        {
          name: 'Palencia',
          countryId: 59,
        },
        {
          name: 'Zamora',
          countryId: 59,
        },
        {
          name: 'Cádiz',
          countryId: 59,
        },
        {
          name: 'Navarra',
          countryId: 59,
        },
        {
          name: 'Ourense',
          countryId: 59,
        },
        {
          name: 'Segovia',
          countryId: 59,
        },
        {
          name: 'Guip&uacute;zcoa',
          countryId: 59,
        },
        {
          name: 'Ciudad Real',
          countryId: 59,
        },
        {
          name: 'Vizcaya',
          countryId: 59,
        },
        {
          name: 'álava',
          countryId: 59,
        },
        {
          name: 'A Coruña',
          countryId: 59,
        },
        {
          name: 'Cantabria',
          countryId: 59,
        },
        {
          name: 'Almería',
          countryId: 59,
        },
        {
          name: 'Zaragoza',
          countryId: 59,
        },
        {
          name: 'Santa Cruz de Tenerife',
          countryId: 59,
        },
        {
          name: 'Cáceres',
          countryId: 59,
        },
        {
          name: 'Guadalajara',
          countryId: 59,
        },
        {
          name: 'ávila',
          countryId: 59,
        },
        {
          name: 'Toledo',
          countryId: 59,
        },
        {
          name: 'Castellón',
          countryId: 59,
        },
        {
          name: 'Tarragona',
          countryId: 59,
        },
        {
          name: 'Lugo',
          countryId: 59,
        },
        {
          name: 'La Rioja',
          countryId: 59,
        },
        {
          name: 'Ceuta',
          countryId: 59,
        },
        {
          name: 'Murcia',
          countryId: 59,
        },
        {
          name: 'Salamanca',
          countryId: 59,
        },
        {
          name: 'Valladolid',
          countryId: 59,
        },
        {
          name: 'Jaén',
          countryId: 59,
        },
        {
          name: 'Girona',
          countryId: 59,
        },
        {
          name: 'Granada',
          countryId: 59,
        },
        {
          name: 'Alacant',
          countryId: 59,
        },
        {
          name: 'Córdoba',
          countryId: 59,
        },
        {
          name: 'Albacete',
          countryId: 59,
        },
        {
          name: 'Cuenca',
          countryId: 59,
        },
        {
          name: 'Pontevedra',
          countryId: 59,
        },
        {
          name: 'Teruel',
          countryId: 59,
        },
        {
          name: 'Melilla',
          countryId: 59,
        },
        {
          name: 'Barcelona',
          countryId: 59,
        },
        {
          name: 'Badajoz',
          countryId: 59,
        },
        {
          name: 'Madrid',
          countryId: 59,
        },
        {
          name: 'Sevilla',
          countryId: 59,
        },
        {
          name: 'Val&egrave;ncia',
          countryId: 59,
        },
        {
          name: 'Huelva',
          countryId: 59,
        },
        {
          name: 'Lleida',
          countryId: 59,
        },
        {
          name: 'León',
          countryId: 59,
        },
        {
          name: 'Illes Balears',
          countryId: 59,
        },
        {
          name: 'Burgos',
          countryId: 59,
        },
        {
          name: 'Huesca',
          countryId: 59,
        },
        {
          name: 'Asturias',
          countryId: 59,
        },
        {
          name: 'Málaga',
          countryId: 59,
        },
        {
          name: 'Armed Forces Americas',
          countryId: 60,
        },
        {
          name: 'Armed Forces Europe',
          countryId: 60,
        },
        {
          name: 'Alaska',
          countryId: 60,
        },
        {
          name: 'Alabama',
          countryId: 60,
        },
        {
          name: 'Armed Forces Pacific',
          countryId: 60,
        },
        {
          name: 'Arkansas',
          countryId: 60,
        },
        {
          name: 'American Samoa',
          countryId: 60,
        },
        {
          name: 'Arizona',
          countryId: 60,
        },
        {
          name: 'California',
          countryId: 60,
        },
        {
          name: 'Colorado',
          countryId: 60,
        },
        {
          name: 'Connecticut',
          countryId: 60,
        },
        {
          name: 'District of Columbia',
          countryId: 60,
        },
        {
          name: 'Delaware',
          countryId: 60,
        },
        {
          name: 'Florida',
          countryId: 60,
        },
        {
          name: 'Federated States of Micronesia',
          countryId: 60,
        },
        {
          name: 'Georgia',
          countryId: 60,
        },
        {
          name: 'Hawaii',
          countryId: 60,
        },
        {
          name: 'Iowa',
          countryId: 60,
        },
        {
          name: 'Idaho',
          countryId: 60,
        },
        {
          name: 'Illinois',
          countryId: 60,
        },
        {
          name: 'Indiana',
          countryId: 60,
        },
        {
          name: 'Kansas',
          countryId: 60,
        },
        {
          name: 'Kentucky',
          countryId: 60,
        },
        {
          name: 'Louisiana',
          countryId: 60,
        },
        {
          name: 'Massachusetts',
          countryId: 60,
        },
        {
          name: 'Maryland',
          countryId: 60,
        },
        {
          name: 'Maine',
          countryId: 60,
        },
        {
          name: 'Marshall Islands',
          countryId: 60,
        },
        {
          name: 'Michigan',
          countryId: 60,
        },
        {
          name: 'Minnesota',
          countryId: 60,
        },
        {
          name: 'Missouri',
          countryId: 60,
        },
        {
          name: 'Northern Mariana Islands',
          countryId: 60,
        },
        {
          name: 'Mississippi',
          countryId: 60,
        },
        {
          name: 'Montana',
          countryId: 60,
        },
        {
          name: 'North Carolina',
          countryId: 60,
        },
        {
          name: 'North Dakota',
          countryId: 60,
        },
        {
          name: 'Nebraska',
          countryId: 60,
        },
        {
          name: 'New Hampshire',
          countryId: 60,
        },
        {
          name: 'New Jersey',
          countryId: 60,
        },
        {
          name: 'New Mexico',
          countryId: 60,
        },
        {
          name: 'Nevada',
          countryId: 60,
        },
        {
          name: 'New York',
          countryId: 60,
        },
        {
          name: 'Ohio',
          countryId: 60,
        },
        {
          name: 'Oklahoma',
          countryId: 60,
        },
        {
          name: 'Oregon',
          countryId: 60,
        },
        {
          name: 'Pennsylvania',
          countryId: 60,
        },
        {
          name: 'Palau',
          countryId: 60,
        },
        {
          name: 'Rhode Island',
          countryId: 60,
        },
        {
          name: 'South Carolina',
          countryId: 60,
        },
        {
          name: 'South Dakota',
          countryId: 60,
        },
        {
          name: 'Tennessee',
          countryId: 60,
        },
        {
          name: 'Texas',
          countryId: 60,
        },
        {
          name: 'Utah',
          countryId: 60,
        },
        {
          name: 'Virginia',
          countryId: 60,
        },
        {
          name: 'Virgin Islands',
          countryId: 60,
        },
        {
          name: 'Vermont',
          countryId: 60,
        },
        {
          name: 'Washington',
          countryId: 60,
        },
        {
          name: 'West Virginia',
          countryId: 60,
        },
        {
          name: 'Wisconsin',
          countryId: 60,
        },
        {
          name: 'Wyoming',
          countryId: 60,
        },
        {
          name: 'Estoniya',
          countryId: 61,
        },
        {
          name: 'Ethiopia',
          countryId: 62,
        },
        {
          name: 'Philippines',
          countryId: 63,
        },
        {
          name: '&ETH;&bull;land',
          countryId: 64,
        },
        {
          name: 'Lapland',
          countryId: 64,
        },
        {
          name: 'Oulu',
          countryId: 64,
        },
        {
          name: 'Southern Finland',
          countryId: 64,
        },
        {
          name: 'Eastern Finland',
          countryId: 64,
        },
        {
          name: 'Western Finland',
          countryId: 64,
        },
        {
          name: 'Fiji',
          countryId: 65,
        },
        {
          name: 'Ain',
          countryId: 66,
        },
        {
          name: 'Haute-Savoie',
          countryId: 66,
        },
        {
          name: 'Aisne',
          countryId: 66,
        },
        {
          name: 'Allier',
          countryId: 66,
        },
        {
          name: 'Alpes-de-Haute-Provence',
          countryId: 66,
        },
        {
          name: 'Hautes-Alpes',
          countryId: 66,
        },
        {
          name: 'Alpes-Maritimes',
          countryId: 66,
        },
        {
          name: 'Ard&egrave;che',
          countryId: 66,
        },
        {
          name: 'Ardennes',
          countryId: 66,
        },
        {
          name: 'Ari&egrave;ge',
          countryId: 66,
        },
        {
          name: 'Aube',
          countryId: 66,
        },
        {
          name: 'Aude',
          countryId: 66,
        },
        {
          name: 'Aveyron',
          countryId: 66,
        },
        {
          name: 'Bouches-du-Rh&ocirc;ne',
          countryId: 66,
        },
        {
          name: 'Calvados',
          countryId: 66,
        },
        {
          name: 'Cantal',
          countryId: 66,
        },
        {
          name: 'Charente',
          countryId: 66,
        },
        {
          name: 'Charente Maritime',
          countryId: 66,
        },
        {
          name: 'Cher',
          countryId: 66,
        },
        {
          name: 'Corr&egrave;ze',
          countryId: 66,
        },
        {
          name: 'Dordogne',
          countryId: 66,
        },
        {
          name: 'Corse',
          countryId: 66,
        },
        {
          name: 'C&ocirc;te d&#039;Or',
          countryId: 66,
        },
        {
          name: 'Sa&ocirc;ne et Loire',
          countryId: 66,
        },
        {
          name: 'C&ocirc;tes d&#039;Armor',
          countryId: 66,
        },
        {
          name: 'Creuse',
          countryId: 66,
        },
        {
          name: 'Doubs',
          countryId: 66,
        },
        {
          name: 'Dr&ocirc;me',
          countryId: 66,
        },
        {
          name: 'Eure',
          countryId: 66,
        },
        {
          name: 'Eure-et-Loire',
          countryId: 66,
        },
        {
          name: 'Finist&egrave;re',
          countryId: 66,
        },
        {
          name: 'Gard',
          countryId: 66,
        },
        {
          name: 'Haute-Garonne',
          countryId: 66,
        },
        {
          name: 'Gers',
          countryId: 66,
        },
        {
          name: 'Gironde',
          countryId: 66,
        },
        {
          name: 'Hérault',
          countryId: 66,
        },
        {
          name: 'Ille et Vilaine',
          countryId: 66,
        },
        {
          name: 'Indre',
          countryId: 66,
        },
        {
          name: 'Indre-et-Loire',
          countryId: 66,
        },
        {
          name: 'Isère',
          countryId: 66,
        },
        {
          name: 'Jura',
          countryId: 66,
        },
        {
          name: 'Landes',
          countryId: 66,
        },
        {
          name: 'Loir-et-Cher',
          countryId: 66,
        },
        {
          name: 'Loire',
          countryId: 66,
        },
        {
          name: 'Rh&ocirc;ne',
          countryId: 66,
        },
        {
          name: 'Haute-Loire',
          countryId: 66,
        },
        {
          name: 'Loire Atlantique',
          countryId: 66,
        },
        {
          name: 'Loiret',
          countryId: 66,
        },
        {
          name: 'Lot',
          countryId: 66,
        },
        {
          name: 'Lot-et-Garonne',
          countryId: 66,
        },
        {
          name: 'Loz&egrave;re',
          countryId: 66,
        },
        {
          name: 'Maine et Loire',
          countryId: 66,
        },
        {
          name: 'Manche',
          countryId: 66,
        },
        {
          name: 'Marne',
          countryId: 66,
        },
        {
          name: 'Haute-Marne',
          countryId: 66,
        },
        {
          name: 'Mayenne',
          countryId: 66,
        },
        {
          name: 'Meurthe-et-Moselle',
          countryId: 66,
        },
        {
          name: 'Meuse',
          countryId: 66,
        },
        {
          name: 'Morbihan',
          countryId: 66,
        },
        {
          name: 'Moselle',
          countryId: 66,
        },
        {
          name: 'Ni&egrave;vre',
          countryId: 66,
        },
        {
          name: 'Nord',
          countryId: 66,
        },
        {
          name: 'Oise',
          countryId: 66,
        },
        {
          name: 'Orne',
          countryId: 66,
        },
        {
          name: 'Pas-de-Calais',
          countryId: 66,
        },
        {
          name: 'Puy-de-D&ocirc;me',
          countryId: 66,
        },
        {
          name: 'Pyrénées-Atlantiques',
          countryId: 66,
        },
        {
          name: 'Hautes-Pyrénées',
          countryId: 66,
        },
        {
          name: 'Pyrénées-Orientales',
          countryId: 66,
        },
        {
          name: 'Bas Rhin',
          countryId: 66,
        },
        {
          name: 'Haut Rhin',
          countryId: 66,
        },
        {
          name: 'Haute-Sa&ocirc;ne',
          countryId: 66,
        },
        {
          name: 'Sarthe',
          countryId: 66,
        },
        {
          name: 'Savoie',
          countryId: 66,
        },
        {
          name: 'Paris',
          countryId: 66,
        },
        {
          name: 'Seine-Maritime',
          countryId: 66,
        },
        {
          name: 'Seine-et-Marne',
          countryId: 66,
        },
        {
          name: 'Yvelines',
          countryId: 66,
        },
        {
          name: 'Deux-S&egrave;vres',
          countryId: 66,
        },
        {
          name: 'Somme',
          countryId: 66,
        },
        {
          name: 'Tarn',
          countryId: 66,
        },
        {
          name: 'Tarn-et-Garonne',
          countryId: 66,
        },
        {
          name: 'Var',
          countryId: 66,
        },
        {
          name: 'Vaucluse',
          countryId: 66,
        },
        {
          name: 'Vendée',
          countryId: 66,
        },
        {
          name: 'Vienne',
          countryId: 66,
        },
        {
          name: 'Haute-Vienne',
          countryId: 66,
        },
        {
          name: 'Vosges',
          countryId: 66,
        },
        {
          name: 'Yonne',
          countryId: 66,
        },
        {
          name: 'Territoire de Belfort',
          countryId: 66,
        },
        {
          name: 'Essonne',
          countryId: 66,
        },
        {
          name: 'Hauts-de-Seine',
          countryId: 66,
        },
        {
          name: 'Seine-Saint-Denis',
          countryId: 66,
        },
        {
          name: 'Val-de-Marne',
          countryId: 66,
        },
        {
          name: 'Val-d&#039;Oise',
          countryId: 66,
        },
        {
          name: 'Gabon',
          countryId: 67,
        },
        {
          name: 'Gambia',
          countryId: 68,
        },
        {
          name: 'Abkhazia',
          countryId: 69,
        },
        {
          name: 'Ajaria',
          countryId: 69,
        },
        {
          name: 'Georgia',
          countryId: 69,
        },
        {
          name: 'South Ossetia',
          countryId: 69,
        },
        {
          name: 'Ghana',
          countryId: 70,
        },
        {
          name: 'Gibraltar',
          countryId: 71,
        },
        {
          name: 'St George',
          countryId: 72,
        },
        {
          name: 'Evros',
          countryId: 73,
        },
        {
          name: 'Rodhopi',
          countryId: 73,
        },
        {
          name: 'Xanthi',
          countryId: 73,
        },
        {
          name: 'Drama',
          countryId: 73,
        },
        {
          name: 'Serrai',
          countryId: 73,
        },
        {
          name: 'Kilkis',
          countryId: 73,
        },
        {
          name: 'Pella',
          countryId: 73,
        },
        {
          name: 'Florina',
          countryId: 73,
        },
        {
          name: 'Kastoria',
          countryId: 73,
        },
        {
          name: 'Grevena',
          countryId: 73,
        },
        {
          name: 'Kozani',
          countryId: 73,
        },
        {
          name: 'Imathia',
          countryId: 73,
        },
        {
          name: 'Thessaloniki',
          countryId: 73,
        },
        {
          name: 'Kavala',
          countryId: 73,
        },
        {
          name: 'Khalkidhiki',
          countryId: 73,
        },
        {
          name: 'Pieria',
          countryId: 73,
        },
        {
          name: 'Ioannina',
          countryId: 73,
        },
        {
          name: 'Thesprotia',
          countryId: 73,
        },
        {
          name: 'Preveza',
          countryId: 73,
        },
        {
          name: 'Arta',
          countryId: 73,
        },
        {
          name: 'Larisa',
          countryId: 73,
        },
        {
          name: 'Trikala',
          countryId: 73,
        },
        {
          name: 'Kardhitsa',
          countryId: 73,
        },
        {
          name: 'Magnisia',
          countryId: 73,
        },
        {
          name: 'Kerkira',
          countryId: 73,
        },
        {
          name: 'Levkas',
          countryId: 73,
        },
        {
          name: 'Kefallinia',
          countryId: 73,
        },
        {
          name: 'Zakinthos',
          countryId: 73,
        },
        {
          name: 'Fthiotis',
          countryId: 73,
        },
        {
          name: 'Evritania',
          countryId: 73,
        },
        {
          name: 'Aitolia kai Akarnania',
          countryId: 73,
        },
        {
          name: 'Fokis',
          countryId: 73,
        },
        {
          name: 'Voiotia',
          countryId: 73,
        },
        {
          name: 'Evvoia',
          countryId: 73,
        },
        {
          name: 'Attiki',
          countryId: 73,
        },
        {
          name: 'Argolis',
          countryId: 73,
        },
        {
          name: 'Korinthia',
          countryId: 73,
        },
        {
          name: 'Akhaia',
          countryId: 73,
        },
        {
          name: 'Ilia',
          countryId: 73,
        },
        {
          name: 'Messinia',
          countryId: 73,
        },
        {
          name: 'Arkadhia',
          countryId: 73,
        },
        {
          name: 'Lakonia',
          countryId: 73,
        },
        {
          name: 'Khania',
          countryId: 73,
        },
        {
          name: 'Rethimni',
          countryId: 73,
        },
        {
          name: 'Iraklion',
          countryId: 73,
        },
        {
          name: 'Lasithi',
          countryId: 73,
        },
        {
          name: 'Dhodhekanisos',
          countryId: 73,
        },
        {
          name: 'Samos',
          countryId: 73,
        },
        {
          name: 'Kikladhes',
          countryId: 73,
        },
        {
          name: 'Khios',
          countryId: 73,
        },
        {
          name: 'Lesvos',
          countryId: 73,
        },
        {
          name: 'Greenland',
          countryId: 74,
        },
        {
          name: 'Grande-Terre',
          countryId: 75,
        },
        {
          name: 'Basse-Terre',
          countryId: 75,
        },
        {
          name: 'Alta Verapaz',
          countryId: 76,
        },
        {
          name: 'Baja Verapaz',
          countryId: 76,
        },
        {
          name: 'Chimaltenango',
          countryId: 76,
        },
        {
          name: 'Chiquimula',
          countryId: 76,
        },
        {
          name: 'El Progreso',
          countryId: 76,
        },
        {
          name: 'Escuintla',
          countryId: 76,
        },
        {
          name: 'Guatemala',
          countryId: 76,
        },
        {
          name: 'Huehuetenango',
          countryId: 76,
        },
        {
          name: 'Izabal',
          countryId: 76,
        },
        {
          name: 'Jalapa',
          countryId: 76,
        },
        {
          name: 'Jutiapa',
          countryId: 76,
        },
        {
          name: 'Petén',
          countryId: 76,
        },
        {
          name: 'Quetzaltenango',
          countryId: 76,
        },
        {
          name: 'Quiché',
          countryId: 76,
        },
        {
          name: 'Retalhuleu',
          countryId: 76,
        },
        {
          name: 'Sacatepéquez',
          countryId: 76,
        },
        {
          name: 'San Marcos',
          countryId: 76,
        },
        {
          name: 'Santa Rosa',
          countryId: 76,
        },
        {
          name: 'Sololá',
          countryId: 76,
        },
        {
          name: 'Suchitepequez',
          countryId: 76,
        },
        {
          name: 'Totonicapán',
          countryId: 76,
        },
        {
          name: 'Zacapa',
          countryId: 76,
        },
        {
          name: 'St Peter Port',
          countryId: 77,
        },
        {
          name: 'Guinea',
          countryId: 78,
        },
        {
          name: 'Malabo',
          countryId: 79,
        },
        {
          name: 'Bissau',
          countryId: 80,
        },
        {
          name: 'Guyana',
          countryId: 81,
        },
        {
          name: 'Artibonite',
          countryId: 82,
        },
        {
          name: 'Grand&#039;Anse',
          countryId: 82,
        },
        {
          name: 'North West',
          countryId: 82,
        },
        {
          name: 'West',
          countryId: 82,
        },
        {
          name: 'South',
          countryId: 82,
        },
        {
          name: 'South East',
          countryId: 82,
        },
        {
          name: 'Tegucigalpa',
          countryId: 83,
        },
        {
          name: 'Hong Kong',
          countryId: 84,
        },
        {
          name: 'Bacs-Kiskun',
          countryId: 85,
        },
        {
          name: 'Baranya',
          countryId: 85,
        },
        {
          name: 'Bekes',
          countryId: 85,
        },
        {
          name: 'Borsod-Abauj-Zemplen',
          countryId: 85,
        },
        {
          name: 'Budapest',
          countryId: 85,
        },
        {
          name: 'Csongrad',
          countryId: 85,
        },
        {
          name: 'Debrecen',
          countryId: 85,
        },
        {
          name: 'Fejer',
          countryId: 85,
        },
        {
          name: 'Gyor-Moson-Sopron',
          countryId: 85,
        },
        {
          name: 'Hajdu-Bihar',
          countryId: 85,
        },
        {
          name: 'Heves',
          countryId: 85,
        },
        {
          name: 'Komarom-Esztergom',
          countryId: 85,
        },
        {
          name: 'Miskolc',
          countryId: 85,
        },
        {
          name: 'Nograd',
          countryId: 85,
        },
        {
          name: 'Pecs',
          countryId: 85,
        },
        {
          name: 'Pest',
          countryId: 85,
        },
        {
          name: 'Somogy',
          countryId: 85,
        },
        {
          name: 'Szabolcs-Szatmar-Bereg',
          countryId: 85,
        },
        {
          name: 'Szeged',
          countryId: 85,
        },
        {
          name: 'Jasz-Nagykun-Szolnok',
          countryId: 85,
        },
        {
          name: 'Tolna',
          countryId: 85,
        },
        {
          name: 'Vas',
          countryId: 85,
        },
        {
          name: 'Veszprem',
          countryId: 85,
        },
        {
          name: 'Zala',
          countryId: 85,
        },
        {
          name: 'Gyor',
          countryId: 85,
        },
        {
          name: 'Veszprem',
          countryId: 85,
        },
        {
          name: 'Bangala',
          countryId: 86,
        },
        {
          name: 'Chhattisgarh',
          countryId: 86,
        },
        {
          name: 'Karnataka',
          countryId: 86,
        },
        {
          name: 'Uttaranchal',
          countryId: 86,
        },
        {
          name: 'Andhara Pradesh',
          countryId: 86,
        },
        {
          name: 'Assam',
          countryId: 86,
        },
        {
          name: 'Bihar',
          countryId: 86,
        },
        {
          name: 'Gujarat',
          countryId: 86,
        },
        {
          name: 'Jammu and Kashmir',
          countryId: 86,
        },
        {
          name: 'Kerala',
          countryId: 86,
        },
        {
          name: 'Madhya Pradesh',
          countryId: 86,
        },
        {
          name: 'Manipur',
          countryId: 86,
        },
        {
          name: 'Maharashtra',
          countryId: 86,
        },
        {
          name: 'Megahalaya',
          countryId: 86,
        },
        {
          name: 'Orissa',
          countryId: 86,
        },
        {
          name: 'Punjab',
          countryId: 86,
        },
        {
          name: 'Pondisheri',
          countryId: 86,
        },
        {
          name: 'Rajasthan',
          countryId: 86,
        },
        {
          name: 'Tamil Nadu',
          countryId: 86,
        },
        {
          name: 'Tripura',
          countryId: 86,
        },
        {
          name: 'Uttar Pradesh',
          countryId: 86,
        },
        {
          name: 'Haryana',
          countryId: 86,
        },
        {
          name: 'Chandigarh',
          countryId: 86,
        },
        {
          name: 'India',
          countryId: 86,
        },
        {
          name: 'Delhi',
          countryId: 86,
        },
        {
          name: 'Indonesia',
          countryId: 87,
        },
        {
          name: 'Baghdad',
          countryId: 88,
        },
        {
          name: 'Basra',
          countryId: 88,
        },
        {
          name: 'Mosul',
          countryId: 88,
        },
        {
          name: 'Azarbayjan-e Khavari',
          countryId: 89,
        },
        {
          name: 'Esfahan',
          countryId: 89,
        },
        {
          name: 'Hamadan',
          countryId: 89,
        },
        {
          name: 'Kordestan',
          countryId: 89,
        },
        {
          name: 'Markazi',
          countryId: 89,
        },
        {
          name: 'Sistan-e Baluches',
          countryId: 89,
        },
        {
          name: 'Yazd',
          countryId: 89,
        },
        {
          name: 'Kerman',
          countryId: 89,
        },
        {
          name: 'Kermanshakhan',
          countryId: 89,
        },
        {
          name: 'Mazenderan',
          countryId: 89,
        },
        {
          name: 'Tehran',
          countryId: 89,
        },
        {
          name: 'Fars',
          countryId: 89,
        },
        {
          name: 'Horasan',
          countryId: 89,
        },
        {
          name: 'Husistan',
          countryId: 89,
        },
        {
          name: 'Dublin',
          countryId: 90,
        },
        {
          name: 'Galway',
          countryId: 90,
        },
        {
          name: 'Kildare',
          countryId: 90,
        },
        {
          name: 'Leitrim',
          countryId: 90,
        },
        {
          name: 'Limerick',
          countryId: 90,
        },
        {
          name: 'Mayo',
          countryId: 90,
        },
        {
          name: 'Meath',
          countryId: 90,
        },
        {
          name: 'Carlow',
          countryId: 90,
        },
        {
          name: 'Kilkenny',
          countryId: 90,
        },
        {
          name: 'Laois',
          countryId: 90,
        },
        {
          name: 'Longford',
          countryId: 90,
        },
        {
          name: 'Louth',
          countryId: 90,
        },
        {
          name: 'Offaly',
          countryId: 90,
        },
        {
          name: 'Westmeath',
          countryId: 90,
        },
        {
          name: 'Wexford',
          countryId: 90,
        },
        {
          name: 'Wicklow',
          countryId: 90,
        },
        {
          name: 'Roscommon',
          countryId: 90,
        },
        {
          name: 'Sligo',
          countryId: 90,
        },
        {
          name: 'Clare',
          countryId: 90,
        },
        {
          name: 'Cork',
          countryId: 90,
        },
        {
          name: 'Kerry',
          countryId: 90,
        },
        {
          name: 'Tipperary',
          countryId: 90,
        },
        {
          name: 'Waterford',
          countryId: 90,
        },
        {
          name: 'Cavan',
          countryId: 90,
        },
        {
          name: 'Donegal',
          countryId: 90,
        },
        {
          name: 'Monaghan',
          countryId: 90,
        },
        {
          name: 'Isle of Man',
          countryId: 91,
        },
        {
          name: 'Kingston',
          countryId: 92,
        },
        {
          name: 'Akureyri',
          countryId: 93,
        },
        {
          name: 'Arnessysla',
          countryId: 93,
        },
        {
          name: 'Austur-Bardastrandarsysla',
          countryId: 93,
        },
        {
          name: 'Austur-Hunavatnssysla',
          countryId: 93,
        },
        {
          name: 'Austur-Skaftafellssysla',
          countryId: 93,
        },
        {
          name: 'Borgarfjardarsysla',
          countryId: 93,
        },
        {
          name: 'Dalasysla',
          countryId: 93,
        },
        {
          name: 'Eyjafjardarsysla',
          countryId: 93,
        },
        {
          name: 'Gullbringusysla',
          countryId: 93,
        },
        {
          name: 'Hafnarfjordur',
          countryId: 93,
        },
        {
          name: 'Kjosarsysla',
          countryId: 93,
        },
        {
          name: 'Kopavogur',
          countryId: 93,
        },
        {
          name: 'Myrasysla',
          countryId: 93,
        },
        {
          name: 'Neskaupstadur',
          countryId: 93,
        },
        {
          name: 'Nordur-Isafjardarsysla',
          countryId: 93,
        },
        {
          name: 'Nordur-Mulasysla',
          countryId: 93,
        },
        {
          name: 'Nordur-Tingeyjarsysla',
          countryId: 93,
        },
        {
          name: 'Olafsfjordur',
          countryId: 93,
        },
        {
          name: 'Rangarvallasysla',
          countryId: 93,
        },
        {
          name: 'Reykjavik',
          countryId: 93,
        },
        {
          name: 'Saudarkrokur',
          countryId: 93,
        },
        {
          name: 'Seydisfjordur',
          countryId: 93,
        },
        {
          name: 'Skagafjardarsysla',
          countryId: 93,
        },
        {
          name: 'Snafellsnes- og Hnappadalssysla',
          countryId: 93,
        },
        {
          name: 'Strandasysla',
          countryId: 93,
        },
        {
          name: 'Sudur-Mulasysla',
          countryId: 93,
        },
        {
          name: 'Sudur-Tingeyjarsysla',
          countryId: 93,
        },
        {
          name: 'Vestmannaeyjar',
          countryId: 93,
        },
        {
          name: 'Vestur-Bardastrandarsysla',
          countryId: 93,
        },
        {
          name: 'Vestur-Isafjardarsysla',
          countryId: 93,
        },
        {
          name: 'Vestur-Skaftafellssysla',
          countryId: 93,
        },
        {
          name: 'Hamilton',
          countryId: 94,
        },
        {
          name: 'Avarua',
          countryId: 95,
        },
        {
          name: 'Torshavn',
          countryId: 96,
        },
        {
          name: 'Adamstown',
          countryId: 97,
        },
        {
          name: 'Solomon Islands',
          countryId: 98,
        },
        {
          name: 'Grand Turk',
          countryId: 99,
        },
        {
          name: 'Road Town',
          countryId: 100,
        },
        {
          name: 'Southern District',
          countryId: 101,
        },
        {
          name: 'Central District',
          countryId: 101,
        },
        {
          name: 'Northern District',
          countryId: 101,
        },
        {
          name: 'Haifa',
          countryId: 101,
        },
        {
          name: 'Tel Aviv',
          countryId: 101,
        },
        {
          name: 'Jerusalem',
          countryId: 101,
        },
        {
          name: 'Ramat Hagolan',
          countryId: 101,
        },
        {
          name: 'Piemonte - Torino',
          countryId: 102,
        },
        {
          name: 'Piemonte - Alessandria',
          countryId: 102,
        },
        {
          name: 'Piemonte - Asti',
          countryId: 102,
        },
        {
          name: 'Piemonte - Biella',
          countryId: 102,
        },
        {
          name: 'Piemonte - Cuneo',
          countryId: 102,
        },
        {
          name: 'Piemonte - Novara',
          countryId: 102,
        },
        {
          name: 'Piemonte - Verbania',
          countryId: 102,
        },
        {
          name: 'Piemonte - Vercelli',
          countryId: 102,
        },
        {
          name: 'Valle d&#039;Aosta - Aosta',
          countryId: 102,
        },
        {
          name: 'Lombardia - Milano',
          countryId: 102,
        },
        {
          name: 'Lombardia - Bergamo',
          countryId: 102,
        },
        {
          name: 'Lombardia - Brescia',
          countryId: 102,
        },
        {
          name: 'Lombardia - Como',
          countryId: 102,
        },
        {
          name: 'Lombardia - Cremona',
          countryId: 102,
        },
        {
          name: 'Lombardia - Lecco',
          countryId: 102,
        },
        {
          name: 'Lombardia - Lodi',
          countryId: 102,
        },
        {
          name: 'Lombardia - Mantova',
          countryId: 102,
        },
        {
          name: 'Lombardia - Pavia',
          countryId: 102,
        },
        {
          name: 'Lombardia - Sondrio',
          countryId: 102,
        },
        {
          name: 'Lombardia - Varese',
          countryId: 102,
        },
        {
          name: 'Trentino Alto Adige - Trento',
          countryId: 102,
        },
        {
          name: 'Trentino Alto Adige - Bolzano',
          countryId: 102,
        },
        {
          name: 'Veneto - Venezia',
          countryId: 102,
        },
        {
          name: 'Veneto - Belluno',
          countryId: 102,
        },
        {
          name: 'Veneto - Padova',
          countryId: 102,
        },
        {
          name: 'Veneto - Rovigo',
          countryId: 102,
        },
        {
          name: 'Veneto - Treviso',
          countryId: 102,
        },
        {
          name: 'Veneto - Verona',
          countryId: 102,
        },
        {
          name: 'Veneto - Vicenza',
          countryId: 102,
        },
        {
          name: 'Friuli Venezia Giulia - Trieste',
          countryId: 102,
        },
        {
          name: 'Friuli Venezia Giulia - Gorizia',
          countryId: 102,
        },
        {
          name: 'Friuli Venezia Giulia - Pordenone',
          countryId: 102,
        },
        {
          name: 'Friuli Venezia Giulia - Udine',
          countryId: 102,
        },
        {
          name: 'Liguria - Genova',
          countryId: 102,
        },
        {
          name: 'Liguria - Imperia',
          countryId: 102,
        },
        {
          name: 'Liguria - La Spezia',
          countryId: 102,
        },
        {
          name: 'Liguria - Savona',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Bologna',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Ferrara',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Forlì-Cesena',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Modena',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Parma',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Piacenza',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Ravenna',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Reggio Emilia',
          countryId: 102,
        },
        {
          name: 'Emilia Romagna - Rimini',
          countryId: 102,
        },
        {
          name: 'Toscana - Firenze',
          countryId: 102,
        },
        {
          name: 'Toscana - Arezzo',
          countryId: 102,
        },
        {
          name: 'Toscana - Grosseto',
          countryId: 102,
        },
        {
          name: 'Toscana - Livorno',
          countryId: 102,
        },
        {
          name: 'Toscana - Lucca',
          countryId: 102,
        },
        {
          name: 'Toscana - Massa Carrara',
          countryId: 102,
        },
        {
          name: 'Toscana - Pisa',
          countryId: 102,
        },
        {
          name: 'Toscana - Pistoia',
          countryId: 102,
        },
        {
          name: 'Toscana - Prato',
          countryId: 102,
        },
        {
          name: 'Toscana - Siena',
          countryId: 102,
        },
        {
          name: 'Umbria - Perugia',
          countryId: 102,
        },
        {
          name: 'Umbria - Terni',
          countryId: 102,
        },
        {
          name: 'Marche - Ancona',
          countryId: 102,
        },
        {
          name: 'Marche - Ascoli Piceno',
          countryId: 102,
        },
        {
          name: 'Marche - Macerata',
          countryId: 102,
        },
        {
          name: 'Marche - Pesaro - Urbino',
          countryId: 102,
        },
        {
          name: 'Lazio - Roma',
          countryId: 102,
        },
        {
          name: 'Lazio - Frosinone',
          countryId: 102,
        },
        {
          name: 'Lazio - Latina',
          countryId: 102,
        },
        {
          name: 'Lazio - Rieti',
          countryId: 102,
        },
        {
          name: 'Lazio - Viterbo',
          countryId: 102,
        },
        {
          name: 'Abruzzo - L´Aquila',
          countryId: 102,
        },
        {
          name: 'Abruzzo - Chieti',
          countryId: 102,
        },
        {
          name: 'Abruzzo - Pescara',
          countryId: 102,
        },
        {
          name: 'Abruzzo - Teramo',
          countryId: 102,
        },
        {
          name: 'Molise - Campobasso',
          countryId: 102,
        },
        {
          name: 'Molise - Isernia',
          countryId: 102,
        },
        {
          name: 'Campania - Napoli',
          countryId: 102,
        },
        {
          name: 'Campania - Avellino',
          countryId: 102,
        },
        {
          name: 'Campania - Benevento',
          countryId: 102,
        },
        {
          name: 'Campania - Caserta',
          countryId: 102,
        },
        {
          name: 'Campania - Salerno',
          countryId: 102,
        },
        {
          name: 'Puglia - Bari',
          countryId: 102,
        },
        {
          name: 'Puglia - Brindisi',
          countryId: 102,
        },
        {
          name: 'Puglia - Foggia',
          countryId: 102,
        },
        {
          name: 'Puglia - Lecce',
          countryId: 102,
        },
        {
          name: 'Puglia - Taranto',
          countryId: 102,
        },
        {
          name: 'Basilicata - Potenza',
          countryId: 102,
        },
        {
          name: 'Basilicata - Matera',
          countryId: 102,
        },
        {
          name: 'Calabria - Catanzaro',
          countryId: 102,
        },
        {
          name: 'Calabria - Cosenza',
          countryId: 102,
        },
        {
          name: 'Calabria - Crotone',
          countryId: 102,
        },
        {
          name: 'Calabria - Reggio Calabria',
          countryId: 102,
        },
        {
          name: 'Calabria - Vibo Valentia',
          countryId: 102,
        },
        {
          name: 'Sicilia - Palermo',
          countryId: 102,
        },
        {
          name: 'Sicilia - Agrigento',
          countryId: 102,
        },
        {
          name: 'Sicilia - Caltanissetta',
          countryId: 102,
        },
        {
          name: 'Sicilia - Catania',
          countryId: 102,
        },
        {
          name: 'Sicilia - Enna',
          countryId: 102,
        },
        {
          name: 'Sicilia - Messina',
          countryId: 102,
        },
        {
          name: 'Sicilia - Ragusa',
          countryId: 102,
        },
        {
          name: 'Sicilia - Siracusa',
          countryId: 102,
        },
        {
          name: 'Sicilia - Trapani',
          countryId: 102,
        },
        {
          name: 'Sardegna - Cagliari',
          countryId: 102,
        },
        {
          name: 'Sardegna - Nuoro',
          countryId: 102,
        },
        {
          name: 'Sardegna - Oristano',
          countryId: 102,
        },
        {
          name: 'Sardegna - Sassari',
          countryId: 102,
        },
        {
          name: 'Jamaica',
          countryId: 103,
        },
        {
          name: 'Aichi',
          countryId: 104,
        },
        {
          name: 'Akita',
          countryId: 104,
        },
        {
          name: 'Aomori',
          countryId: 104,
        },
        {
          name: 'Wakayama',
          countryId: 104,
        },
        {
          name: 'Gifu',
          countryId: 104,
        },
        {
          name: 'Gunma',
          countryId: 104,
        },
        {
          name: 'Ibaraki',
          countryId: 104,
        },
        {
          name: 'Iwate',
          countryId: 104,
        },
        {
          name: 'Ishikawa',
          countryId: 104,
        },
        {
          name: 'Kagawa',
          countryId: 104,
        },
        {
          name: 'Kagoshima',
          countryId: 104,
        },
        {
          name: 'Kanagawa',
          countryId: 104,
        },
        {
          name: 'Kyoto',
          countryId: 104,
        },
        {
          name: 'Kochi',
          countryId: 104,
        },
        {
          name: 'Kumamoto',
          countryId: 104,
        },
        {
          name: 'Mie',
          countryId: 104,
        },
        {
          name: 'Miyagi',
          countryId: 104,
        },
        {
          name: 'Miyazaki',
          countryId: 104,
        },
        {
          name: 'Nagano',
          countryId: 104,
        },
        {
          name: 'Nagasaki',
          countryId: 104,
        },
        {
          name: 'Nara',
          countryId: 104,
        },
        {
          name: 'Niigata',
          countryId: 104,
        },
        {
          name: 'Okayama',
          countryId: 104,
        },
        {
          name: 'Okinawa',
          countryId: 104,
        },
        {
          name: 'Osaka',
          countryId: 104,
        },
        {
          name: 'Saga',
          countryId: 104,
        },
        {
          name: 'Saitama',
          countryId: 104,
        },
        {
          name: 'Shiga',
          countryId: 104,
        },
        {
          name: 'Shizuoka',
          countryId: 104,
        },
        {
          name: 'Shimane',
          countryId: 104,
        },
        {
          name: 'Tiba',
          countryId: 104,
        },
        {
          name: 'Tokyo',
          countryId: 104,
        },
        {
          name: 'Tokushima',
          countryId: 104,
        },
        {
          name: 'Tochigi',
          countryId: 104,
        },
        {
          name: 'Tottori',
          countryId: 104,
        },
        {
          name: 'Toyama',
          countryId: 104,
        },
        {
          name: 'Fukui',
          countryId: 104,
        },
        {
          name: 'Fukuoka',
          countryId: 104,
        },
        {
          name: 'Fukushima',
          countryId: 104,
        },
        {
          name: 'Hiroshima',
          countryId: 104,
        },
        {
          name: 'Hokkaido',
          countryId: 104,
        },
        {
          name: 'Hyogo',
          countryId: 104,
        },
        {
          name: 'Yoshimi',
          countryId: 104,
        },
        {
          name: 'Yamagata',
          countryId: 104,
        },
        {
          name: 'Yamaguchi',
          countryId: 104,
        },
        {
          name: 'Yamanashi',
          countryId: 104,
        },
        {
          name: 'Chiba',
          countryId: 104,
        },
        {
          name: 'Ehime',
          countryId: 104,
        },
        {
          name: 'Oita',
          countryId: 104,
        },
        {
          name: 'Saint Helier',
          countryId: 105,
        },
        {
          name: 'Jordan',
          countryId: 106,
        },
        {
          name: 'Aktyubinskaya obl.',
          countryId: 107,
        },
        {
          name: 'Alma-Atinskaya obl.',
          countryId: 107,
        },
        {
          name: 'Vostochno-Kazahstanskaya obl.',
          countryId: 107,
        },
        {
          name: 'Gurevskaya obl.',
          countryId: 107,
        },
        {
          name: 'Zhambylskaya obl. (Dzhambulskaya obl.)',
          countryId: 107,
        },
        {
          name: 'Dzhezkazganskaya obl.',
          countryId: 107,
        },
        {
          name: 'Karagandinskaya obl.',
          countryId: 107,
        },
        {
          name: 'Kzyl-Ordinskaya obl.',
          countryId: 107,
        },
        {
          name: 'Kokchetavskaya obl.',
          countryId: 107,
        },
        {
          name: 'Kustanaiskaya obl.',
          countryId: 107,
        },
        {
          name: 'Mangystauskaya (Mangyshlakskaya obl.)',
          countryId: 107,
        },
        {
          name: 'Pavlodarskaya obl.',
          countryId: 107,
        },
        {
          name: 'Severo-Kazahstanskaya obl.',
          countryId: 107,
        },
        {
          name: 'Taldy-Kurganskaya obl.',
          countryId: 107,
        },
        {
          name: 'Turgaiskaya obl.',
          countryId: 107,
        },
        {
          name: 'Akmolinskaya obl. (Tselinogradskaya obl.)',
          countryId: 107,
        },
        {
          name: 'Chimkentskaya obl.',
          countryId: 107,
        },
        {
          name: 'Kazahstan',
          countryId: 107,
        },
        {
          name: 'Zapadno-Kazahstanskaya obl.',
          countryId: 107,
        },
        {
          name: 'Central',
          countryId: 108,
        },
        {
          name: 'Coast',
          countryId: 108,
        },
        {
          name: 'Eastern',
          countryId: 108,
        },
        {
          name: 'Nairobi Area',
          countryId: 108,
        },
        {
          name: 'North-Eastern',
          countryId: 108,
        },
        {
          name: 'Nyanza',
          countryId: 108,
        },
        {
          name: 'Rift Valley',
          countryId: 108,
        },
        {
          name: 'Western',
          countryId: 108,
        },
        {
          name: 'Issik Kulskaya Region',
          countryId: 109,
        },
        {
          name: 'Kyrgyzstan',
          countryId: 109,
        },
        {
          name: 'Narinskaya Region',
          countryId: 109,
        },
        {
          name: 'Oshskaya Region',
          countryId: 109,
        },
        {
          name: 'Tallaskaya Region',
          countryId: 109,
        },
        {
          name: 'Gilbert Islands',
          countryId: 110,
        },
        {
          name: 'Line Islands',
          countryId: 110,
        },
        {
          name: 'Phoenix Islands',
          countryId: 110,
        },
        {
          name: 'al-Jahra',
          countryId: 111,
        },
        {
          name: 'al-Kuwait',
          countryId: 111,
        },
        {
          name: 'Laos',
          countryId: 112,
        },
        {
          name: 'Lesotho',
          countryId: 113,
        },
        {
          name: 'Latviya',
          countryId: 114,
        },
        {
          name: 'Beirut',
          countryId: 115,
        },
        {
          name: 'Liberia',
          countryId: 116,
        },
        {
          name: 'Tarabulus',
          countryId: 117,
        },
        {
          name: 'Bengasi',
          countryId: 117,
        },
        {
          name: 'Balzers',
          countryId: 118,
        },
        {
          name: 'Eschen',
          countryId: 118,
        },
        {
          name: 'Gamprin',
          countryId: 118,
        },
        {
          name: 'Mauren',
          countryId: 118,
        },
        {
          name: 'Planken',
          countryId: 118,
        },
        {
          name: 'Ruggell',
          countryId: 118,
        },
        {
          name: 'Schaan',
          countryId: 118,
        },
        {
          name: 'Schellenberg',
          countryId: 118,
        },
        {
          name: 'Triesen',
          countryId: 118,
        },
        {
          name: 'Triesenberg',
          countryId: 118,
        },
        {
          name: 'Vaduz',
          countryId: 118,
        },
        {
          name: 'Litva',
          countryId: 119,
        },
        {
          name: 'Diekirch',
          countryId: 120,
        },
        {
          name: 'Grevenmacher',
          countryId: 120,
        },
        {
          name: 'Luxembourg',
          countryId: 120,
        },
        {
          name: 'Aracinovo',
          countryId: 121,
        },
        {
          name: 'Bac',
          countryId: 121,
        },
        {
          name: 'Belcista',
          countryId: 121,
        },
        {
          name: 'Berovo',
          countryId: 121,
        },
        {
          name: 'Bistrica',
          countryId: 121,
        },
        {
          name: 'Bitola',
          countryId: 121,
        },
        {
          name: 'Blatec',
          countryId: 121,
        },
        {
          name: 'Bogdanci',
          countryId: 121,
        },
        {
          name: 'Bogomila',
          countryId: 121,
        },
        {
          name: 'Bogovinje',
          countryId: 121,
        },
        {
          name: 'Bosilovo',
          countryId: 121,
        },
        {
          name: 'Cair',
          countryId: 121,
        },
        {
          name: 'Capari',
          countryId: 121,
        },
        {
          name: 'Caska',
          countryId: 121,
        },
        {
          name: 'Cegrane',
          countryId: 121,
        },
        {
          name: 'Centar Zupa',
          countryId: 121,
        },
        {
          name: 'Debar',
          countryId: 121,
        },
        {
          name: 'Delcevo',
          countryId: 121,
        },
        {
          name: 'Demir Hisar',
          countryId: 121,
        },
        {
          name: 'Demir Kapija',
          countryId: 121,
        },
        {
          name: 'Dorce Petrov',
          countryId: 121,
        },
        {
          name: 'Gazi Baba',
          countryId: 121,
        },
        {
          name: 'Gevgelija',
          countryId: 121,
        },
        {
          name: 'Gostivar',
          countryId: 121,
        },
        {
          name: 'Gradsko',
          countryId: 121,
        },
        {
          name: 'Jegunovce',
          countryId: 121,
        },
        {
          name: 'Kamenjane',
          countryId: 121,
        },
        {
          name: 'Karpos',
          countryId: 121,
        },
        {
          name: 'Kavadarci',
          countryId: 121,
        },
        {
          name: 'Kicevo',
          countryId: 121,
        },
        {
          name: 'Kisela Voda',
          countryId: 121,
        },
        {
          name: 'Klecevce',
          countryId: 121,
        },
        {
          name: 'Kocani',
          countryId: 121,
        },
        {
          name: 'Kondovo',
          countryId: 121,
        },
        {
          name: 'Kratovo',
          countryId: 121,
        },
        {
          name: 'Krivogastani',
          countryId: 121,
        },
        {
          name: 'Krusevo',
          countryId: 121,
        },
        {
          name: 'Kumanovo',
          countryId: 121,
        },
        {
          name: 'Labunista',
          countryId: 121,
        },
        {
          name: 'Lipkovo',
          countryId: 121,
        },
        {
          name: 'Makedonska Kamenica',
          countryId: 121,
        },
        {
          name: 'Makedonski Brod',
          countryId: 121,
        },
        {
          name: 'Murtino',
          countryId: 121,
        },
        {
          name: 'Negotino',
          countryId: 121,
        },
        {
          name: 'Novo Selo',
          countryId: 121,
        },
        {
          name: 'Ohrid',
          countryId: 121,
        },
        {
          name: 'Orizari',
          countryId: 121,
        },
        {
          name: 'Petrovec',
          countryId: 121,
        },
        {
          name: 'Prilep',
          countryId: 121,
        },
        {
          name: 'Probistip',
          countryId: 121,
        },
        {
          name: 'Radovis',
          countryId: 121,
        },
        {
          name: 'Resen',
          countryId: 121,
        },
        {
          name: 'Rosoman',
          countryId: 121,
        },
        {
          name: 'Saraj',
          countryId: 121,
        },
        {
          name: 'Srbinovo',
          countryId: 121,
        },
        {
          name: 'Star Dojran',
          countryId: 121,
        },
        {
          name: 'Stip',
          countryId: 121,
        },
        {
          name: 'Struga',
          countryId: 121,
        },
        {
          name: 'Strumica',
          countryId: 121,
        },
        {
          name: 'Studenicani',
          countryId: 121,
        },
        {
          name: 'Suto Orizari',
          countryId: 121,
        },
        {
          name: 'Sveti Nikole',
          countryId: 121,
        },
        {
          name: 'Tearce',
          countryId: 121,
        },
        {
          name: 'Tetovo',
          countryId: 121,
        },
        {
          name: 'Valandovo',
          countryId: 121,
        },
        {
          name: 'Veles',
          countryId: 121,
        },
        {
          name: 'Vevcani',
          countryId: 121,
        },
        {
          name: 'Vinica',
          countryId: 121,
        },
        {
          name: 'Vrapciste',
          countryId: 121,
        },
        {
          name: 'Zelino',
          countryId: 121,
        },
        {
          name: 'Zrnovci',
          countryId: 121,
        },
        {
          name: 'Skopje',
          countryId: 121,
        },
        {
          name: 'Madagascar',
          countryId: 122,
        },
        {
          name: 'Malaysia',
          countryId: 123,
        },
        {
          name: 'Malawi',
          countryId: 124,
        },
        {
          name: 'Mali',
          countryId: 125,
        },
        {
          name: 'Malta',
          countryId: 126,
        },
        {
          name: 'Morocco',
          countryId: 127,
        },
        {
          name: 'Tangier',
          countryId: 127,
        },
        {
          name: 'Fort-de-France',
          countryId: 128,
        },
        {
          name: 'Mauritius',
          countryId: 129,
        },
        {
          name: 'Mauritania',
          countryId: 130,
        },
        {
          name: 'Aguascalientes',
          countryId: 131,
        },
        {
          name: 'Baja California',
          countryId: 131,
        },
        {
          name: 'Baja California Sur',
          countryId: 131,
        },
        {
          name: 'Campeche',
          countryId: 131,
        },
        {
          name: 'Chiapas',
          countryId: 131,
        },
        {
          name: 'Chihuahua',
          countryId: 131,
        },
        {
          name: 'Coahuila de Zaragoza',
          countryId: 131,
        },
        {
          name: 'Colima',
          countryId: 131,
        },
        {
          name: 'Distrito Federal',
          countryId: 131,
        },
        {
          name: 'Durango',
          countryId: 131,
        },
        {
          name: 'Guanajuato',
          countryId: 131,
        },
        {
          name: 'Guerrero',
          countryId: 131,
        },
        {
          name: 'Hidalgo',
          countryId: 131,
        },
        {
          name: 'Jalisco',
          countryId: 131,
        },
        {
          name: 'México',
          countryId: 131,
        },
        {
          name: 'Michoacán de Ocampo',
          countryId: 131,
        },
        {
          name: 'Morelos',
          countryId: 131,
        },
        {
          name: 'Nayarit',
          countryId: 131,
        },
        {
          name: 'Nuevo León',
          countryId: 131,
        },
        {
          name: 'Oaxaca',
          countryId: 131,
        },
        {
          name: 'Puebla',
          countryId: 131,
        },
        {
          name: 'Querétaro de Arteaga',
          countryId: 131,
        },
        {
          name: 'Quintana Roo',
          countryId: 131,
        },
        {
          name: 'San Luis Potosí',
          countryId: 131,
        },
        {
          name: 'Sinaloa',
          countryId: 131,
        },
        {
          name: 'Sonora',
          countryId: 131,
        },
        {
          name: 'Tabasco',
          countryId: 131,
        },
        {
          name: 'Tamaulipas',
          countryId: 131,
        },
        {
          name: 'Tlaxcala',
          countryId: 131,
        },
        {
          name: 'Veracruz-Llave',
          countryId: 131,
        },
        {
          name: 'Yucatán',
          countryId: 131,
        },
        {
          name: 'Zacatecas',
          countryId: 131,
        },
        {
          name: 'Moldova',
          countryId: 132,
        },
        {
          name: 'La Condamine',
          countryId: 133,
        },
        {
          name: 'Monaco',
          countryId: 133,
        },
        {
          name: 'Monte-Carlo',
          countryId: 133,
        },
        {
          name: 'Ulan Bator',
          countryId: 134,
        },
        {
          name: 'Mozambique',
          countryId: 135,
        },
        {
          name: 'Namibia',
          countryId: 136,
        },
        {
          name: 'Nauru',
          countryId: 137,
        },
        {
          name: 'Nepal',
          countryId: 138,
        },
        {
          name: 'Boaco',
          countryId: 139,
        },
        {
          name: 'Carazo',
          countryId: 139,
        },
        {
          name: 'Chinandega',
          countryId: 139,
        },
        {
          name: 'Chontales',
          countryId: 139,
        },
        {
          name: 'Estelí',
          countryId: 139,
        },
        {
          name: 'Granada',
          countryId: 139,
        },
        {
          name: 'Jinotega',
          countryId: 139,
        },
        {
          name: 'León',
          countryId: 139,
        },
        {
          name: 'Madriz',
          countryId: 139,
        },
        {
          name: 'Managua',
          countryId: 139,
        },
        {
          name: 'Masaya',
          countryId: 139,
        },
        {
          name: 'Matagalpa',
          countryId: 139,
        },
        {
          name: 'Nueva Segovia',
          countryId: 139,
        },
        {
          name: 'Rio San Juan',
          countryId: 139,
        },
        {
          name: 'Rivas',
          countryId: 139,
        },
        {
          name: 'Zelaya',
          countryId: 139,
        },
        {
          name: 'Niger',
          countryId: 140,
        },
        {
          name: 'Nigeria',
          countryId: 141,
        },
        {
          name: 'Akershus',
          countryId: 142,
        },
        {
          name: 'Aust-Agder',
          countryId: 142,
        },
        {
          name: 'Buskerud',
          countryId: 142,
        },
        {
          name: 'Finnmark',
          countryId: 142,
        },
        {
          name: 'Hedmark',
          countryId: 142,
        },
        {
          name: 'Hordaland',
          countryId: 142,
        },
        {
          name: 'More og Romsdal',
          countryId: 142,
        },
        {
          name: 'Nordland',
          countryId: 142,
        },
        {
          name: 'Nord-Trondelag',
          countryId: 142,
        },
        {
          name: 'Oppland',
          countryId: 142,
        },
        {
          name: 'Oslo',
          countryId: 142,
        },
        {
          name: 'Ostfold',
          countryId: 142,
        },
        {
          name: 'Rogaland',
          countryId: 142,
        },
        {
          name: 'Sogn og Fjordane',
          countryId: 142,
        },
        {
          name: 'Sor-Trondelag',
          countryId: 142,
        },
        {
          name: 'Telemark',
          countryId: 142,
        },
        {
          name: 'Troms',
          countryId: 142,
        },
        {
          name: 'Vest-Agder',
          countryId: 142,
        },
        {
          name: 'Vestfold',
          countryId: 142,
        },
        {
          name: 'Noumea',
          countryId: 143,
        },
        {
          name: 'Auckland',
          countryId: 144,
        },
        {
          name: 'Bay of Plenty',
          countryId: 144,
        },
        {
          name: 'Canterbury',
          countryId: 144,
        },
        {
          name: 'Gisborne',
          countryId: 144,
        },
        {
          name: 'Hawke&#039;s Bay',
          countryId: 144,
        },
        {
          name: 'Manawatu-Wanganui',
          countryId: 144,
        },
        {
          name: 'Marlborough',
          countryId: 144,
        },
        {
          name: 'Nelson',
          countryId: 144,
        },
        {
          name: 'Northland',
          countryId: 144,
        },
        {
          name: 'Otago',
          countryId: 144,
        },
        {
          name: 'Southland',
          countryId: 144,
        },
        {
          name: 'Taranaki',
          countryId: 144,
        },
        {
          name: 'Tasman',
          countryId: 144,
        },
        {
          name: 'Waikato',
          countryId: 144,
        },
        {
          name: 'Wellington',
          countryId: 144,
        },
        {
          name: 'West Coast',
          countryId: 144,
        },
        {
          name: 'Oman',
          countryId: 145,
        },
        {
          name: 'Drenthe',
          countryId: 146,
        },
        {
          name: 'Friesland',
          countryId: 146,
        },
        {
          name: 'Gelderland',
          countryId: 146,
        },
        {
          name: 'Groningen',
          countryId: 146,
        },
        {
          name: 'Limburg',
          countryId: 146,
        },
        {
          name: 'Noord-Brabant',
          countryId: 146,
        },
        {
          name: 'Noord-Holland',
          countryId: 146,
        },
        {
          name: 'Utrecht',
          countryId: 146,
        },
        {
          name: 'Zeeland',
          countryId: 146,
        },
        {
          name: 'Zuid-Holland',
          countryId: 146,
        },
        {
          name: 'Overijssel',
          countryId: 146,
        },
        {
          name: 'Flevoland',
          countryId: 146,
        },
        {
          name: 'Pakistan',
          countryId: 147,
        },
        {
          name: 'Bocas del Toro',
          countryId: 148,
        },
        {
          name: 'Chiriquí',
          countryId: 148,
        },
        {
          name: 'Coclé',
          countryId: 148,
        },
        {
          name: 'Colón',
          countryId: 148,
        },
        {
          name: 'Darién',
          countryId: 148,
        },
        {
          name: 'Herrera',
          countryId: 148,
        },
        {
          name: 'Los Santos',
          countryId: 148,
        },
        {
          name: 'Panamá',
          countryId: 148,
        },
        {
          name: 'San Blas',
          countryId: 148,
        },
        {
          name: 'Veraguas',
          countryId: 148,
        },
        {
          name: 'Papua New Guinea',
          countryId: 149,
        },
        {
          name: 'Alto Paraná',
          countryId: 150,
        },
        {
          name: 'Amambay',
          countryId: 150,
        },
        {
          name: 'Boquerón',
          countryId: 150,
        },
        {
          name: 'Caaguaz&uacute;',
          countryId: 150,
        },
        {
          name: 'Caazapá',
          countryId: 150,
        },
        {
          name: 'Central',
          countryId: 150,
        },
        {
          name: 'Concepción',
          countryId: 150,
        },
        {
          name: 'Cordillera',
          countryId: 150,
        },
        {
          name: 'Guairá',
          countryId: 150,
        },
        {
          name: 'Itap&uacute;a',
          countryId: 150,
        },
        {
          name: 'Misiones',
          countryId: 150,
        },
        {
          name: 'Neembuc&uacute;',
          countryId: 150,
        },
        {
          name: 'Paraguarí',
          countryId: 150,
        },
        {
          name: 'Presidente Hayes',
          countryId: 150,
        },
        {
          name: 'San Pedro',
          countryId: 150,
        },
        {
          name: 'Alto Paraguay',
          countryId: 150,
        },
        {
          name: 'Canindey&uacute;',
          countryId: 150,
        },
        {
          name: 'Chaco',
          countryId: 150,
        },
        {
          name: 'Amazonas',
          countryId: 151,
        },
        {
          name: 'Ancash',
          countryId: 151,
        },
        {
          name: 'Apurímac',
          countryId: 151,
        },
        {
          name: 'Arequipa',
          countryId: 151,
        },
        {
          name: 'Ayacucho',
          countryId: 151,
        },
        {
          name: 'Cajamarca',
          countryId: 151,
        },
        {
          name: 'Callao',
          countryId: 151,
        },
        {
          name: 'Cusco',
          countryId: 151,
        },
        {
          name: 'Huancavelica',
          countryId: 151,
        },
        {
          name: 'Huánuco',
          countryId: 151,
        },
        {
          name: 'Ica',
          countryId: 151,
        },
        {
          name: 'Junín',
          countryId: 151,
        },
        {
          name: 'La Libertad',
          countryId: 151,
        },
        {
          name: 'Lambayeque',
          countryId: 151,
        },
        {
          name: 'Lima',
          countryId: 151,
        },
        {
          name: 'Loreto',
          countryId: 151,
        },
        {
          name: 'Madre de Dios',
          countryId: 151,
        },
        {
          name: 'Moquegua',
          countryId: 151,
        },
        {
          name: 'Pasco',
          countryId: 151,
        },
        {
          name: 'Piura',
          countryId: 151,
        },
        {
          name: 'Puno',
          countryId: 151,
        },
        {
          name: 'San Martín',
          countryId: 151,
        },
        {
          name: 'Tacna',
          countryId: 151,
        },
        {
          name: 'Tumbes',
          countryId: 151,
        },
        {
          name: 'Ucayali',
          countryId: 151,
        },
        {
          name: 'Papeete',
          countryId: 152,
        },
        {
          name: 'Biala Podlaska',
          countryId: 153,
        },
        {
          name: 'Bialystok',
          countryId: 153,
        },
        {
          name: 'Bielsko',
          countryId: 153,
        },
        {
          name: 'Bydgoszcz',
          countryId: 153,
        },
        {
          name: 'Chelm',
          countryId: 153,
        },
        {
          name: 'Ciechanow',
          countryId: 153,
        },
        {
          name: 'Czestochowa',
          countryId: 153,
        },
        {
          name: 'Elblag',
          countryId: 153,
        },
        {
          name: 'Gdansk',
          countryId: 153,
        },
        {
          name: 'Gorzow',
          countryId: 153,
        },
        {
          name: 'Jelenia Gora',
          countryId: 153,
        },
        {
          name: 'Kalisz',
          countryId: 153,
        },
        {
          name: 'Katowice',
          countryId: 153,
        },
        {
          name: 'Kielce',
          countryId: 153,
        },
        {
          name: 'Konin',
          countryId: 153,
        },
        {
          name: 'Koszalin',
          countryId: 153,
        },
        {
          name: 'Krakow',
          countryId: 153,
        },
        {
          name: 'Krosno',
          countryId: 153,
        },
        {
          name: 'Legnica',
          countryId: 153,
        },
        {
          name: 'Leszno',
          countryId: 153,
        },
        {
          name: 'Lodz',
          countryId: 153,
        },
        {
          name: 'Lomza',
          countryId: 153,
        },
        {
          name: 'Lublin',
          countryId: 153,
        },
        {
          name: 'Nowy Sacz',
          countryId: 153,
        },
        {
          name: 'Olsztyn',
          countryId: 153,
        },
        {
          name: 'Opole',
          countryId: 153,
        },
        {
          name: 'Ostroleka',
          countryId: 153,
        },
        {
          name: 'Pila',
          countryId: 153,
        },
        {
          name: 'Piotrkow',
          countryId: 153,
        },
        {
          name: 'Plock',
          countryId: 153,
        },
        {
          name: 'Poznan',
          countryId: 153,
        },
        {
          name: 'Przemysl',
          countryId: 153,
        },
        {
          name: 'Radom',
          countryId: 153,
        },
        {
          name: 'Rzeszow',
          countryId: 153,
        },
        {
          name: 'Siedlce',
          countryId: 153,
        },
        {
          name: 'Sieradz',
          countryId: 153,
        },
        {
          name: 'Skierniewice',
          countryId: 153,
        },
        {
          name: 'Slupsk',
          countryId: 153,
        },
        {
          name: 'Suwalki',
          countryId: 153,
        },
        {
          name: 'Tarnobrzeg',
          countryId: 153,
        },
        {
          name: 'Tarnow',
          countryId: 153,
        },
        {
          name: 'Torun',
          countryId: 153,
        },
        {
          name: 'Walbrzych',
          countryId: 153,
        },
        {
          name: 'Warszawa',
          countryId: 153,
        },
        {
          name: 'Wloclawek',
          countryId: 153,
        },
        {
          name: 'Wroclaw',
          countryId: 153,
        },
        {
          name: 'Zamosc',
          countryId: 153,
        },
        {
          name: 'Zielona Gora',
          countryId: 153,
        },
        {
          name: 'Dolnoslaskie',
          countryId: 153,
        },
        {
          name: 'Kujawsko-Pomorskie',
          countryId: 153,
        },
        {
          name: 'Lodzkie',
          countryId: 153,
        },
        {
          name: 'Lubelskie',
          countryId: 153,
        },
        {
          name: 'Lubuskie',
          countryId: 153,
        },
        {
          name: 'Malopolskie',
          countryId: 153,
        },
        {
          name: 'Mazowieckie',
          countryId: 153,
        },
        {
          name: 'Opolskie',
          countryId: 153,
        },
        {
          name: 'Podkarpackie',
          countryId: 153,
        },
        {
          name: 'Podlaskie',
          countryId: 153,
        },
        {
          name: 'Pomorskie',
          countryId: 153,
        },
        {
          name: 'Slaskie',
          countryId: 153,
        },
        {
          name: 'Swietokrzyskie',
          countryId: 153,
        },
        {
          name: 'Warminsko-Mazurskie',
          countryId: 153,
        },
        {
          name: 'Wielkopolskie',
          countryId: 153,
        },
        {
          name: 'Zachodniopomorskie',
          countryId: 153,
        },
        {
          name: 'Aveiro',
          countryId: 154,
        },
        {
          name: 'Beja',
          countryId: 154,
        },
        {
          name: 'Braga',
          countryId: 154,
        },
        {
          name: 'Braganca',
          countryId: 154,
        },
        {
          name: 'Castelo Branco',
          countryId: 154,
        },
        {
          name: 'Coimbra',
          countryId: 154,
        },
        {
          name: 'Evora',
          countryId: 154,
        },
        {
          name: 'Faro',
          countryId: 154,
        },
        {
          name: 'Madeira',
          countryId: 154,
        },
        {
          name: 'Guarda',
          countryId: 154,
        },
        {
          name: 'Leiria',
          countryId: 154,
        },
        {
          name: 'Lisboa',
          countryId: 154,
        },
        {
          name: 'Portalegre',
          countryId: 154,
        },
        {
          name: 'Porto',
          countryId: 154,
        },
        {
          name: 'Santarem',
          countryId: 154,
        },
        {
          name: 'Setubal',
          countryId: 154,
        },
        {
          name: 'Viana do Castelo',
          countryId: 154,
        },
        {
          name: 'Vila Real',
          countryId: 154,
        },
        {
          name: 'Viseu',
          countryId: 154,
        },
        {
          name: 'Azores',
          countryId: 154,
        },
        {
          name: 'Puerto Rico',
          countryId: 155,
        },
        {
          name: 'Doha',
          countryId: 156,
        },
        {
          name: 'Scotland North',
          countryId: 157,
        },
        {
          name: 'England - East',
          countryId: 157,
        },
        {
          name: 'England - West Midlands',
          countryId: 157,
        },
        {
          name: 'England - South West',
          countryId: 157,
        },
        {
          name: 'England - North West',
          countryId: 157,
        },
        {
          name: 'England - Yorks &amp; Humber',
          countryId: 157,
        },
        {
          name: 'England - South East',
          countryId: 157,
        },
        {
          name: 'England - London',
          countryId: 157,
        },
        {
          name: 'Northern Ireland',
          countryId: 157,
        },
        {
          name: 'England - North East',
          countryId: 157,
        },
        {
          name: 'Wales South',
          countryId: 157,
        },
        {
          name: 'Wales North',
          countryId: 157,
        },
        {
          name: 'England - East Midlands',
          countryId: 157,
        },
        {
          name: 'Scotland Central',
          countryId: 157,
        },
        {
          name: 'Scotland South',
          countryId: 157,
        },
        {
          name: 'Channel Islands',
          countryId: 157,
        },
        {
          name: 'Isle of Man',
          countryId: 157,
        },
        {
          name: 'Hlavni Mesto Praha',
          countryId: 158,
        },
        {
          name: 'Jihomoravsky Kraj',
          countryId: 158,
        },
        {
          name: 'Jihocesky Kraj',
          countryId: 158,
        },
        {
          name: 'Vysocina',
          countryId: 158,
        },
        {
          name: 'Karlovarsky Kraj',
          countryId: 158,
        },
        {
          name: 'Kralovehradecky Kraj',
          countryId: 158,
        },
        {
          name: 'Liberecky Kraj',
          countryId: 158,
        },
        {
          name: 'Olomoucky Kraj',
          countryId: 158,
        },
        {
          name: 'Moravskoslezsky Kraj',
          countryId: 158,
        },
        {
          name: 'Pardubicky Kraj',
          countryId: 158,
        },
        {
          name: 'Plzensky Kraj',
          countryId: 158,
        },
        {
          name: 'Stredocesky Kraj',
          countryId: 158,
        },
        {
          name: 'Ustecky Kraj',
          countryId: 158,
        },
        {
          name: 'Zlinsky Kraj',
          countryId: 158,
        },
        {
          name: 'Congo (Brazzaville)',
          countryId: 159,
        },
        {
          name: 'Congo',
          countryId: 160,
        },
        {
          name: 'Santo Domingo',
          countryId: 161,
        },
        {
          name: 'Duarte',
          countryId: 161,
        },
        {
          name: 'Puerto Plata',
          countryId: 161,
        },
        {
          name: 'Valverde',
          countryId: 161,
        },
        {
          name: 'María Trinidad Sánchez',
          countryId: 161,
        },
        {
          name: 'Azua',
          countryId: 161,
        },
        {
          name: 'Santiago',
          countryId: 161,
        },
        {
          name: 'San Cristóbal',
          countryId: 161,
        },
        {
          name: 'Peravia',
          countryId: 161,
        },
        {
          name: 'Elías Piña',
          countryId: 161,
        },
        {
          name: 'Barahona',
          countryId: 161,
        },
        {
          name: 'Monte Plata',
          countryId: 161,
        },
        {
          name: 'Salcedo',
          countryId: 161,
        },
        {
          name: 'La Altagracia',
          countryId: 161,
        },
        {
          name: 'San Juan',
          countryId: 161,
        },
        {
          name: 'Monseñor Nouel',
          countryId: 161,
        },
        {
          name: 'Monte Cristi',
          countryId: 161,
        },
        {
          name: 'Espaillat',
          countryId: 161,
        },
        {
          name: 'Sánchez Ramírez',
          countryId: 161,
        },
        {
          name: 'La Vega',
          countryId: 161,
        },
        {
          name: 'San Pedro de Macorís',
          countryId: 161,
        },
        {
          name: 'Independencia',
          countryId: 161,
        },
        {
          name: 'Dajabón',
          countryId: 161,
        },
        {
          name: 'Baoruco',
          countryId: 161,
        },
        {
          name: 'El Seibo',
          countryId: 161,
        },
        {
          name: 'Hato Mayor',
          countryId: 161,
        },
        {
          name: 'La Romana',
          countryId: 161,
        },
        {
          name: 'Pedernales',
          countryId: 161,
        },
        {
          name: 'Samaná',
          countryId: 161,
        },
        {
          name: 'Santiago Rodríguez',
          countryId: 161,
        },
        {
          name: 'San José de Ocoa',
          countryId: 161,
        },
        {
          name: 'Saint-Denis',
          countryId: 162,
        },
        {
          name: 'Rwanda',
          countryId: 163,
        },
        {
          name: 'Alba',
          countryId: 164,
        },
        {
          name: 'Arad',
          countryId: 164,
        },
        {
          name: 'Arges',
          countryId: 164,
        },
        {
          name: 'Bacau',
          countryId: 164,
        },
        {
          name: 'Bihor',
          countryId: 164,
        },
        {
          name: 'Bistrita-Nasaud',
          countryId: 164,
        },
        {
          name: 'Botosani',
          countryId: 164,
        },
        {
          name: 'Braila',
          countryId: 164,
        },
        {
          name: 'Brasov',
          countryId: 164,
        },
        {
          name: 'Bucuresti',
          countryId: 164,
        },
        {
          name: 'Buzau',
          countryId: 164,
        },
        {
          name: 'Caras-Severin',
          countryId: 164,
        },
        {
          name: 'Cluj',
          countryId: 164,
        },
        {
          name: 'Constanta',
          countryId: 164,
        },
        {
          name: 'Covasna',
          countryId: 164,
        },
        {
          name: 'Dambovita',
          countryId: 164,
        },
        {
          name: 'Dolj',
          countryId: 164,
        },
        {
          name: 'Galati',
          countryId: 164,
        },
        {
          name: 'Gorj',
          countryId: 164,
        },
        {
          name: 'Harghita',
          countryId: 164,
        },
        {
          name: 'Hunedoara',
          countryId: 164,
        },
        {
          name: 'Ialomita',
          countryId: 164,
        },
        {
          name: 'Iasi',
          countryId: 164,
        },
        {
          name: 'Maramures',
          countryId: 164,
        },
        {
          name: 'Mehedinti',
          countryId: 164,
        },
        {
          name: 'Mures',
          countryId: 164,
        },
        {
          name: 'Neamt',
          countryId: 164,
        },
        {
          name: 'Olt',
          countryId: 164,
        },
        {
          name: 'Prahova',
          countryId: 164,
        },
        {
          name: 'Salaj',
          countryId: 164,
        },
        {
          name: 'Satu Mare',
          countryId: 164,
        },
        {
          name: 'Sibiu',
          countryId: 164,
        },
        {
          name: 'Suceava',
          countryId: 164,
        },
        {
          name: 'Teleorman',
          countryId: 164,
        },
        {
          name: 'Timis',
          countryId: 164,
        },
        {
          name: 'Tulcea',
          countryId: 164,
        },
        {
          name: 'Vaslui',
          countryId: 164,
        },
        {
          name: 'Valcea',
          countryId: 164,
        },
        {
          name: 'Vrancea',
          countryId: 164,
        },
        {
          name: 'Calarasi',
          countryId: 164,
        },
        {
          name: 'Giurgiu',
          countryId: 164,
        },
        {
          name: 'Altaiskii krai',
          countryId: 165,
        },
        {
          name: 'Amurskaya obl.',
          countryId: 165,
        },
        {
          name: 'Arhangelskaya obl.',
          countryId: 165,
        },
        {
          name: 'Astrahanskaya obl.',
          countryId: 165,
        },
        {
          name: 'Bashkiriya obl.',
          countryId: 165,
        },
        {
          name: 'Belgorodskaya obl.',
          countryId: 165,
        },
        {
          name: 'Bryanskaya obl.',
          countryId: 165,
        },
        {
          name: 'Buryatiya',
          countryId: 165,
        },
        {
          name: 'Vladimirskaya obl.',
          countryId: 165,
        },
        {
          name: 'Volgogradskaya obl.',
          countryId: 165,
        },
        {
          name: 'Vologodskaya obl.',
          countryId: 165,
        },
        {
          name: 'Voronezhskaya obl.',
          countryId: 165,
        },
        {
          name: 'Nizhegorodskaya obl.',
          countryId: 165,
        },
        {
          name: 'Dagestan',
          countryId: 165,
        },
        {
          name: 'Evreiskaya obl.',
          countryId: 165,
        },
        {
          name: 'Ivanovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Irkutskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kabardino-Balkariya',
          countryId: 165,
        },
        {
          name: 'Kaliningradskaya obl.',
          countryId: 165,
        },
        {
          name: 'Tverskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kalmykiya',
          countryId: 165,
        },
        {
          name: 'Kaluzhskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kamchatskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kareliya',
          countryId: 165,
        },
        {
          name: 'Kemerovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kirovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Komi',
          countryId: 165,
        },
        {
          name: 'Kostromskaya obl.',
          countryId: 165,
        },
        {
          name: 'Krasnodarskii krai',
          countryId: 165,
        },
        {
          name: 'Krasnoyarskii krai',
          countryId: 165,
        },
        {
          name: 'Kurganskaya obl.',
          countryId: 165,
        },
        {
          name: 'Kurskaya obl.',
          countryId: 165,
        },
        {
          name: 'Lipetskaya obl.',
          countryId: 165,
        },
        {
          name: 'Magadanskaya obl.',
          countryId: 165,
        },
        {
          name: 'Marii El',
          countryId: 165,
        },
        {
          name: 'Mordoviya',
          countryId: 165,
        },
        {
          name: 'Moscow &amp; Moscow Region',
          countryId: 165,
        },
        {
          name: 'Murmanskaya obl.',
          countryId: 165,
        },
        {
          name: 'Novgorodskaya obl.',
          countryId: 165,
        },
        {
          name: 'Novosibirskaya obl.',
          countryId: 165,
        },
        {
          name: 'Omskaya obl.',
          countryId: 165,
        },
        {
          name: 'Orenburgskaya obl.',
          countryId: 165,
        },
        {
          name: 'Orlovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Penzenskaya obl.',
          countryId: 165,
        },
        {
          name: 'Permskiy krai',
          countryId: 165,
        },
        {
          name: 'Primorskii krai',
          countryId: 165,
        },
        {
          name: 'Pskovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Rostovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Ryazanskaya obl.',
          countryId: 165,
        },
        {
          name: 'Samarskaya obl.',
          countryId: 165,
        },
        {
          name: 'Saint-Petersburg and Region',
          countryId: 165,
        },
        {
          name: 'Saratovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Saha (Yakutiya)',
          countryId: 165,
        },
        {
          name: 'Sahalin',
          countryId: 165,
        },
        {
          name: 'Sverdlovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Severnaya Osetiya',
          countryId: 165,
        },
        {
          name: 'Smolenskaya obl.',
          countryId: 165,
        },
        {
          name: 'Stavropolskii krai',
          countryId: 165,
        },
        {
          name: 'Tambovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Tatarstan',
          countryId: 165,
        },
        {
          name: 'Tomskaya obl.',
          countryId: 165,
        },
        {
          name: 'Tulskaya obl.',
          countryId: 165,
        },
        {
          name: 'Tyumenskaya obl. i Hanty-Mansiiskii AO',
          countryId: 165,
        },
        {
          name: 'Udmurtiya',
          countryId: 165,
        },
        {
          name: 'Ulyanovskaya obl.',
          countryId: 165,
        },
        {
          name: 'Uralskaya obl.',
          countryId: 165,
        },
        {
          name: 'Habarovskii krai',
          countryId: 165,
        },
        {
          name: 'Chelyabinskaya obl.',
          countryId: 165,
        },
        {
          name: 'Checheno-Ingushetiya',
          countryId: 165,
        },
        {
          name: 'Chitinskaya obl.',
          countryId: 165,
        },
        {
          name: 'Chuvashiya',
          countryId: 165,
        },
        {
          name: 'Yaroslavskaya obl.',
          countryId: 165,
        },
        {
          name: 'Adygeya',
          countryId: 165,
        },
        {
          name: 'Hakasiya',
          countryId: 165,
        },
        {
          name: 'Chukotskii AO',
          countryId: 165,
        },
        {
          name: 'Yamalo-Nenetskii AO',
          countryId: 165,
        },
        {
          name: 'Karachaeva-Cherkesskaya Respublica',
          countryId: 165,
        },
        {
          name: 'Raimirskii (Dolgano-Nenetskii) AO',
          countryId: 165,
        },
        {
          name: 'Respublica Tiva',
          countryId: 165,
        },
        {
          name: 'Western Sahara',
          countryId: 166,
        },
        {
          name: 'Samoa',
          countryId: 167,
        },
        {
          name: 'Basseterre',
          countryId: 168,
        },
        {
          name: 'Acquaviva',
          countryId: 169,
        },
        {
          name: 'Chiesanuova',
          countryId: 169,
        },
        {
          name: 'Domagnano',
          countryId: 169,
        },
        {
          name: 'Faetano',
          countryId: 169,
        },
        {
          name: 'Fiorentino',
          countryId: 169,
        },
        {
          name: 'Borgo Maggiore',
          countryId: 169,
        },
        {
          name: 'San Marino',
          countryId: 169,
        },
        {
          name: 'Monte Giardino',
          countryId: 169,
        },
        {
          name: 'Serravalle',
          countryId: 169,
        },
        {
          name: 'Saint Pierre',
          countryId: 170,
        },
        {
          name: 'Kingstown',
          countryId: 171,
        },
        {
          name: 'Jamestown',
          countryId: 172,
        },
        {
          name: 'Castries',
          countryId: 173,
        },
        {
          name: 'San Tome',
          countryId: 174,
        },
        {
          name: 'Senegal',
          countryId: 175,
        },
        {
          name: 'Belgrade',
          countryId: 176,
        },
        {
          name: 'Seychelles',
          countryId: 177,
        },
        {
          name: 'Freetown',
          countryId: 178,
        },
        {
          name: 'Singapore',
          countryId: 179,
        },
        {
          name: 'Damascus',
          countryId: 180,
        },
        {
          name: 'Mogadishu',
          countryId: 181,
        },
        {
          name: 'Sri Lanka',
          countryId: 182,
        },
        {
          name: 'Johannesburg',
          countryId: 183,
        },
        {
          name: 'Sudan',
          countryId: 184,
        },
        {
          name: 'Blekinge Lan',
          countryId: 185,
        },
        {
          name: 'Gavleborgs Lan',
          countryId: 185,
        },
        {
          name: 'Gotlands Lan',
          countryId: 185,
        },
        {
          name: 'Hallands Lan',
          countryId: 185,
        },
        {
          name: 'Jamtlands Lan',
          countryId: 185,
        },
        {
          name: 'Jonkopings Lan',
          countryId: 185,
        },
        {
          name: 'Kalmar Lan',
          countryId: 185,
        },
        {
          name: 'Dalarnas Lan',
          countryId: 185,
        },
        {
          name: 'Kronobergs Lan',
          countryId: 185,
        },
        {
          name: 'Norrbottens Lan',
          countryId: 185,
        },
        {
          name: 'Orebro Lan',
          countryId: 185,
        },
        {
          name: 'Ostergotlands Lan',
          countryId: 185,
        },
        {
          name: 'Sodermanlands Lan',
          countryId: 185,
        },
        {
          name: 'Uppsala Lan',
          countryId: 185,
        },
        {
          name: 'Varmlands Lan',
          countryId: 185,
        },
        {
          name: 'Vasterbottens Lan',
          countryId: 185,
        },
        {
          name: 'Vasternorrlands Lan',
          countryId: 185,
        },
        {
          name: 'Vastmanlands Lan',
          countryId: 185,
        },
        {
          name: 'Stockholms Lan',
          countryId: 185,
        },
        {
          name: 'Skane Lan',
          countryId: 185,
        },
        {
          name: 'Vastra Gotaland',
          countryId: 185,
        },
        {
          name: 'Aargau',
          countryId: 186,
        },
        {
          name: 'Appenzell Innerrhoden',
          countryId: 186,
        },
        {
          name: 'Appenzell Ausserrhoden',
          countryId: 186,
        },
        {
          name: 'Bern',
          countryId: 186,
        },
        {
          name: 'Basel-Landschaft',
          countryId: 186,
        },
        {
          name: 'Basel-Stadt',
          countryId: 186,
        },
        {
          name: 'Fribourg',
          countryId: 186,
        },
        {
          name: 'Gen&egrave;ve',
          countryId: 186,
        },
        {
          name: 'Glarus',
          countryId: 186,
        },
        {
          name: 'Graubünden',
          countryId: 186,
        },
        {
          name: 'Jura',
          countryId: 186,
        },
        {
          name: 'Luzern',
          countryId: 186,
        },
        {
          name: 'Neuch&acirc;tel',
          countryId: 186,
        },
        {
          name: 'Nidwalden',
          countryId: 186,
        },
        {
          name: 'Obwalden',
          countryId: 186,
        },
        {
          name: 'Sankt Gallen',
          countryId: 186,
        },
        {
          name: 'Schaffhausen',
          countryId: 186,
        },
        {
          name: 'Solothurn',
          countryId: 186,
        },
        {
          name: 'Schwyz',
          countryId: 186,
        },
        {
          name: 'Thurgau',
          countryId: 186,
        },
        {
          name: 'Ticino',
          countryId: 186,
        },
        {
          name: 'Uri',
          countryId: 186,
        },
        {
          name: 'Vaud',
          countryId: 186,
        },
        {
          name: 'Valais',
          countryId: 186,
        },
        {
          name: 'Zug',
          countryId: 186,
        },
        {
          name: 'Zürich',
          countryId: 186,
        },
        {
          name: 'Paramaribo',
          countryId: 187,
        },
        {
          name: 'Swaziland',
          countryId: 188,
        },
        {
          name: 'Thailand',
          countryId: 189,
        },
        {
          name: 'Amnat Charoen',
          countryId: 189,
        },
        {
          name: 'Ang Thong',
          countryId: 189,
        },
        {
          name: 'Bangkok',
          countryId: 189,
        },
        {
          name: 'Buri Ram',
          countryId: 189,
        },
        {
          name: 'Chachoengsao',
          countryId: 189,
        },
        {
          name: 'Chai Nat',
          countryId: 189,
        },
        {
          name: 'Chaiyaphum',
          countryId: 189,
        },
        {
          name: 'Chanthaburi',
          countryId: 189,
        },
        {
          name: 'Chiang Mai',
          countryId: 189,
        },
        {
          name: 'Chiang Rai',
          countryId: 189,
        },
        {
          name: 'Chon Buri',
          countryId: 189,
        },
        {
          name: 'Kalasin',
          countryId: 189,
        },
        {
          name: 'Kanchanaburi',
          countryId: 189,
        },
        {
          name: 'Khon Kaen',
          countryId: 189,
        },
        {
          name: 'Krabi',
          countryId: 189,
        },
        {
          name: 'Lampang',
          countryId: 189,
        },
        {
          name: 'Loei',
          countryId: 189,
        },
        {
          name: 'Lop Buri',
          countryId: 189,
        },
        {
          name: 'Mae Hong Son',
          countryId: 189,
        },
        {
          name: 'Maha Sarakham',
          countryId: 189,
        },
        {
          name: 'Nakhon Pathom',
          countryId: 189,
        },
        {
          name: 'Nakhon Ratchasima',
          countryId: 189,
        },
        {
          name: 'Nakhon Sawan',
          countryId: 189,
        },
        {
          name: 'Nakhon Si Thammarat',
          countryId: 189,
        },
        {
          name: 'Narathiwat',
          countryId: 189,
        },
        {
          name: 'Nong Bua Lam Phu',
          countryId: 189,
        },
        {
          name: 'Nong Khai',
          countryId: 189,
        },
        {
          name: 'Nonthaburi',
          countryId: 189,
        },
        {
          name: 'Pathum Thani',
          countryId: 189,
        },
        {
          name: 'Pattani',
          countryId: 189,
        },
        {
          name: 'Phangnga',
          countryId: 189,
        },
        {
          name: 'Phatthalung',
          countryId: 189,
        },
        {
          name: 'Phichit',
          countryId: 189,
        },
        {
          name: 'Phitsanulok',
          countryId: 189,
        },
        {
          name: 'Phra Nakhon Si Ayutthaya',
          countryId: 189,
        },
        {
          name: 'Phrae',
          countryId: 189,
        },
        {
          name: 'Phuket',
          countryId: 189,
        },
        {
          name: 'Prachin Buri',
          countryId: 189,
        },
        {
          name: 'Prachuap Khiri Khan',
          countryId: 189,
        },
        {
          name: 'Ratchaburi',
          countryId: 189,
        },
        {
          name: 'Rayong',
          countryId: 189,
        },
        {
          name: 'Roi Et',
          countryId: 189,
        },
        {
          name: 'Sa Kaeo',
          countryId: 189,
        },
        {
          name: 'Sakon Nakhon',
          countryId: 189,
        },
        {
          name: 'Samut Prakan',
          countryId: 189,
        },
        {
          name: 'Samut Sakhon',
          countryId: 189,
        },
        {
          name: 'Samut Songkhran',
          countryId: 189,
        },
        {
          name: 'Saraburi',
          countryId: 189,
        },
        {
          name: 'Si Sa Ket',
          countryId: 189,
        },
        {
          name: 'Sing Buri',
          countryId: 189,
        },
        {
          name: 'Songkhla',
          countryId: 189,
        },
        {
          name: 'Sukhothai',
          countryId: 189,
        },
        {
          name: 'Suphan Buri',
          countryId: 189,
        },
        {
          name: 'Surat Thani',
          countryId: 189,
        },
        {
          name: 'Surin',
          countryId: 189,
        },
        {
          name: 'Trang',
          countryId: 189,
        },
        {
          name: 'Ubon Ratchathani',
          countryId: 189,
        },
        {
          name: 'Udon Thani',
          countryId: 189,
        },
        {
          name: 'Uthai Thani',
          countryId: 189,
        },
        {
          name: 'Uttaradit',
          countryId: 189,
        },
        {
          name: 'Yala',
          countryId: 189,
        },
        {
          name: 'Yasothon',
          countryId: 189,
        },
        {
          name: 'Taiwan',
          countryId: 190,
        },
        {
          name: 'Tanzania',
          countryId: 191,
        },
        {
          name: 'Gorno-Badakhshan Region',
          countryId: 192,
        },
        {
          name: 'Kuljabsk Region',
          countryId: 192,
        },
        {
          name: 'Kurgan-Tjube Region',
          countryId: 192,
        },
        {
          name: 'Sughd Region',
          countryId: 192,
        },
        {
          name: 'Tajikistan',
          countryId: 192,
        },
        {
          name: 'East Timor',
          countryId: 193,
        },
        {
          name: 'Togo',
          countryId: 194,
        },
        {
          name: 'Fakaofo',
          countryId: 195,
        },
        {
          name: 'Tonga',
          countryId: 196,
        },
        {
          name: 'Port of Spain',
          countryId: 197,
        },
        {
          name: 'Tunisia',
          countryId: 198,
        },
        {
          name: 'Ashgabat Region',
          countryId: 199,
        },
        {
          name: 'Krasnovodsk Region',
          countryId: 199,
        },
        {
          name: 'Mary Region',
          countryId: 199,
        },
        {
          name: 'Tashauz Region',
          countryId: 199,
        },
        {
          name: 'Chardzhou Region',
          countryId: 199,
        },
        {
          name: 'Bartin',
          countryId: 200,
        },
        {
          name: 'Bayburt',
          countryId: 200,
        },
        {
          name: 'Karabuk',
          countryId: 200,
        },
        {
          name: 'Adana',
          countryId: 200,
        },
        {
          name: 'Aydin',
          countryId: 200,
        },
        {
          name: 'Amasya',
          countryId: 200,
        },
        {
          name: 'Ankara',
          countryId: 200,
        },
        {
          name: 'Antalya',
          countryId: 200,
        },
        {
          name: 'Artvin',
          countryId: 200,
        },
        {
          name: 'Afion',
          countryId: 200,
        },
        {
          name: 'Balikesir',
          countryId: 200,
        },
        {
          name: 'Bilecik',
          countryId: 200,
        },
        {
          name: 'Bursa',
          countryId: 200,
        },
        {
          name: 'Gaziantep',
          countryId: 200,
        },
        {
          name: 'Denizli',
          countryId: 200,
        },
        {
          name: 'Izmir',
          countryId: 200,
        },
        {
          name: 'Isparta',
          countryId: 200,
        },
        {
          name: 'Icel',
          countryId: 200,
        },
        {
          name: 'Kayseri',
          countryId: 200,
        },
        {
          name: 'Kars',
          countryId: 200,
        },
        {
          name: 'Kodjaeli',
          countryId: 200,
        },
        {
          name: 'Konya',
          countryId: 200,
        },
        {
          name: 'Kirklareli',
          countryId: 200,
        },
        {
          name: 'Kutahya',
          countryId: 200,
        },
        {
          name: 'Malatya',
          countryId: 200,
        },
        {
          name: 'Manisa',
          countryId: 200,
        },
        {
          name: 'Sakarya',
          countryId: 200,
        },
        {
          name: 'Samsun',
          countryId: 200,
        },
        {
          name: 'Sivas',
          countryId: 200,
        },
        {
          name: 'Istanbul',
          countryId: 200,
        },
        {
          name: 'Trabzon',
          countryId: 200,
        },
        {
          name: 'Corum',
          countryId: 200,
        },
        {
          name: 'Edirne',
          countryId: 200,
        },
        {
          name: 'Elazig',
          countryId: 200,
        },
        {
          name: 'Erzincan',
          countryId: 200,
        },
        {
          name: 'Erzurum',
          countryId: 200,
        },
        {
          name: 'Eskisehir',
          countryId: 200,
        },
        {
          name: 'Tuvalu',
          countryId: 201,
        },
        {
          name: 'Vinnitskaya obl.',
          countryId: 202,
        },
        {
          name: 'Volynskaya obl.',
          countryId: 202,
        },
        {
          name: 'Dnepropetrovskaya obl.',
          countryId: 202,
        },
        {
          name: 'Donetskaya obl.',
          countryId: 202,
        },
        {
          name: 'Zhitomirskaya obl.',
          countryId: 202,
        },
        {
          name: 'Zakarpatskaya obl.',
          countryId: 202,
        },
        {
          name: 'Zaporozhskaya obl.',
          countryId: 202,
        },
        {
          name: 'Ivano-Frankovskaya obl.',
          countryId: 202,
        },
        {
          name: 'Kievskaya obl.',
          countryId: 202,
        },
        {
          name: 'Kirovogradskaya obl.',
          countryId: 202,
        },
        {
          name: 'Krymskaya obl.',
          countryId: 202,
        },
        {
          name: 'Luganskaya obl.',
          countryId: 202,
        },
        {
          name: 'Lvovskaya obl.',
          countryId: 202,
        },
        {
          name: 'Nikolaevskaya obl.',
          countryId: 202,
        },
        {
          name: 'Odesskaya obl.',
          countryId: 202,
        },
        {
          name: 'Poltavskaya obl.',
          countryId: 202,
        },
        {
          name: 'Rovenskaya obl.',
          countryId: 202,
        },
        {
          name: 'Sumskaya obl.',
          countryId: 202,
        },
        {
          name: 'Ternopolskaya obl.',
          countryId: 202,
        },
        {
          name: 'Harkovskaya obl.',
          countryId: 202,
        },
        {
          name: 'Hersonskaya obl.',
          countryId: 202,
        },
        {
          name: 'Hmelnitskaya obl.',
          countryId: 202,
        },
        {
          name: 'Cherkasskaya obl.',
          countryId: 202,
        },
        {
          name: 'Chernigovskaya obl.',
          countryId: 202,
        },
        {
          name: 'Chernovitskaya obl.',
          countryId: 202,
        },
        {
          name: 'Ukraina',
          countryId: 202,
        },
        {
          name: 'Jinja',
          countryId: 203,
        },
        {
          name: 'Kampala',
          countryId: 203,
        },
        {
          name: 'Artigas',
          countryId: 204,
        },
        {
          name: 'Canelones',
          countryId: 204,
        },
        {
          name: 'Cerro Largo',
          countryId: 204,
        },
        {
          name: 'Colonia',
          countryId: 204,
        },
        {
          name: 'Durazno',
          countryId: 204,
        },
        {
          name: 'Flores',
          countryId: 204,
        },
        {
          name: 'Florida',
          countryId: 204,
        },
        {
          name: 'Lavalleja',
          countryId: 204,
        },
        {
          name: 'Maldonado',
          countryId: 204,
        },
        {
          name: 'Montevideo',
          countryId: 204,
        },
        {
          name: 'Paysand&uacute;',
          countryId: 204,
        },
        {
          name: 'Río Negro',
          countryId: 204,
        },
        {
          name: 'Rivera',
          countryId: 204,
        },
        {
          name: 'Rocha',
          countryId: 204,
        },
        {
          name: 'Salto',
          countryId: 204,
        },
        {
          name: 'San José',
          countryId: 204,
        },
        {
          name: 'Soriano',
          countryId: 204,
        },
        {
          name: 'Tacuarembó',
          countryId: 204,
        },
        {
          name: 'Treinta y Tres',
          countryId: 204,
        },
        {
          name: 'Andijon Region',
          countryId: 205,
        },
        {
          name: 'Buxoro Region',
          countryId: 205,
        },
        {
          name: 'Jizzac Region',
          countryId: 205,
        },
        {
          name: 'Qaraqalpaqstan',
          countryId: 205,
        },
        {
          name: 'Qashqadaryo Region',
          countryId: 205,
        },
        {
          name: 'Navoiy Region',
          countryId: 205,
        },
        {
          name: 'Namangan Region',
          countryId: 205,
        },
        {
          name: 'Samarqand Region',
          countryId: 205,
        },
        {
          name: 'Surxondaryo Region',
          countryId: 205,
        },
        {
          name: 'Sirdaryo Region',
          countryId: 205,
        },
        {
          name: 'Tashkent Region',
          countryId: 205,
        },
        {
          name: 'Fergana Region',
          countryId: 205,
        },
        {
          name: 'Xorazm Region',
          countryId: 205,
        },
        {
          name: 'Vanuatu',
          countryId: 206,
        },
        {
          name: 'Amazonas',
          countryId: 207,
        },
        {
          name: 'Anzoategui',
          countryId: 207,
        },
        {
          name: 'Apure',
          countryId: 207,
        },
        {
          name: 'Aragua',
          countryId: 207,
        },
        {
          name: 'Barinas',
          countryId: 207,
        },
        {
          name: 'Bolívar',
          countryId: 207,
        },
        {
          name: 'Carabobo',
          countryId: 207,
        },
        {
          name: 'Cojedes',
          countryId: 207,
        },
        {
          name: 'Delta Amacuro',
          countryId: 207,
        },
        {
          name: 'Falcón',
          countryId: 207,
        },
        {
          name: 'Guárico',
          countryId: 207,
        },
        {
          name: 'Lara',
          countryId: 207,
        },
        {
          name: 'Mérida',
          countryId: 207,
        },
        {
          name: 'Miranda',
          countryId: 207,
        },
        {
          name: 'Monagas',
          countryId: 207,
        },
        {
          name: 'Nueva Esparta',
          countryId: 207,
        },
        {
          name: 'Portuguesa',
          countryId: 207,
        },
        {
          name: 'Sucre',
          countryId: 207,
        },
        {
          name: 'Táchira',
          countryId: 207,
        },
        {
          name: 'Trujillo',
          countryId: 207,
        },
        {
          name: 'Yaracuy',
          countryId: 207,
        },
        {
          name: 'Zulia',
          countryId: 207,
        },
        {
          name: 'Dependencias Federales',
          countryId: 207,
        },
        {
          name: 'Distrito Capital',
          countryId: 207,
        },
        {
          name: 'Vargas',
          countryId: 207,
        },
        {
          name: 'Dong Bang Song Cuu Long',
          countryId: 208,
        },
        {
          name: 'Dong Bang Song Hong',
          countryId: 208,
        },
        {
          name: 'Dong Nam Bo',
          countryId: 208,
        },
        {
          name: 'Duyen Hai Mien Trung',
          countryId: 208,
        },
        {
          name: 'Khu Bon Cu',
          countryId: 208,
        },
        {
          name: 'Mien Nui Va Trung Du',
          countryId: 208,
        },
        {
          name: 'Thai Nguyen',
          countryId: 208,
        },
        {
          name: 'Mata-Utu',
          countryId: 209,
        },
        {
          name: 'Yemen',
          countryId: 210,
        },
        {
          name: 'Yibuti',
          countryId: 211,
        },
        {
          name: 'Zimbabwe',
          countryId: 212,
        },
      ])
      .execute();
  }
}
//#############################################################################################
