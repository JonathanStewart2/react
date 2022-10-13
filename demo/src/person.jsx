

function person() {
    const me = {
        forename: "Jin",
        surname: "Sakai",
        occupation: "Samurai",
        aka: "Ghost",
        location: "Tsushima Island"
    }
    return (
        <div>
            <p><b><u>Name:</u> {me.forename} {me.surname}</b></p>
            <p><b><u>aka:</u> {me.aka}</b></p>
            <p><b><u>Occupation:</u> {me.occupation}</b></p>
            <p><b><u>Location:</u> {me.location}</b></p>
        </div>
    )
}

export default person;