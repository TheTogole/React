import heroImg from "../assets/hero.png";
export default function Header() {
    return (
        <>
        <div class="flex items-center justify-center">
            <h1 class="text-5xl font-extrabold tracking-tight text-red-700 sm:text-5xl md:text-6xl">Hej</h1>
        </div>
        <div class="flex flex-row items-center justify-center flex-wrap">
            <img src={heroImg} />
            <img src={heroImg}/>
        </div>
        </>
    )
}
