import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const OnboardingTop = () => {
  return (
    <div className="flex px-5 py-3 mx-auto w-full items-center justify-between border-b-4 border-[#006FA3] relative top-0">
        <h2 className="text-3xl font-semibold text-[#006FA3]">LINKPROSOFT</h2>
        <div className="flex gap-2 items-center">
            <Button className="bg-[#006FA3] px-7">Post Gig</Button>
            <Button className="bg-blue-950 px-7">Sign in</Button>
            <Avatar className="!max-w-fit">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default OnboardingTop


// !max-w-8 !max-h-8