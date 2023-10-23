"use client"
import AttractionsForm from "@/components/NewAtracttionsForm/AtracttionsForm"
import TitleSection from "@/components/NewAtracttionsForm/TittleSection"

function NewAttractionsPage() {
  return (
    <div className="flex h-auto items-center flex-col mt-12 w-290px">
      <TitleSection />
      <AttractionsForm />

    </div>
  )
}

export default NewAttractionsPage