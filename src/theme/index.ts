import { extendTheme } from "@chakra-ui/react"

import '@fontsource/noto-sans/latin-ext-300.css';
import '@fontsource/noto-sans/latin-ext-400.css';
import '@fontsource/noto-sans/latin-ext-500.css';
import '@fontsource/noto-sans/latin-ext-600.css';
import '@fontsource/noto-sans/latin-ext-700.css';
import '@fontsource/noto-sans/latin-300.css';
import '@fontsource/noto-sans/latin-400.css';
import '@fontsource/noto-sans/latin-500.css';
import '@fontsource/noto-sans/latin-600.css';
import '@fontsource/noto-sans/latin-700.css';


import { buttonComponent } from "./components/button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: {
        body: `'Noto Sans', 'Open Sans'`
    },
    components: {
        Button: buttonComponent
    }
    
})