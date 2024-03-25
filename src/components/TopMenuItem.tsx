import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link className="w-[140px] text-center mt-auto mb-auto text-md font-bold text-white" href={pageRef}>
            {title}
        </Link>
    );
}