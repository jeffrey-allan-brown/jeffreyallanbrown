'client only'
export default function Album(props) {

	return (
		<>
			<div className="xl:w-64 rounded-md overflow-hidden items-center">
				<div className="flex relative group bg-neutral-50 aspect-square items-center">
					<div style={{ "--border-color": props.color }} className="after:[border:var(--border-color)] album transition duration-700 ease-in-out group-hover:translate-x-12 absolute m-auto inset-0 z-0 xl:w-32 xl:h-32 animate-spin rounded-full bg-black">
						<div className="album_inside"></div>
					</div>
					<div style={{ backgroundImage: `url(${props.cover})` }} className={`shadow-xl/40 transition duration-700 ease-in-out group-hover:-translate-x-10 m-auto inset-0 z-1 w-40 h-40 bg-contain bg-center bg-origin-border bg-neutral-400 rounded-md`}></div>
				</div>
				<div className="">
					<div>
						<h3 className="text-2xl text-neutral-900 truncate">{props.title}</h3>
						<p className="text-lg text-neutral-500">{props.artist}</p>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-1">
							<div className="text-neutral-400">★★★★★</div>
							{/* <div className="text-gray-300">★</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}