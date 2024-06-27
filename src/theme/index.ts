import { extendTheme } from "@chakra-ui/react"
import '@fontsource/fira-mono/400.css';
import '@fontsource/fira-mono/500.css';
import '@fontsource/fira-mono/700.css';
import { buttonComponent } from "./components/button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: {
        body: `'Fira Mono', 'Open Sans'`
    },
    components: {
        Button: buttonComponent
    }
    
})