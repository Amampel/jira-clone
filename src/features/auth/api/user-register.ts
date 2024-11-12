import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"

import { client } from "@/src/lib/rpc"
import { useRouter } from "next/navigation"

type ResponseType = InferResponseType<typeof client.api.auth.register["$post"]>
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>

export const useRegister = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            console.log("entramos en el fetch");
            const response = await client.api.auth.register["$post"]({ json })
            console.log(response);
            return await response.json()
        },
        onSuccess: () => {
            toast.success("Registered")
            router.refresh()
            queryClient.invalidateQueries({ queryKey: ["current"] })
        },
        onError: () => {
            toast.error("Failed to register")
        }
    })

    return mutation;
}