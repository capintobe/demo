import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from '../employees/employees.module';
import { TimesheetsModule } from '../timesheets/timesheets.module';
import { LeaveRequestsModule } from '../leave-requests/leave-requests.module';
import { PaySlipsModule } from '../pay-slips/pay-slips.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/payroll-demo'),
    EmployeesModule,
    TimesheetsModule,
    LeaveRequestsModule,
    PaySlipsModule,
  ],
})
export class AppModule {}