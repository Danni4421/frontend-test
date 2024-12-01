import { instanceApi } from "@/lib/main";
import { Transaction } from "@/types";

/**
 * Create transaction
 *
 * This function will create transaction to the json server
 * and return the transaction data
 *
 * @param custId number
 * @param packageId number
 * @returns {Transaction}
 */
export const createTransaction = async (
  custId: number,
  packageId: number
): Promise<Transaction> => {
  try {
    const date = new Date();
    const endDate = new Date(date);
    endDate.setDate(date.getDate() + 30);

    const response = await instanceApi.post("/transactions", {
      customerId: custId,
      packageId: packageId,
      date: date.toISOString(),
      endDate: endDate.toISOString(),
      status: "completed",
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return {} as Transaction;
  }
};
