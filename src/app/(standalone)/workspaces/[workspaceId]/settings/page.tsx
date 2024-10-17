import { getCurrent } from "@/src/features/auth/actions";
import { getWorkspace } from "@/src/features/workspaces/actions";
import { EditWorkspaceForm } from "@/src/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingsPageProps {
    params: {
        workspaceId: string;
    }
}

const WorkspaceIdSettingsPage = async ({ params }: WorkspaceIdSettingsPageProps) => {
    const user = await getCurrent()
    if (!user) redirect("/sign-in")

    const initialValue = await getWorkspace({ workspaceId: params.workspaceId })
    if (!initialValue) { redirect(`/workspaces/${params.workspaceId}`) }
    return (
        <div className="w-full lg:max-w-xl">
            <EditWorkspaceForm initialValues={initialValue} />
        </div>
    )
}

export default WorkspaceIdSettingsPage;