import { getCurrent } from "@/src/features/auth/actions";
import { getWorkspaceInfo } from "@/src/features/workspaces/actions";
import { JoinWorkspaceForm } from "@/src/features/workspaces/components/join-workspace-form";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
    params: {
        workspaceId: string;
    }
}

const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
    const user = await getCurrent();

    if (!user) redirect("/sign-in")

    const initialValues = await getWorkspaceInfo({
        workspaceId: params.workspaceId
    })

    if (!initialValues) {
        redirect("/")
    }

    return (
        <div className="w-full lg:max-w-xl">
            <JoinWorkspaceForm initialValue={initialValues} />
        </div>
    )
}

export default WorkspaceIdJoinPage;