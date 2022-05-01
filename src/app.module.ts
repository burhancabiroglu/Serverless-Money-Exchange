import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { AuthModule } from './auth/auth.module';
import { FinanceModule } from './finance/finance.module';
import { ConfigModule } from '@nestjs/config';
import { CurrenciesConfig } from 'src/config/currencies-config.module';

@Module({
  imports: [
    CurrenciesConfig,
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule, 
    FirebaseModule,
    FinanceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}