function anonymous(obj
) {
    let str = ""
    with (obj) {
        str = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
        `
        if (name) {
            str += `
            <h1>hello</h1>
        `
        } else {
            str += `
            <h1>word</h1>
        `
        }
        str += `
    </body>
    </html>`
    }
    return str
}