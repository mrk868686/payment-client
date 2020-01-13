import { Customer } from './customer.model';

export interface Payment {
    name: string;
    value: number;
    type: number;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    expectedAt: Date;
    customers: Customer;
}