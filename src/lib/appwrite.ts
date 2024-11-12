import "server-only"
import { Client, Account, Users, Databases } from "node-appwrite"
import { cookies } from "next/headers"
import { AUTH_COOKIE } from "../features/auth/constants"

export async function createSessionClient() {
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("670f82c200092b112624")

    const session = await cookies().get(AUTH_COOKIE)

    if (!session || !session.value) {
        throw new Error("Unauthorized");
    }

    client.setSession(session.value)
    return {
        get account() {
            return new Account(client)
        },
        get databases() {
            return new Databases(client)
        }
    }
};

export async function createAdminClient() {
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("670f82c200092b112624")
        .setKey("standard_d3ac3ac5457b944f6c4ff97e41afc5b1fbee8074283e0805973dcd8b13db7a873d542afe171164557519124c71d91be49bc12e864fbe14666cab4c9f3394dc51570b0ee5df68522eb3708c0fbf2c971ff438981790e2c1c6ef707540fbd575454f4367d36697ac3ea679ef3d528d5b8544ac0a78c55c647c7c1505502d090714")

    return {
        get account() {
            return new Account(client);
        },
        get users() {
            return new Users(client);
        }
    }
}