//####################################################################################################
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
//import { TypeORMExceptionFilter } from './common/filters/typeorm-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { CORS } from './constant';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//####################################################################################################

//####################################################################################################
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors(CORS);
  app.setGlobalPrefix('api/v1/keepworking');

  //app.useGlobalFilters(new TypeORMExceptionFilter()); //Excepciones de querys
  app.useGlobalFilters(new AllExceptionFilter()); //Maneja Excepciones

  app.useGlobalInterceptors(new TimeOutInterceptor()); //Timeout de peticiones

  let options_sw = new DocumentBuilder()
    .setTitle('KeepWorking API')
    .setDescription('API para KeepWorking')
    .setVersion('1.0.0')
    .build();

  let document_sw = SwaggerModule.createDocument(app, options_sw);

  SwaggerModule.setup('/api/docs', app, document_sw, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT);
  console.log(`App running on port: ${process.env.PORT}`);
}
//####################################################################################################

//####################################################################################################
bootstrap();
//####################################################################################################
