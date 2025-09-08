import { Provider } from 'react-redux'

import { SideBarChangeBackground } from '@/modules/SideBarChangeBackground/SideBarChangeBackground.tsx'
import { store } from '@/state/store'

function App() {
  return (
    <Provider store={store}>
      <SideBarChangeBackground />
    </Provider>
  )
}
export default App
