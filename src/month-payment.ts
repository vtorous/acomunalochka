export class Payment {
    service: string;
    sum: number;
    ismetter: boolean;
    bmmv: number;
    cmmv: number;
}

export class MonthPayment {
    year: number;
    month: number;
    payments: Payment[];
}