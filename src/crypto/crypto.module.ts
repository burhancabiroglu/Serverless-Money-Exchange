import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CurrenciesConfig } from 'src/config/currencies-config.module';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [CurrenciesConfig, HttpModule],
  controllers: [CryptoController],
  providers: [CryptoService]
})
export class CryptoModule {}
