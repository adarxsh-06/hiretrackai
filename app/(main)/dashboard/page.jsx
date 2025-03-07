
import { getIndustryInsights } from '@/actions/dashboard'

import DashboardView from './_components/DashboardView'

const IndustryInsightsPage = async () => {

  const insights=await getIndustryInsights()
  
  return (
    <div className="container mx-auto">
        <DashboardView insights={insights}/>
    </div>
  )
  
}

export default IndustryInsightsPage