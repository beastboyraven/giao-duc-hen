import { Navigate, useParams } from 'react-router-dom'
import content from '../data/content.json'
import EquipmentGuidePage from './EquipmentGuidePage.jsx'
import InhalerSubNav from '../components/InhalerSubNav.jsx'

const TAB_TO_PAGE_KEY = {
  'ong-ngam': 'mdi-ong-ngam',
  'mat-na': 'su-dung-mat-na',
  've-sinh-buong-dem': 've-sinh-buong-dem'
}

const DEFAULT_TAB = 'ong-ngam'

export default function InhalerGuidePage() {
  const { tab } = useParams()
  const pageKey = TAB_TO_PAGE_KEY[tab]

  if (!pageKey || !content.pages[pageKey]) {
    return <Navigate to={`/huong-dan-dung-cu-hit/${DEFAULT_TAB}`} replace />
  }

  return (
    <EquipmentGuidePage pageKey={pageKey} subNav={<InhalerSubNav />} />
  )
}
