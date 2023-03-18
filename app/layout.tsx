
import { Header } from '@/components/header/Header';
import { Footer } from '../components/footer/Footer';

import '../styles/globals.css';



export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html className='h-screen w-screen'>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>
        <body className='h-screen w-screen'>

            <div className='flex flex-col items-center justify-between h-full w-full pl-10 pr-10'>

                <Header />

                    <div className='flex justify-center'>
                    {/*  */}
                        <div className='flex flex-col '>
                            {children}
                        </div>

                    </div>

                <Footer />

            </div>
        </body>
      </html>
    );
  }