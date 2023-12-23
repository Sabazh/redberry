import './globals.css'
import AppContextProvider from "@/context/AppContext";

export const metadata = {
  title: 'Redberry',
  description: 'Redberry app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body>
          {children}
        </body>
      </AppContextProvider>
    </html>
  )
}
