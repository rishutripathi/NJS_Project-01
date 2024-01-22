import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(process.env.PORT) || 3000;
  
  app.listen(PORT).then(() => console.log("App is listening on localhost:", PORT));
    
}
bootstrap();
