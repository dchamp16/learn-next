import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import '@/styles/globals.css'


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
