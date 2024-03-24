import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link className="w-[100px] text-center mt-auto mb-auto text-sm font-bold text-gray-500" href={pageRef}>
            {title}
        </Link>
    );
}