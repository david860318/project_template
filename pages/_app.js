import '@/styles/globals.css'
import '@/styles/sidebar.css'
import '@/styles/calender.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchProvider from '@/hooks/use-search'

export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <SearchProvider>{getLayout(<Component {...pageProps} />)}</SearchProvider>
    </>
  )
}
