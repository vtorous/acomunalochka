import { Payment, PaymentByCounter, } from './month-payment';

export const PAYMENTS: (Payment|PaymentByCounter)[]  = [
    { id: 100, service: 'Electricity', year: 2017, month: 10, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 101, service: 'Gas', year: 2017, month: 10, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 102, service: 'Water', year: 2017, month: 10, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 103, service: 'Rent', year: 2017, month: 10, sum: 25, paid: true},
    { id: 104, service: 'Garbage', year: 2017, month: 10, sum: 25, paid: true},
    { id: 105, service: 'Phone', year: 2017, month: 10, sum: 25, paid: true},
    { id: 106, service: 'Internet', year: 2017, month: 10, sum: 25, paid: true},

    { id: 100, service: 'Electricity', year: 2017, month: 11, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 101, service: 'Gas', year: 2017, month: 11, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 102, service: 'Water', year: 2017, month: 11, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 103, service: 'Rent', year: 2017, month: 11, sum: 25, paid: true},
    { id: 104, service: 'Garbage', year: 2017, month: 11, sum: 25, paid: true},
    { id: 105, service: 'Phone', year: 2017, month: 11, sum: 25, paid: true},
    { id: 106, service: 'Internet', year: 2017, month: 11, sum: 25, paid: true},

    { id: 100, service: 'Electricity', year: 2018, month: 0, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 101, service: 'Gas', year: 2018, month: 0, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 102, service: 'Water', year: 2018, month: 0, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 103, service: 'Rent', year: 2018, month: 0, sum: 25, paid: true},
    { id: 104, service: 'Garbage', year: 2018, month: 0, sum: 25, paid: true},
    { id: 105, service: 'Phone', year: 2018, month: 0, sum: 25, paid: true},
    { id: 106, service: 'Internet', year: 2018, month: 0, sum: 25, paid: true},
    
    { id: 100, service: 'Electricity', year: 2018, month: 1, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 101, service: 'Gas', year: 2018, month: 1, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 102, service: 'Water', year: 2018, month: 1, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 103, service: 'Rent', year: 2018, month: 1, sum: 25, paid: true},
    { id: 104, service: 'Garbage', year: 2018, month: 1, sum: 25, paid: true},
    { id: 105, service: 'Phone', year: 2018, month: 1, sum: 25, paid: true},
    { id: 106, service: 'Internet', year: 2018, month: 1, sum: 25, paid: true},
    

    { id: 200, service: 'Electricity', year: 2018, month: 2, sum: 1, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 201, service: 'Gas', year: 2018, month: 2, sum: 12, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 202, service: 'Water', year: 2018, month: 2, sum: 25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 203, service: 'Rent', year: 2018, month: 2, sum: 1, paid: true},
    { id: 204, service: 'Garbage', year: 2018, month: 2, sum: 1, paid: true},
    { id: 205, service: 'Phone', year: 2018, month: 2, sum: 1, paid: true},
    { id: 206, service: 'Internet', year: 2018, month: 2, sum: 5, paid: true},

    { id: 300, service: 'Electricity', year: 2018, month: 3, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 301, service: 'Gas', year: 2018, month: 3, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 302, service: 'Water', year: 2018, month: 3, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 303, service: 'Rent', year: 2018, month: 3, sum: 125, paid: true},
    { id: 304, service: 'Garbage', year: 2018, month: 3, sum: 125, paid: true},
    { id: 305, service: 'Phone', year: 2018, month: 3, sum: 125, paid: true},
    { id: 306, service: 'Internet', year: 2018, month: 3, sum: 125, paid: true},
    
    { id: 400, service: 'Electricity', year: 2018, month: 4, sum: 155.25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 401, service: 'Gas', year: 2018, month: 4, sum: 1256.87, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 402, service: 'Water', year: 2018, month: 4, sum: 54.25, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 403, service: 'Rent', year: 2018, month: 4, sum: 485.54, paid: true},
    { id: 404, service: 'Garbage', year: 2018, month: 4, sum: 224.12, paid: true},
    { id: 405, service: 'Phone', year: 2018, month: 4, sum: 124.24, paid: true},
    { id: 406, service: 'Internet', year: 2018, month: 4, sum: 135.86, paid: true},

    { id: 400, service: 'Electricity', year: 2018, month: 5, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 401, service: 'Gas', year: 2018, month: 5, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 402, service: 'Water', year: 2018, month: 5, sum: 125, paid: true, counterBeginMonth: 25, counterEndMonth: 35},
    { id: 403, service: 'Rent', year: 2018, month: 5, sum: 125, paid: true},
    { id: 404, service: 'Garbage', year: 2018, month: 5, sum: 125, paid: true},
    { id: 405, service: 'Phone', year: 2018, month: 5, sum: 125, paid: true},
    { id: 406, service: 'Internet', year: 2018, month: 5, sum: 125, paid: true},

    { id: 400, service: 'Electricity', year: 2018, month: 6, sum: 125, paid: false, counterBeginMonth: undefined, counterEndMonth: undefined},
    { id: 401, service: 'Gas', year: 2018, month: 6, sum: 125, paid: false, counterBeginMonth: undefined, counterEndMonth: undefined},
    { id: 402, service: 'Water', year: 2018, month: 6, sum: undefined, paid: false, counterBeginMonth: undefined, counterEndMonth: undefined},
    { id: 403, service: 'Rent', year: 2018, month: 6, sum: undefined, paid: false},
    { id: 404, service: 'Garbage', year: 2018, month: 6, sum: 125, paid: false},
    { id: 405, service: 'Phone', year: 2018, month: 6, sum: 125, paid: false},
    { id: 406, service: 'Internet', year: 2018, month: 6, sum: 125, paid: false},
]