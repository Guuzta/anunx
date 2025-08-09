import MuiThemeProvider from '../theme'
import { roboto } from '../theme/fonts'

import TemplateDefault from '../templates/Default'

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
            {children}
          </TemplateDefault>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
