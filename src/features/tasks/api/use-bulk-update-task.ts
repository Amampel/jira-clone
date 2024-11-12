import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"

import { client } from "@/src/lib/rpc"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type ResponseType = InferResponseType<typeof client.api.tasks["bulk-update"]["$post"], 200>
type RequestType = InferRequestType<typeof client.api.tasks["bulk-update"]["$post"]>

export const useBulkUpdateTask = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            const response = await client.api.tasks["bulk-update"]["$post"]({ json })
            if (!response.ok) {
                throw new Error("Failed to bulk update tasks");
            }
            return await response.json()
        },
        onSuccess: () => {
            toast.success("Task bulk update")
            queryClient.invalidateQueries({ queryKey: ["tasks"] })

        },
        onError: () => {
            toast.error("Failed to bulk update task")
        }
    })
    return mutation;
}