import { UserButton } from "@clerk/nextjs/app-beta";

const SetupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-medium">Hello it`s adminka!</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
