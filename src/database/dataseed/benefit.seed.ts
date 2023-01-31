//###############################################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { BenefitEntity } from '../entities/benefit.entity';
//###############################################################################################################

//###############################################################################################################
export default class DataBenefit implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(BenefitEntity)
      .values([
        {
          title: 'Trabajo 100% Remoto',
          description:
            'El cargo puede ser desempeñado desde cualquier lugar del mundo',
        },
        {
          title: 'Horario Flexible',
          description: 'Entrada y salida flexibles',
        },
        {
          title: 'Vestimenta Informal',
          description: 'No se exige código de vestimenta alguno',
        },
        {
          title: 'Programas de Bienestar',
          description: 'Subsidio a programas de bienestar mental y/o físico',
        },
        {
          title: 'Cobertura de Salud',
          description: 'Se paga cobertura de salud adicional a lo legal',
        },
        {
          title: 'Programa de Fitness',
          description: 'Se ofrece o subsidia programas de fitness y/o deporte',
        },
        {
          title: 'Descuento en Compras',
          description: 'Existen convenios de descuentos en algunos comercios',
        },
        {
          title: 'Día de cumpleaños libre',
          description:
            'El día de cumpleaños es canjeable por un día completo de vacaciones',
        },
        {
          title: 'Bono de Educación',
          description:
            'Se cubre algunos gastos de educación relacionados con el puesto',
        },
        {
          title: 'Vacaciones Extra',
          description: 'Se otorga vacaciones pagas adicionales al mínimo legal',
        },
        {
          title: 'Equity en la empresa',
          description: 'El cargo incluye participación accionaria',
        },
        {
          title: 'Viajes o retiros de empresa',
          description:
            'Actividades de integración con el equipo fuera del espacio de trabajo',
        },
        {
          title: 'Mascotas permitidas',
          description: 'Las mascotas son bienvenidas a la oficina',
        },
        {
          title: 'Seguro dental',
          description: 'Se paga o copaga seguro dental',
        },
        {
          title: 'Computadora',
          description: 'Se proporciona un equipo para tu trabajo',
        },
        {
          title: 'Bebidas y Snacks',
          description:
            'Se ofrece algunas bebidas y snacks de libre disposición en la oficina',
        },
        {
          title: 'Pre y postnatal adicionales a los legales',
          description:
            'Se ofrece períodos de pre y/o postnatal pagados superiores al mínimo legal',
        },
        {
          title: 'Biblioteca digital',
          description: 'Acceso a libros y/o suscripciones digitales',
        },
        {
          title: 'Reparaciones para tu computadora',
          description:
            'Se cubre algunos gastos de reparaciones en caso de desperfectos',
        },
        {
          title: 'Espacio de charlas internas',
          description:
            'Se dispone de espacio para realizar presentaciones o charlas en horarios de trabajo',
        },
        {
          title: 'Estacionamiento de bicicletas',
          description: 'Hay un lugar privado para estacionar las bicicletas',
        },
        {
          title: 'Accesible',
          description:
            'Se ofrece espacios e infraestructura accesibles para personas con movilidad reducida',
        },
        {
          title: 'Ayuda con le reubicación',
          description:
            'Si vives en otro país, se te ayuda con la mudanza y trámites de visa de trabajo',
        },
      ])
      .execute();
  }
}
//###############################################################################################################
