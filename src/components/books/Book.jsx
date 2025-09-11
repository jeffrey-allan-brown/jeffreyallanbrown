export default function Book(props) {
	return (
		<>
		<div className="max-w-84 w-full rounded-md overflow-hidden items-center">
				<div className="flex relative group bg-neutral-50 aspect-square items-center">
					<div className="book mx-auto">
						<div className="book-cover" style={{ backgroundImage: `url(${props.cover})` }} >
							<div className="effect"></div>
							<div className="light"></div>
						</div>
						<div className="book-inside">
						</div>
					</div>
				</div>
				<div className="">
					<div>
						<h3 className="text-2xl text-neutral-900 truncate">{props.title}</h3>
						<p className="text-lg text-neutral-500">{props.author}</p>
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