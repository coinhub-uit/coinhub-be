import { Module } from '@nestjs/common';
import { TicketService } from './services/ticket.service';
import { TicketController } from './controllers/ticket.controller';
import { Ticket } from 'src/mobile/ticket/entities/ticker.entity';

@Module({
  imports: [Ticket],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule {}
