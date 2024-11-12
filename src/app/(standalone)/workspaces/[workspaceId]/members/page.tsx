import { getCurrent } from "@/src/features/auth/actions";
import MembersList from "@/src/features/workspaces/components/members-list";
import { redirect } from "next/navigation";

const WorkspaceIdMembersPage = async () => {
    const user = await getCurrent();
    if (!user) {
        redirect("/sign-in")
    }
    return (
        <div className="w-full lg:max-w-xl">
            <MembersList />
        </div>
    )
}
export default WorkspaceIdMembersPage;