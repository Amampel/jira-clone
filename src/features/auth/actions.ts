"use server"

import { createSessionClient } from "@/src/lib/appwrite"

export const getCurrent = async () => {
    try {
        const { account } = await createSessionClient();
        return await account.get()
    }
    catch (err) {
        console.log(err);
        return null;
    }
}