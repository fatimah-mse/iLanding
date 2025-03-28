'use client'

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showPreloader, setShowPreloader] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return showPreloader ? <Preloader /> : children;
}