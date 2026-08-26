export default function SignIn(){
    return(
        <>
        <div class="flex items-center flex-wrap">
            <p class="text-5xl font-extrabold tracking-tight text-red-700 sm:text-5xl md:text-6xl">
                Im
            </p>
            <input type="text" placeholder="Dit navn" class="text-5xl"></input>
            <p class="text-5xl font-extrabold tracking-tight text-red-700 sm:text-5xl md:text-6xl">
                MY PASSWORD IS
            </p>
            <input type="text" placeholder="Din adgangskode" class="text-5xl text-red-700"></input>
        </div>
        </>
    )
}