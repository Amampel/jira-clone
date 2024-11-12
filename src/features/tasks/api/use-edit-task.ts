import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono"

import { client } from "@/src/lib/rpc"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type ResponseType = InferResponseType<typeof client.api.tasks[":taskId"]["$patch"], 200>
type RequestType = InferRequestType<typeof client.api.tasks[":taskId"]["$patch"]>

export const useEditTask = () => {
    const router = useRouter()
    const queryClient = useQueryClient()

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json, param }) => {
            const response = await client.api.tasks[":taskId"]["$patch"]({ json, param })
            if (!response.ok) {
                throw new Error("Failed to update tasks");
            }
            return await response.json()
        },
        onSuccess: ({ data }) => {
            toast.success("Task updated")

            console.log('lpepepep');

            router.refresh()
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            queryClient.invalidateQueries({ queryKey: ["task", data.$id] })

        },
        onError: () => {
            toast.error("Failed to update task")
        }
    })
    return mutation;
}