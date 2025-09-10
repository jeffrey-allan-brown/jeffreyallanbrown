export default function Album() {
	return (
		<>

<div className="bg-gray-100 flex">
  <div className="max-w-xs w-full rounded-md overflow-hidden transition-all items-center">
      <div className="flex bg-neutral-200 aspect-square items-center">
				<div className="w-48 h-48 bg-neutral-400 m-auto"></div>
			</div>
    <div className="p-1 space-y-2">
      <div>
        <h3 className="text-2xl font-lato text-gray-900">Album Name</h3>
        <p className="text-gray-500 mt-1">Artist Name</p>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="text-yellow-400">★★★★</div>
          <div className="text-gray-300">★</div>
        </div>
      </div>
    </div>
  </div>
</div>
		</>
	)
}