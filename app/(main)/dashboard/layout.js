import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div className="px-6 py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 rounded-lg shadow-md dark:shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
          Industry Insights
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="green" />}
      >
        {children}
      </Suspense>
    </div>
  );
};
export default Layout;
