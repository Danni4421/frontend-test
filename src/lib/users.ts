import { instanceApi } from "@/lib/main";
import { Transaction, User } from "@/types";
import { LoginRequest, RegisterRequest } from "@/types/request";

/**
 * Register user
 *
 * This function will register user to the json server
 * and return the user data
 *
 * @param param0 RegisterRequest
 * @returns {User}
 */
export const registerUser = async ({
  username,
  name,
  email,
  password,
  phone,
}: RegisterRequest): Promise<User> => {
  try {
    const response = await instanceApi.post("/users", {
      username: username,
      email: email,
      password: password,
      role: "customer",
    });

    const profile = await instanceApi
      .post("/customers", {
        userId: response.data.id,
        name,
        phone,
      })
      .then((response) => response.data);

    return {
      ...response.data,
      profile,
    };
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};

/**
 * Login user
 *
 * This function will login user to the json server
 * and return the user data
 *
 * @param param0 LoginRequest
 * @returns {User}
 */
export const loginUser = async ({
  email,
  password,
}: LoginRequest): Promise<User | null> => {
  try {
    const response = await instanceApi.get("/users", {
      params: {
        email: email,
        password: password,
      },
    });

    const profile = await instanceApi.get("/customers", {
      params: {
        userId: response.data[0].id,
      },
    });

    const user = response.data.length > 0 ? response.data[0] : null;

    if (!user) {
      throw new Error("Email atau password tidak cocok.");
    }

    return {
      ...user,
      profile: profile.data[0],
    };
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

/**
 * Get user by id
 *
 * This function will get user by id
 * and return the user data
 *
 * @param id number
 * @returns {User}
 */
export const getUserById = async (id: number): Promise<User> => {
  try {
    const user = await instanceApi
      .get(`/users/${id}`)
      .then((response) => response.data);
    const profile = await instanceApi.get("/customers", {
      params: {
        userId: user.id,
      },
    });

    return {
      ...user,
      profile: profile.data[0],
    };
  } catch (error) {
    console.log(error);
    return {} as User;
  }
};

/**
 * Get user transaction history
 *
 * This function will get user transaction history
 * And return the transaction data
 *
 * @param custId number
 * @returns {Transaction[]}
 */
export const getUserPurchaseHistory = async (
  custId: number
): Promise<Transaction[]> => {
  try {
    const response = await instanceApi.get("/transactions", {
      params: {
        customerId: custId,
      },
    });

    const transactions = await Promise.all(
      response.data.map(async (transaction: Transaction) => {
        const packageData = await instanceApi.get(
          `/packages/${transaction.packageId}`
        );
        return {
          ...transaction,
          package: packageData.data,
        };
      })
    );

    return transactions;
  } catch (error) {
    console.error("Error fetching purchase history:", error);
    return [];
  }
};
