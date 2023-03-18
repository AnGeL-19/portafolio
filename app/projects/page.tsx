import { Project } from "@/components/project/Project";

export default function Projects(): JSX.Element {
    return (
        <div>
            <h2 className="text-[#414141] font-bold text-5xl">PROJECTS</h2>

            <section className="max-w-[865px] h-full bg-slate-500 flex flex-wrap gap-3">

                <Project size="normal"/>
                <Project size="normal"/>
                <Project size="normal"/>

            </section>


        </div>
    )
}
