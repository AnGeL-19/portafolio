
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
      <html>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>
        <body className='font-sans'>

            <div className='min-h-screen flex flex-col justify-between'>

              <div className='container mx-auto'>
                <Header />

                  <div className='flex flex-col mt-10 lg:px-20 md:px-6 px-2'>
                      
                    {children}
                      
                  </div>

              </div>
                

              <Footer />

            </div>
        </body>
      </html>
    );
  }