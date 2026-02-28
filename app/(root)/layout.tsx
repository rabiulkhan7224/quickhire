import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <section className="px-4">
            <Navbar />
            {children}
            <Footer />
        </section>
    );
}