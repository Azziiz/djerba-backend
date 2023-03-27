type PlacesProps = {
    _id: { type: Object},
    title: { type: String},
    disc: { type: String},
    price: { type: String},
    images:{ type: String[]}
    children: React.ReactNode

}

export default function Places({_id, title, disc, price, images, children}:PlacesProps) {
    return(
        <h1>{title.react}</h1>
    )
}