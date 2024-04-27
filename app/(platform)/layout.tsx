// clerk setup says add this to your root layout.
// but we're going to create a 'platform' layout
// so we only do auth where it's needed
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;