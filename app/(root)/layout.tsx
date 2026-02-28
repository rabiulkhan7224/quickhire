import { Navbar } from "@/components/navbar";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <section className="">
            <Navbar />
            {children}
        </section>
    );
}