"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({
 }) =>{
    return <NextThemeProvider>
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        {children}
    </NextThemeProvider>
}