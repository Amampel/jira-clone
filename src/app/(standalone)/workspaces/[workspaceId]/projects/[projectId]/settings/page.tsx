import { getCurrent } from "@/src/features/auth/actions";
import { getProject } from "@/src/features/projects/actions";
import { EditProjectForm } from "@/src/features/projects/components/edit-project-form";
import { redirect } from "next/navigation";

interface ProjectIdSettingPageProps {
    params: {
        projectId: string;
    }
}
const ProjectIdSettingPage = async ({ params }: ProjectIdSettingPageProps) => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in")

    const initialValues = await getProject({
        projectId: params.projectId
    })

    return (
        <div className="w-full lg:max-w-xl">
            <EditProjectForm initialValues={initialValues} />
        </div>
    )
}
export default ProjectIdSettingPage;