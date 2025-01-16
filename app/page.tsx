import ConnectedSignUpForm from "@/app/components/connected/ConnectedSignUpForm/ConnectedSignUpForm";

export default function Home() {
  return (
    <main className="h-[100shv] p-7 grid place-items-center">
      <ConnectedSignUpForm className="w-full md:max-w-[400px]" />
    </main>
  );
}
