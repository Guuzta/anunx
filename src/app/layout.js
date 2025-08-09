import MuiThemeProvider from '../theme'
import { roboto } from '../theme/fonts'

export const metadata = {
  title: 'Exemplo de título',
  description: 'Exemplo de descrição para a minha página'
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={roboto.className}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  )
}
