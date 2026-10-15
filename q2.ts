export const consultationFee: number = 500;

export function calculateBill(fee: number, testCost: number): number {
    return fee + testCost;
}

export class Patient {
    constructor(public name: string) {}
}
