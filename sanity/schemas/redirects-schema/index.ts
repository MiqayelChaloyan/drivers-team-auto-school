const title = 'Այլ վեբ էջերի հղումներ';

const redirects = {
    name: 'redirects',
    type: 'document',
    title: 'Redirects',
    id: 'redirects',
    fields: [
        {
            name: "policeLink",
            type: "string",
            title: "Police.am",
        },
        {
            name: "lawLink",
            type: "string",
            title: "ՀՀ ՕՐԵՆՔԸ ՃԱՆԱՊԱՐՀԱՅԻՆ ԵՐԹԵՎԵԿՈՒԹՅԱՆ ԱՆՎՏԱՆԳՈՒԹՅԱՆ ԱՊԱՀՈՎՄԱՆ ՄԱՍԻՆ",
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title,
            };
        },
    }
};

export default redirects;
