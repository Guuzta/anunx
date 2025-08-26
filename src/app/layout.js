import './global.css'

import { roboto } from '../theme/fonts'
import TemplateDefault from '../templates/Default'
import MuiThemeProvider from '../theme'
import { ToastyProvider } from '../contexts/Toasty'

export const metadata = {
  title: 'Exemplo de título',
  description: 'Exemplo de descrição para a minha página'
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={roboto.className}>
        <MuiThemeProvider>
          <TemplateDefault>
            <ToastyProvider>
              {children}
            </ToastyProvider>
          </TemplateDefault>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
