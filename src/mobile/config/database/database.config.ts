import { Notification } from 'src/mobile/notification/entities/notification.entity';
import { Ticket } from 'src/mobile/ticket/entities/ticker.entity';
import { Transaction } from 'src/mobile/transaction/entities/transaction.entity';
import { User } from 'src/mobile/user/entities/user.entity';

// import { registerAs } from '@nestjs/config';

//This function can't be used
// export default registerAs('database', () => ({
//   type: process.env.DB_DATABASE,
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT ?? '5432', 10),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   entities: [Notification, Ticket, Transaction, User],
//   synchronize: false,
//   migrations: [__dirname + '/modules/mobile/database/migration/**/*/{.ts}'],
// }));

export class DataBaseConfig {
  type = process.env.DB_DATABASE;
  host = process.env.DB_HOST;
  port = parseInt(process.env.DB_PORT ?? '5432', 10);
  username = process.env.DB_USERNAME;
  password = process.env.DB_PASSWORD;
  database = process.env.DB_NAME;
  entities = [Notification, Ticket, Transaction, User];
  synchronize = false;
  migrations = [__dirname + '/modules/mobile/database/migration/**/*/{.ts}'];
}
