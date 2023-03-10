export default function Work({year, place , work , title}){
    return(
        <div className="work">
            <span>{year}</span>
            <span className="place">{place}</span>
            <span>{work}</span>
            <span className="title">{title}</span>

        </div>
    )
}