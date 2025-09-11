import Link from 'next/link'

export default function Header() {
  return (
    <header className="inset-x-0 top-0">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">jeffreyallanbrown</span>
            <img src="/images/logo-100.png" alt="" className="h-18 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-lg font-normal text-neutral-900">Home</a>
          <a href="#" className="text-lg font-normal text-gray-900">Media</a>
          <a href="#" className="text-lg font-normal text-gray-900">Digital Garden</a>
        </div>
      </nav>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex="0" className="fixed inset-0 focus:outline-none">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">jeffreyallanbrown</span>
                  <img src="/images/logo-50.png" alt="" className="h-8 w-auto" />
                </a>
                <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">close menu</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-normal text-neutral-900">Home</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-normal text-neutral-900">Media</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-normal text-neutral-900">Digital Garden</a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </dialog>
    
    </header>
  )
}