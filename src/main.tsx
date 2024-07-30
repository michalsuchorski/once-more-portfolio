import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/index.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/index.ts'
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
