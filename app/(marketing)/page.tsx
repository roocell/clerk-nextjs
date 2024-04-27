import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
        <Link href="/sign-in">
          Sign in
        </Link>
    </div>
  );
};

export default MarketingPage;