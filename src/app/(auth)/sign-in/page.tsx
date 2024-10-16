import { getCurrent } from "@/src/features/auth/actions";
import SignInCard from "@/src/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";

const SignInPage = async () => {
    const user = await getCurrent();
    if (user) redirect("/")
    return (
        <div>
            <SignInCard />
        </div>
    );
};

export default SignInPage;