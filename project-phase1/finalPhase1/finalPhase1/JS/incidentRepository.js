//incident JSON
let incident = [
    {
        "id":1702,
        "date":"30/12/2019",
        "grade level":"8",
        "incident":"homework not done"

    },
    {
        "id":1703,
        "date":"15/12/2019",
        "grade level":"6",
        "incident":"fight in playground"

    },
    {
        "id":1704,
        "date":"01/12/2019",
        "grade level":"7",
        "incident":"skipped class"

    },
    {
        "id":1705,
        "date":"01/01/2020",
        "grade level":"8",
        "incident":"homework not done"

    },
    {
        "id":1706,
        "date":"15/01/2020",
        "grade level":"7",
        "incident":"fight in the playground"

    },
    {
        "id":1707,
        "date":"30/01/2020",
        "grade level":"6",
        "incident":"skipped class"
    }
]

localStorage.incident = JSON.stringify(incident)
let allIncidents = JSON.parse(localStorage.incident)