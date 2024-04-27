import { UserButton } from "@clerk/nextjs"

const ProtectedPage = () => {
return (
    <div>
    <div> Protected page</div>
    <UserButton
        afterSignOutUrl="/"
        appearance={{
            elements: {
                avatarBox: {
                    height: 30,
                    width: 30,
                }
            }
        }}
    />
    </div>
)}

export default ProtectedPage;