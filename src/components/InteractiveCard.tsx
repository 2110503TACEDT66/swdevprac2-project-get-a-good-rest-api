'use client'

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type === "mouseover") {
            event.currentTarget.classList.remove("shadow-lg");
            event.currentTarget.classList.add("shadow-2xl");

            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");
        } else {
            event.currentTarget.classList.remove("shadow-2xl");
            event.currentTarget.classList.add("shadow-lg");

            event.currentTarget.classList.remove("bg-neutral-200");            
            event.currentTarget.classList.add("bg-white");
        }
    }

    return (
        <div className="w-[320px] h-[340px] shadow-lg bg-white rounded-lg overflow-hidden text-center"
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}
            onClick={(e) => {e.stopPropagation();}}
        >
            {children}
        </div>
    )
}