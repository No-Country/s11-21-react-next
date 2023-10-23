"use client"
import AttractionsForm from "@/components/NewAttractionsForm/AttractionsForm"
import TitleSection from "@/components/NewAttractionsForm/TitleSection"

function NewAttractionsPage() {
  return (
    <div className="flex h-auto items-center flex-col mt-12 w-290px">
      <TitleSection />
      <AttractionsForm />
    
    </div>
  )
}

export default NewAttractionsPage