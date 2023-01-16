import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter()); //Maneja Excepciones
  app.useGlobalInterceptors(new TimeOutInterceptor()); //Timeout de peticiones
  await app.listen(3000);
}
bootstrap();
