export default function Album() {
	return (
		<>
			<div className="max-w-84 w-full bg-neutral-200 rounded-md overflow-hidden items-center">
				<div className="flex relative group bg-neutral-50 aspect-square items-center">
					<div className="album transition duration-700 ease-in-out group-hover:translate-x-16 absolute m-auto inset-0 z-0 w-50 h-50 animate-spin rounded-full bg-black "><div className="album_inside"></div></div>
					<div className="cover transition duration-700 ease-in-out group-hover:-translate-x-12 m-auto inset-0 w-56 z-1 h-56 bg-[url(https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Slint_-_Spiderland.jpg/250px-Slint_-_Spiderland.jpg)] bg-contain bg-center bg-origin-border bg-neutral-400 rounded-md"></div>
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
		</>
	)
}