import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
export const metadata: Metadata = { title:"Driss Zaggar — AI/ML Engineer & Full-Stack Developer", description:"Portfolio of Driss Zaggar, State Engineer specialized in AI/Machine Learning, industrial AI and full-stack development.", keywords:["Driss Zaggar","AI Engineer","Machine Learning","Full-Stack","Python","FastAPI","React","Spring Boot","MLOps"] };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<Analytics/></body></html>}