'use client';
import { Provider } from 'react-redux';

import Navbar from '@/components/Navbar';
import Submenu from '@/components/Submenu';
import store from '@/store/store';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <div className='container'>
            <Navbar />
            <Submenu />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
