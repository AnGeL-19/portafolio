import { Project } from "@/components/project/Project";
import { ShowProjects } from "@/components/project/ShowProjects";

export default function Projects(): JSX.Element {
    return (
        <div className="flex flex-col">
            <h2 className="text-[#414141] font-bold text-5xl mb-5">PROJECTS</h2>

            <section className="flex flex-wrap gap-5">
                
                <ShowProjects all sizeComponents="medium" /> 

            </section>


        </div>
    )
}
