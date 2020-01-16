import { Customer } from './customer.model';

export interface Payment {
    name: string;
    value: number;
    type: TYPE_ENUM;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    expectedAt: Date;
    customers: Customer;
}